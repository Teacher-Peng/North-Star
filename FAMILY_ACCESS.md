# Private family access

Status: deployed and browser-tested on the private GoDaddy preview on 2026-10-20. Not published to the live domain. No database or Google account is required for the family login; the hosting provider separately requires the owner to sign in to access its private preview.

## How it works

Each invited family receives a reusable, randomly generated code containing 192 bits of randomness. The server configuration stores only its SHA-256 hash, family ID and display label. This is a bearer credential: anyone with the full code can enter. It is not a one-time invitation or proof of a person's identity; do not replace it with a short memorable password.

In family mode, /login is the public entry point. The same-origin form checks CSRF and a one-use, ten-minute challenge before checking the code. Successful login rotates the session ID and CSRF token. The cookie is HttpOnly and SameSite=Lax, with Secure on HTTPS. Sessions live in server memory for eight hours. All lesson assets, AI APIs and ChatGPT authorization routes require access. Logout deletes the session and expires the cookie. Same-origin referrer policy preserves the browser Origin header for native form POSTs while withholding referrers to other sites.

## First invitation and local preview

The first invitation is saved privately in .local/family-invites/main-family.txt. Open that file locally and copy the Access code value into http://localhost:5176/login. It is excluded from Git and must not be uploaded to hosting. Store the code in your password manager; the delivery file can then be removed. The .env.local configuration contains only the hash, not the original code.

Start the family preview:

    PUBLIC_ORIGIN=http://localhost:5176 PORT=5176 BIND_HOST=127.0.0.1 FAMILY_AUTH_MODE=family npm start

The ordinary npm start remains the loopback-only prototype on port 5175. An iPad cannot use this computer's localhost address. Local bypass is forbidden on public listeners/origins and in production.

## Invite, replace or remove a family

Create a code with a unique lowercase ID and a display label:

    npm run family:invite -- another-family "Another family"

The command saves a private delivery file and updates the hash-only FAMILY_ACCESS_CODES JSON in .env.local. It never prints the code. Restart the server to load changes. Share the code privately with the intended family; do not put it in a URL or public message.

To replace a lost or leaked code:

    npm run family:invite -- main-family "我的家庭" --rotate

This replaces that family's hash and delivery file. Restart/redeploy with the new configuration; the old code no longer works. To revoke access, remove the family's object from FAMILY_ACCESS_CODES, then restart/redeploy. Restarting clears all in-memory sessions. Never delete only the delivery file and assume access is revoked.

The generator refuses existing invitations unless --rotate is explicit, validates IDs and configuration, avoids symlinks, and writes delivery/config files with owner-only permissions. Keep .local/ and .env.local private.

## GoDaddy deployment configuration

Set these in the Node.js application's private environment:

    NODE_ENV=production
    PUBLIC_ORIGIN=https://ailearning.com.tw
    FAMILY_AUTH_MODE=family
    FAMILY_ACCESS_CODES=<the generated JSON array of IDs, labels and hashes>
    CHATGPT_LOGIN_ENABLED=false

Use the platform's PORT. Family mode defaults to binding 0.0.0.0. The actual HTTPS origin must match PUBLIC_ORIGIN; confirm the reverse proxy preserves the Host header. Keep the existing OpenAI API key in private server configuration. Never upload .env.local, invitation delivery files or .local/ OAuth registration as public assets.

Family access is separate from AI authorization. Hosted mode disables the existing ChatGPT subscription text/image authorization until public-domain eligibility and registration are verified. Family login does not enable it or automatically switch to a paid text API. Realtime voice uses the existing server API key after family login.

## Limits and verification

- One server instance; sessions disappear on restart. Multiple instances need shared session storage or another reviewed design.
- Up to 100 configured families, 1,000 active sessions, and 30 login attempts per minute across the process. This basic global rate limit may temporarily block legitimate sign-ins during abuse.
- Learning progress remains in browser storage, not separated by family account on a shared device and not synced between devices. No child-profile selector or admin dashboard is included.
- Login protection and call timers are not durable AI spending limits. Add server-enforced usage budgets before expanding access.
- Logout prevents new requests. An already-connected direct WebRTC call in another tab is not forcibly ended by this session layer. Close active calls when revoking access.

36 authentication tests cover random code generation, malformed/hash-only configuration, wrong and unknown codes, rotation, CSRF/origin, challenges, expiry/replay, session rotation, logout/revocation, route guards and rate limits. The full suite has 90 passing tests plus 859 grading fixtures. Browser checks confirmed wrong-code rejection, real local code login, the family label and logout. A native-form Origin issue found in that check was fixed without weakening CSRF/origin checks. No paid AI request was made for authentication testing.

Before publication, verify HTTPS cookies, proxy headers, unauthenticated API rejection, a real hosted login and iPad behavior. The existing question quality release gate still requires current educator/human review; these technical tests do not approve the curriculum.

## Superseded Google setup

The user chose private family codes after the child-directed-app restriction was identified in Google's policy. Google login code and settings have been removed. The personal Google Cloud project North Star Education (clear-tooling-512215-g2) remains unused; branding was not submitted and no OAuth client was created. No Google consent, client, billing change or database is needed for this replacement.

Policy reference: [Google API Services User Data Policy — Child-directed apps](https://developers.google.com/terms/api-services-user-data-policy#child-directed-apps). Historical decisions remain in DECISIONS.md.

## GoDaddy setup checkpoint (2026-10-20)

North-Star app `5efv50aj72` is attached to the existing Economy plan and connected to `Teacher-Peng/North-Star`, branch `main`. Its preview environment lists five deployed settings: PUBLIC_ORIGIN, FAMILY_AUTH_MODE, FAMILY_ACCESS_CODES, CHATGPT_LOGIN_ENABLED and OPENAI_API_KEY. Credential transfer was explicitly approved by the owner. Published-environment secrets remain empty and the app has not been published.

Latest protected source was pushed as commit `15650f1`. The dashboard had previously deployed `63a4eab` (old loopback-only code) and showed Gateway error. A fresh preview pull must be verified against the new commit. The platform reported Node.js 22 for the old deployment; the new package requests Node.js 24.x.

Preview URL shown by GoDaddy: https://5efv50aj72.preview.c24.airoapp.ai (requires GoDaddy account sign-in). PUBLIC_ORIGIN was initially set to https://ailearning.com.tw during onboarding. Replacing it with the preview URL hit a GoDaddy reauthentication dialog that stayed blank, including after refresh; the replacement is **not confirmed saved**. The owner was asked to sign back in. Resume by checking that setting, then update preview and test login/route guards. Do not publish the old build or assume that saving setup secrets proves the preview is healthy.

## Preview verified after reauthentication (2026-10-20)

The owner signed back in. PUBLIC_ORIGIN was successfully saved as https://5efv50aj72.preview.c24.airoapp.ai, confirmed by GoDaddy’s “Your secrets have been saved” dialog. Update Preview pulled commit 15650f1. The dashboard reports Build status Healthy, Infra status OK, and Site status Auth required. Its root health probe cannot assess the protected homepage; this is separate from a build failure. The dashboard still labels the runtime Node.js 22 despite package engines requesting 24.x; the deployed application starts and the flows below work, but do not claim the runtime is 24 without platform verification.

Browser checks on HTTPS passed: wrong code rejected, existing family code logs in, all ten units/234 questions render on home, logout returns to login, anonymous /api/voice returns loginRequired, and direct /lessons.js redirects to login. No live microphone or paid OpenAI request was made. Source credential values were not shown in logs/screenshots.

Open the private preview through https://host.godaddy.com/nodejs/projects/5efv50aj72/preview while signed into the owner’s GoDaddy account. This link is not yet suitable for ordinary family invitations because GoDaddy adds its own preview-access gate. Published secrets remain unconfigured. Publication and custom-domain connection are still pending; use the live HTTPS origin in the Published environment, verify its login/API protection, and retain the curriculum’s pending review status.

## Hosting health probe (2026-10-21)

The exact GET/HEAD /healthz endpoint is public and returns only {"status":"ok"}; it creates no cookie and exposes no configuration or content. It deliberately accepts the platform's internal Host before domain attachment. All other routes retain strict Host and family-access checks. GoDaddy General > Root path is /healthz for monitoring; dashboard-generated links may therefore open the status response. Learners should use the ordinary domain root /login or /#home, not the dashboard's health URL.

A production-mode HTTP smoke check confirmed liveness succeeds with an internal Host, POST/subpaths do not bypass the Host guard, the correct domain's anonymous home redirects to login and anonymous voice requests remain denied. The first smoke client's fetch did not send the intended Host override; switching to node:http fixed the test setup without changing assertions or relaxing the application guard. The 90-test suite and 859 grading fixtures still pass.
