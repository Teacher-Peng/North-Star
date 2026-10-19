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

The server accepts only loopback connections. An iPad cannot open this computer's `127.0.0.1` address; remote access, HTTPS, authentication and spending controls require a separate deployment design.

## Features

- Ten first-semester units, 188 original questions: choice, numeric/fraction answers, multi-step answers and error correction.
- Direct question selection, hints, illustrated solutions and progress records.
- Per-question handwriting canvas with pen/touch/mouse, eraser, undo and pen-only mode.
- Camera/gallery images, local preview and explicit attachment to text chat alongside question context.
- Floating tutor chat and WebRTC voice with interruption, mute and end controls.
- Xiaoguang idle blink, listening, speaking and brief correct-answer celebration; reduced-motion support. Speaking animation is not phoneme-synchronized.

Unit ordering is based on the user's supplied Nani Grade 5 first-semester workbook contents. Exercises are original prototype material, not publisher exercises or an official partnership. See `DECISIONS.md` for source history and critical decisions.

## Structure

- `public/`: buildless HTML, CSS and JavaScript; original lessons, diagrams, grading, handwriting and tutor UI.
- `server.mjs`: Node HTTP server, OAuth and OpenAI requests.
- `tutor-instructions.txt`: teaching instructions, read on every new request. Guides one step at a time without prematurely giving answers.
- `scripts/expand-curriculum.cjs`: curriculum maintenance script.

Run `npm test` for shared grading/context regression tests. Restart after changing server code or its imported lesson/grading definitions; refresh for frontend changes.

## Data and current limits

Secrets stay on the server. `.env*`, `.local/`, and `node_modules/` are excluded from Git. OAuth access tokens and chat history stay in process memory; a restart requires login again. `.local/` stores local registration identifiers. Completed practice records use browser local storage; unfinished practice and recent 20 handwriting/photo drafts are memory-only and reset on refresh.

Images are resized and converted to JPEG locally, and sent only when the learner submits. They are not retained in server conversation history and are not sent into voice sessions. Ambiguous handwriting should be clarified rather than graded automatically. Physical iPad Pencil/camera behavior and authenticated image-chat acceptance still need device/account testing.

Voice uses `gpt-realtime-2.1-mini`; microphone permission is requested on click. Navigation, collapse, two minutes of inactivity or fifteen minutes per call end the session. These timers are not a monetary spending cap. Do not expose the local prototype publicly without adding deployment access and spending controls.
