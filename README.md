# 北極星 North Star

A local Grade 5 math learning prototype with original practice questions, illustrated explanations, and Xiaoguang (小光), an animated AI tutor.

## Run locally

Requires Node.js 22+ (developed with Node.js 24).

```sh
npm ci --ignore-scripts
npm start
```

Open http://127.0.0.1:5175/#home. Only one copy can listen on port 5175 at a time.

For optional Realtime voice, copy `.env.example` to `.env.local` and configure your OpenAI API key locally. Never commit the real file. Voice uses API credits; text/image chat uses the existing ChatGPT authorization flow, subject to account/model eligibility, with no automatic API fallback.

By default the server accepts only loopback connections. An iPad cannot open this computer's `127.0.0.1` address. Private family access codes now protect hosted mode without a database or Google account. See [FAMILY_ACCESS.md](FAMILY_ACCESS.md) for local login, invitations, rotation and deployment configuration. Hosted mode keeps the existing ChatGPT subscription integration disabled until public-domain authorization is verified.

## Features

- Ten first-semester units, 204 foundation/application questions plus 30 interactive missions (234 total): choice, numeric/fraction answers, multi-step answers and error correction.
- Direct question selection, hints, illustrated solutions and progress records.
- `#games` opens 30 independent missions across all ten units: chart plotting, factor grouping, angle assembly, fraction painting, mirror points, step-card puzzles, time boxes and cube-net exploration. Drag or click to place cards. Mission badges are separate from academic scores.
- See `CURRICULUM_REVIEW.md` for the grade-five content review, coverage and remaining limitations.
- Per-question handwriting canvas with pen/touch/mouse, eraser, undo and pen-only mode.
- Camera/gallery images, local preview and explicit attachment to text chat alongside question context.
- Floating tutor chat and WebRTC voice with interruption, mute and end controls.
- Xiaoguang idle blink, listening, speaking and brief correct-answer celebration; reduced-motion support. Speaking animation is not phoneme-synchronized.

Unit ordering is based on the user's supplied Nani Grade 5 first-semester workbook contents. Exercises are original prototype material, not publisher exercises or an official partnership. See `DECISIONS.md` for source history and critical decisions.

## Development continuity

Before planning or changing features, read the relevant entries in [DECISIONS.md](DECISIONS.md) and the content status in [CURRICULUM_REVIEW.md](CURRICULUM_REVIEW.md). Record new major decisions with their rationale and implementation/verification status. The question-diversity decision has been applied to the area main sequence; other units and repeat-practice variants remain pending. Prioritize distinct mathematical thinking over question count or cosmetic interaction changes.

## Source structure

- `public/`: buildless HTML, CSS and JavaScript; original lessons, diagrams, grading, handwriting and tutor UI.
- `server.mjs`: Node HTTP server, OAuth and OpenAI requests.
- `family-auth.mjs`: private family code login, session rotation and hosted access guard.
- `family-codes.mjs` and `scripts/create-family-code.mjs`: random invitation generation and hash-only verification.
- `private/family-login.html`: server-rendered login page; no private allowlist is sent to the browser.
- `tutor-instructions.txt`: teaching instructions, read on every new request. Guides one step at a time without prematurely giving answers.
- `scripts/expand-curriculum.cjs`: curriculum maintenance script.

Run `npm test` for shared grading/context regression tests. Restart after changing server code or its imported lesson/grading definitions; refresh for frontend changes.

## Data and current limits

Secrets stay on the server. `.env*`, `.local/`, and `node_modules/` are excluded from Git. OAuth access tokens and chat history stay in process memory; a restart requires login again. `.local/` stores local registration identifiers. Completed practice records use browser local storage; unfinished practice and recent 20 handwriting/photo drafts are memory-only and reset on refresh.

Images are resized and converted to JPEG locally, and sent only when the learner submits. They are not retained in server conversation history and are not sent into voice sessions. Ambiguous handwriting should be clarified rather than graded automatically. Physical iPad Pencil/camera behavior and authenticated image-chat acceptance still need device/account testing.

Voice uses `gpt-realtime-2.1-mini`; microphone permission is requested on click. Navigation, collapse, two minutes of inactivity or fifteen minutes per call end the session. These timers are not a monetary spending cap. Hosted family mode requires an approved login before creating a call. Durable usage controls and a real hosted login check remain release work.


## Question quality gate

Run `npm run verify` after curriculum changes. The audit covers all 234 Grade 5 first-semester questions with versioned teaching profiles, independently worked positive/negative grading examples, diagram/context checks, and unit-level repetition warnings. See [quality/README.md](quality/README.md), [current report](quality/GRADE5_REPORT.md), and [review packet](quality/GRADE5_REVIEW_PACKET.md).

`npm run quality:release` fails until current teaching, visual/interaction, and human review evidence exists. Technical checks passing never auto-approve teaching quality. This is a local development gate; it does not hide existing prototype questions or enforce hosting deployment. No paid AI reviewer runs automatically. All ten first-semester units have profiles and grading cases; second-semester material is not included. Desktop initial rendering was checked for every question; actual child and iPad usability still needs observation.
