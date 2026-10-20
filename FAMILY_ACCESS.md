# Private family access

Status: implemented and tested locally on 2026-10-20. Not deployed to GoDaddy. No database or Google account is required.

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
