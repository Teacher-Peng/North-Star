# Decision Log

This file records important product, teaching, and engineering decisions for North Star. Earlier Spelling Bee entries are retained as project history; later decisions supersede earlier ones where stated.

## Working Agreement

- Ask before making decisions that affect architecture, data shape, UX behavior, naming, or long-term maintainability.
- Make small, reversible implementation choices directly when they are necessary to complete an already-approved decision.
- Record important decisions here with date, context, decision, and rationale.
- Before development, read the relevant decisions and curriculum review. Separate agreed direction, implemented behavior, and verified outcomes; do not report a proposal as shipped.
- When a decision changes, append a dated entry explaining what it supersedes. Record meaningful limitations and follow-up work so future sessions can continue from evidence.

## 2026-10-20 — 題目多樣性以思考方式為核心

**狀態：已確認的出題方向；題庫重整尚未實作。**

背景：使用者在面積練習指出題目太相似。先前擴充題數與互動機制，仍有多題只替換數字、情境或操作形式，沒有帶來不同的思考。使用者要求參考教育資源、以教育者角度避免重複，並明確要求記錄這次共識。

決定與理由：

- 先定義學習目標與「孩子需要想什麼」，再選擇輸入方式。選擇、拖拉、手寫本身不代表不同題型。
- 主線涵蓋辨認、操作探索、比較、推理、找錯、逆推、應用與創作；依單元需要選用，不硬湊種類。
- 同解法的換數字題歸為「再練一次」的練熟變體，不當成新的主線關卡。保留必要的基本運算練習。
- 教學順序採操作理解 → 獨立作答 → 解釋或應用。探索可提供輔助線、比對等支援；獨立挑戰需區分提示使用，不能把完成當成精熟。
- 題幹與操作適合小五，圖解承載數學資訊；不以增加閱讀負擔或裝飾性遊戲製造表面差異。
- 開放題允許多種正確答案；實作前定義可驗證的數學條件，避免只接受預設圖形或固定文字。
- 參考外部資源的教學方法，創作自己的題目與圖片；不宣稱這些資源等同南一課程或已經孩子驗證。

面積單元優先候選任務：找對應的高、剪拼平行四邊形、比較同底同高的三角形、構造指定面積、辨認斜邊當高或漏除以二的錯誤、由面積逆推高度、設計不同形狀但相同面積的花園、判斷草皮是否足夠。這些是設計候選，並非已完成的功能清單。

開發前的題庫檢查：每題標示學習目標、思考方式、作答互動、難度／先備概念、常見誤解、提示與判分條件。比較相鄰題目的解題策略；僅換數字、故事或外觀者列為變體。先重整面積，再用同一標準檢查其他單元。完成後同步更新 CURRICULUM_REVIEW.md 的實作與驗證狀態。

參考來源（2026-10-20 查閱）：
- NRICH，Area and Perimeter: Age 7–11：https://nrich.maths.org/curriculum/area-and-perimeter-age-7-11
- The Math Learning Center，Geoboard：https://www.mathlearningcenter.org/apps/geoboard
- The Math Learning Center，Area of Polygons 教學活動：https://www.mathlearningcenter.org/sites/default/files/pdfs/SecB4SUP-D9_AreaPoly-201304.pdf

## Decisions

### 2026-06-25 - Keep a Project Decision Log

Context: The project is growing from a single HTML file into a maintainable spelling practice system with PDF-backed levels.

Decision: Use this Markdown file as the shared decision log.

Rationale: A short, durable log helps preserve why the app is structured a certain way and prevents repeated re-decisions as the project evolves.

### 2026-06-25 - Ask Before Major Decisions

Context: The user requested explicit questions before decisions are made.

Decision: Before changing architecture, data modeling, UX behavior, or maintainability strategy, pause and ask concise questions. Continue only after the user answers, unless the change is small, reversible, and clearly implied by the request.

Rationale: The app is becoming a learning tool with product choices that matter to the user, so alignment should happen before implementation.

### 2026-06-25 - Mobile-First Single Panel

Context: The expected users are likely using phones rather than desktop screens.

Decision: Keep the app to one primary panel at a time. The entry screen asks users to choose Testing or Practice before choosing level/settings. Avoid desktop sidebars and multi-panel layouts.

Rationale: A single-panel flow is easier to use on phones, keeps focus on the current task, and avoids dense desktop-style controls.

### 2026-06-25 - Traditional Chinese UI

Context: The app is intended for Traditional Chinese users.

Decision: Use Traditional Chinese for user-facing app UI text. The `Listen` action label can remain English, and English spelling words/source vocabulary data remain unchanged.

Rationale: The surrounding controls and instructions should match the users' reading language while preserving the English learning content.

### 2026-06-25 - Premature Exit

Context: Users may accidentally start a large test such as all levels and should not be forced to finish before leaving.

Decision: Provide visible exit actions in long-running app areas, especially during testing. Exiting a test early concludes the test, shows the result screen, and scores only the questions already answered. If no questions were answered, no score is saved.

Rationale: Users need control at every stage, and ending early should still feel like a complete session without forcing unattempted questions into the score.

### 2026-06-26 - School Catalog

Context: The app now needs to support multiple schools. Existing levels belong to 普林斯頓, and the new Grade 2 PDF belongs to 葳格.

Decision: Model spelling data as schools containing reusable level catalogs, with each level containing word entries. The app asks users to choose a school first, then reuses the same testing and practice flows against the active school catalog.

Rationale: Keeping school selection as data context lets most quiz, practice, scoring, search, and speech code stay shared. Future schools or levels can be added by extending data extraction and catalog registration instead of duplicating screens.

### 2026-06-26 - Refactor Safety Tests

Context: The school word data will likely be reorganized so different schools live in one consistent content structure.

Decision: Add lightweight Node tests before the refactor to lock down current catalog counts, school separation, generated 葳格 word order, legacy catalog compatibility, and local storage behavior.

Rationale: Tests make the upcoming content refactor safer by distinguishing intentional structure changes from accidental behavior changes.

### 2026-06-26 - Content and Domain Boundaries

Context: The app is moving toward a multi-school English practice platform, but it does not need a database or framework yet.

Decision: Organize static word data under `src/content`, reusable rules under `src/domain`, and local progress persistence under `src/storage`. Keep the current UI in `src/app.js` for now while extracting catalog, label, answer, and scoring behavior into domain modules.

Rationale: This keeps the working student experience intact while making future school additions and eventual repository/database migration less invasive.

### 2026-06-26 - School-Owned Content Folders

Context: The earlier content layout separated files by production method, such as generated PDF output versus legacy/manual imports.

Decision: Organize spelling bee word data by school under `src/content/schools/<school>/`. Keep source/provenance details as metadata inside levels instead of as top-level folders.

Rationale: The product is school-first, and the app does not need to care whether words originally came from PDFs, HTML, paste, or another import path. School-owned folders make it easier to find and evolve each school's content.

## North Star Product Decisions

### 2026-10-18 - Grade 5 Math Prototype Context

Context: The user identified 台中市西區忠孝國民小學, 115學年度 (2026/2027), 五年級數學, 南一書局, and explicitly requested a prototype.

Decision: Build the first UI prototype for this learner context, using original learning and practice content. Treat the school/publisher information as user-provided, not independently verified. Do not present demonstration topics as a verified 南一 textbook sequence.

Implementation: A separate, dependency-free `north-star-prototype` contains original sample lessons, guided hints, retries, and browser-local completion records. This reversible prototype does not finalize the production frontend framework or backend architecture. English remains part of the broader mission, outside this first math prototype.

### 2026-10-18 - Original Learning and Practice Content

Context: While discussing how to obtain material from 康軒, 南一, and 翰林, the user clarified that students do not need to read the publishers' actual content; they need material to learn and practice.

Decision: Provide original North Star lessons and practice. Acquiring or displaying actual publisher content is not a prerequisite for the learning experience.

Rationale: The product's purpose is to help children learn and practice, which can be served by original teaching material.

Open: Whether v0 still needs publisher-specific ordering and selection. This clarification does not by itself remove the earlier publisher setup decision or finalize a content generation and review workflow.

### 2026-10-18 - Start with the UI

Context: The user reaffirmed North Star's original mission and chose to begin with the UI while discussing database and hosting options.

Decision: Start North Star implementation with the UI. Backend, database, and hosting setup are deferred until needed. Docker is acceptable for a future local database setup; Kubernetes is not needed at this stage. The frontend framework and whether to create a separate app remain open.

Rationale: Working through the student experience first lets us evaluate the learning flow before adding infrastructure.

### 2026-06-26 - North Star Mission

Context: The Spelling Bee app is a prototype, but the intended product is much larger.

Decision: Name the larger vision "North Star": a paper-light AI education platform that helps children who cannot afford cram schools or private tutoring learn core school content.

Rationale: The mission should guide architecture and product design beyond the current spelling feature. The product should reduce paper as a barrier, not reject handwriting or physical learning where it helps children.

### 2026-06-26 - Spelling Bee Is One Tiny Feature

Context: The existing app proves a small learning activity, but the user envisions a full education system.

Decision: Treat Spelling Bee as one activity type inside North Star, not as the central product model.

Rationale: The platform should be designed around learners, subjects, skills, lessons, activities, submissions, feedback, and mastery. This lets Spelling Bee, math practice, reading, writing, voice tutoring, and future learning tools share the same foundation.

### 2026-06-26 - First Target Audience

Context: North Star needs a specific first learner instead of a vague "education for everyone" scope.

Decision: The initial target audience is elementary school children learning English and Math who have no or limited teacher resources and cannot rely on cram schools.

Rationale: English and Math are high-need subjects for this audience. A focused target learner makes the product, content, UX, AI tutor behavior, safety model, and technical priorities easier to design.

### 2026-06-26 - Tiny Lessons for English and Math

Context: The first product slice needs to prove the platform can support more than one subject without becoming too broad.

Decision: Build tiny lessons for both English and Math in the first North Star version.

Rationale: Tiny lessons keep the learning loop manageable for children and prove the system is a general learning platform, not a single-subject app. Each lesson should guide a child through learning, practice, help, submission, feedback, and review.

### 2026-06-26 - AI Tutor Should Be Interactive

Context: Children with limited adult support need more than static worksheets or answer checking.

Decision: Design the AI tutor as an interactive helper that can eventually support text, voice input, voice output, hints, explanations, pronunciation, and guided conversation.

Rationale: Voice and interaction matter for young learners, language learning, accessibility, and children who struggle with typing or reading. The first version may start with text and simple hints, but the system should be designed for multimodal tutoring.

### 2026-06-26 - Photo Capture for Handwritten Work

Context: Early school requires handwriting, but reliable stylus/tablet hardware may not be available to the target audience.

Decision: Support photo capture of handwritten work as a core response mode.

Rationale: Children can still write on any available paper, then digitize the work by photo. This preserves handwriting practice while letting North Star store learning evidence, provide AI feedback when confidence is sufficient, and route uncertain cases to adult review.

### 2026-06-26 - Paper-Light, Not Handwriting-Hostile

Context: "Eliminate paper education" could accidentally imply removing handwriting, which is still important for elementary learners.

Decision: Frame North Star as eliminating paper as a barrier and system of record, not eliminating handwriting.

Rationale: Handwriting supports fine motor skills, memory, spelling, math work, and early learning. North Star should capture and improve handwritten learning instead of forcing every child onto unreliable or expensive hardware.

### 2026-06-26 - Use Taiwan Curriculum as Alignment, Not Source Copy

Context: North Star may serve elementary students in Taiwan and should understand current education materials.

Decision: Align North Star lesson planning to Taiwan elementary learning stages and common English/Math skills, while creating original lesson content instead of copying copyrighted textbook material.

Rationale: Curriculum alignment keeps the product relevant to real school needs. Original content avoids legal risk and lets North Star teach concepts in a more adaptive, AI-native format.

### 2026-06-26 - Prefer Grades 3-4 for First Taiwan MVP

Context: The first North Star version needs a realistic elementary target band for both English and Math.

Decision: Treat Taiwan Grades 3-4 as the recommended starting point for v0 unless later user research points elsewhere.

Rationale: English is meaningful but still foundational at this stage, Math concepts are concrete enough for step-by-step help, and learners can usually interact with a simple guided app. This band also lets the product later simplify for Grades 1-2 or deepen for Grades 5-6.

Status: Superseded on 2026-06-27 by the decision to separate grades and configure textbook version before lesson navigation.

### 2026-06-27 - Traditional Chinese UI for North Star v0

Context: North Star v0 is aimed at elementary school children in Taiwan learning English and Math with limited teacher support.

Decision: Use Traditional Chinese as the default app UI language. English should appear intentionally as lesson content inside English learning activities, not as the general navigation language.

Rationale: Traditional Chinese lowers friction for self-study, especially for children who need help understanding instructions. English exposure should be purposeful and scaffolded inside lessons rather than making the whole app harder to use.

### 2026-06-27 - Separate Grades and Configure Textbook Version

Context: Taiwan students use specific grade-level textbook versions, commonly including 翰林, 康軒, and 南一. A broad grade band is less useful if North Star wants to help with the content a child is actually seeing at school.

Decision: North Star should separate grades and ask learners or adults to configure textbook version before entering lessons. Initial textbook options should include 翰林, 康軒, and 南一.

Rationale: Grade and textbook version should shape lesson ordering, topic sequence, vocabulary scope, and review recommendations. North Star should align to official curriculum and public version scope while creating original AI-native lessons rather than copying textbook content.

### 2026-06-27 - Maintain a Living North Star Design Document

Context: North Star is a large product that the user wants to develop collaboratively over time.

Decision: Keep `north-star-design.md` as the shared source of truth for product direction, system model, principles, and open questions. Keep detailed MVP scope in `north-star-v0-spec.md`, Taiwan curriculum alignment in `taiwan-elementary-curriculum-map.md`, and chronological decisions in this log.

Rationale: A living design document helps us stay aligned across many future conversations and prevents important product reasoning from being trapped only in chat history.

### 2026-10-18 - Grade 5 Visual Practice and Contextual AI Tutor

Confirmed requirements: Prioritize triangle angles because the learner reports studying this now. Expand original practice and provide diagrams. Add a contextual AI conversation area, voice support, and configurable teaching instructions. The user means existing ChatGPT subscription allowance, not a separately billed API key.

Local prototype status: Four topics with ten questions each and per-question diagrams; the AI tutor panel remains explicitly disconnected. Publication and browser verification are tracked separately from implementation.

Proposed voice approach: Editable speech transcription, text-based tutoring, and optional spoken replies. This is a recommendation, not a confirmed choice of voice provider or full duplex interaction. Keep typed input available.

Prompt draft: `north-star-prototype/tutor-instructions.txt`. It specifies Traditional Chinese, Grade 5 explanations, one step at a time, graduated hints, diagram-grounded reasoning, and natural speech. Future backend integration supplies these rules through `instructions` or developer messages, separately from student messages and current-question data.

Integration constraint verified 2026-10-18: Sign in with ChatGPT offers plan usage for eligible registered clients with separate consent. Site identity login alone does not provide inference access. Its current preview excludes audio input and transcription, and rejects explicit system-role message items; use instructions/developer messages. Client eligibility and hosted deployment compatibility remain open. No live model or voice connection is claimed.

Sources: https://developers.openai.com/siwc/quickstart and https://developers.openai.com/siwc/token-sharing-open-source/preview-limitations

Publication: The 40-question visual practice update and disconnected AI tutor panel were deployed successfully to the existing owner-private Site on 2026-10-18, source commit 3d02a4f4722e5b3014f930954d2da69634863b24. JavaScript syntax checks passed; browser verification covered incorrect-answer retry and the revealed triangle-angle diagram. Voice and live inference remain unimplemented.

Follow-up: Official plan-usage overview distinguishes open-source/locally hosted apps from paid or remotely hosted apps, which are directed to an interest form. Therefore the existing hosted Site cannot be assumed eligible. A local prototype using its own OAuth registration is a candidate for testing the user's subscription preference; consent and account eligibility still need verification. Switching the runtime to local use is an architectural choice awaiting user direction. Installing OpenAI Developers does not authorize API billing or create an inference connection.
Source: https://developers.openai.com/siwc/token-sharing-open-source

### 2026-10-18 - Local Subscription Trial First

The user chose to try the AI tutor personally on their computer first. Implement a separate `north-star-local` application so the hosted prototype stays unchanged. Use its own official ChatGPT OAuth registration, server-owned teaching instructions and lesson context, and no API-key billing fallback. The user completes consent personally. Keep access credentials in memory for this trial; reauthorize after expiry/restart. Voice uses editable browser transcription and optional read-aloud, with a typed-input fallback. Live inference and account eligibility remain unverified until authorization succeeds.

### 2026-10-18 - Floating Tutor Window

User requested the conversation in a bottom-right window. The local trial now uses a fixed launcher with an expandable, non-modal chat window, independent scrolling, a minimize control and Escape-key dismissal. It retains the active lesson/question context and keeps drafts when collapsed. The hosted static prototype is unchanged. Verified expand/collapse in the browser; live AI login remains unresolved.

### 2026-10-18 - Tutor Must Know the Built-In Lesson Illustration

User provided a successful live-chat screenshot showing the tutor incorrectly asking for an image while the lesson illustration was on screen. Root cause: concept-page chat context contained only the topic; practice questions had diagram metadata, but concept-page diagrams were omitted.

Applied an immediate, hot-loaded teaching-instructions correction in `north-star-local/tutor-instructions.txt`: the four existing concept illustrations now have explicit descriptions, including triangle-angle positions, colors, values, the sum bar, and the worked example. The prompt selects these only for concept pages (no question field) and uses question metadata for practice. It explicitly avoids requesting an upload for a built-in illustration already described. This is authored context, not screen vision; interactive factor arrangement is not asserted without current state. Long-term, lesson visual definitions and AI context should share a single data source instead of maintaining descriptions in the prompt.

Verification limit: The browser session available to the agent currently shows not signed in, so no live model reply was tested after this correction. The user's screenshot proves prior live inference succeeded; do not continue describing the earlier 400 as a confirmed current blocker.

### 2026-10-19 - Complete the Grade 5 First-Semester Math Prototype Before English

User decision: Grade 5 first-semester mathematics is the math prototype; English comes after this version is completed and reviewed. Expand the current local trial rather than changing deployment or billing.

Implementation: Ten reference units, 104 original questions. Retain choices where a free-response question would be ambiguous; add numeric/fraction answers, per-step fill-ins and correction of wrong worked examples. Use programmatic grading, with equivalent-fraction checking unless the question requires an exact reduced form. Do not interpret completion as mastery.

Architecture: Render lessons and tutor context from the same `public/lessons.js`. The shared `LearningCore` supplies checking and page context, including student answers, submitted state, per-step correctness and hints. Separate visible data from teacher-only answer data. The earlier prompt-only illustration patch is superseded.

Verification: Eleven grading/context regression tests passed. All 104 questions accept their authored answers and render without invalid numeric markup; triangle angle sums checked. Browser QA completed an eight-question unit across all four formats, intentionally retried one wrong step, confirmed 7/8 first-attempt result and persistence after reload. Live model response with the new payload remains unverified after the necessary local-server restart; the user must sign in again. A browser-QA record for the chart unit may remain in the preview browser.

## 2026-10-19 — Deepen current and next math units

User requested fuller practice for the niece’s current chapter and the following chapter. Interpreted using the existing sequence as Unit 3 多邊形 and Unit 4 擴分、約分和通分. Expanded each from 14 to 40 original questions (156 overall); retained old question IDs and browser records. Added conceptual, calculation, multi-step, misconception and everyday application items, six concept notes per unit, and actual polygon/diagonal diagrams. AI receives these from the same lesson source. English stays deferred. Complete publisher coverage is not claimed. The existing one-session practice flow and completion-only storage remain; reload resets unfinished work.

## 2026-10-19 — Default tutor guidance without giving away answers

User requested system-prompt enforcement of hint-first teaching. Removed the exception allowing full solutions on request or repeated struggle. Unsolved exercises now get one small step per turn; no final answer, correct choice, or complete worked solution on demand. Increase scaffolding or demonstrate with different numbers when stuck. Confirm answers the learner independently proposes; fully review solutions after app-confirmed success. Public concept examples remain explainable. Instructions are read on each chat request, so no server restart is needed. Live model behavior has not been retested; this is instruction-based behavior, not a deterministic output filter.

## 2026-10-19 — User-provided grade 5 semester 1 workbook contents

Source: two user-supplied photos of 數學習作5上・第九冊 contents, identified by the user as 南一. Use this as the prototype curriculum reference. Photos establish the workbook unit/subsection names and page starts, but do not independently show edition year or school adoption. Existing 156 original questions are not yet a verified complete match to every subsection.

1. 折線圖 (p.4): 1-1 認識複雜長條圖和折線圖；1-2 繪製折線圖。
2. 因數和倍數 (p.10): 2-1 整除；2-2 因數；2-3 公因數和最大公因數；2-4 倍數；2-5 公倍數和最小公倍數；2-6 倍數的應用——找2、5和10的倍數。
3. 多邊形 (p.24): 3-1 多邊形；3-2 正多邊形；3-3 三角形邊長的性質；3-4 多邊形內角和；3-5 多邊形內角和的應用。
4. 擴分、約分和通分 (p.32): 4-1 擴分；4-2 約分；4-3 通分和異分母分數的大小比較。
5. 線對稱圖形 (p.42): 5-1 認識線對稱圖形和對稱軸；5-2 認識對稱點、對稱邊和對稱角；5-3 畫出線對稱圖形；5-4 剪出線對稱圖形。
綜合練習1 (p.50)。
6. 異分母分數的加減 (p.54): 6-1 異分母分數的加法；6-2 異分母分數的減法；6-3 分數的應用。
7. 整數四則計算 (p.64): 7-1 連除的計算；7-2 多步驟計算；7-3 平均問題；7-4 分配律；7-5 簡化計算。
8. 平行四邊形、三角形和梯形的面積 (p.76): 8-1 平行四邊形的面積和高；8-2 三角形的面積和高；8-3 梯形的面積和高；8-4 面積公式的應用。
9. 時間的乘除 (p.90): 9-1 時間的乘法；9-2 時間的除法；9-3 時間的應用。
10. 正方體和長方體 (p.102): 10-1 正方體和長方體的構成要素；10-2 邊與邊的垂直和平行關係；10-3 面與面的垂直和平行關係；10-4 正方體和長方體的展開圖；10-5 正方體和長方體的表面積。
綜合練習2 (p.114)。

The niece’s reported triangle-angle work aligns with 3-4/3-5 by topic; exact current subsection is not confirmed. Next unit is Unit 4. Audit questions against these named subsections before claiming full coverage; in particular, current geometry focuses on triangle/quadrilateral sums and does not establish coverage of every polygon-angle application. Workbook exercises themselves have not been supplied or copied.

## 2026-10-19 — Unit 5 symmetry practice

User requested 線對稱 as well. Expanded Unit 5 from 8 to 40 original questions covering photo-confirmed 5-1 axes, 5-2 corresponding points/edges/angles, 5-3 reflection plotting, and 5-4 fold/cut reasoning. Numbered grid questions use column/row positions with explicit axis labels; no Cartesian coordinate knowledge assumed. Drawing uses position entry, not freehand input. Added six concept notes and original SVG diagrams. Removed answer-revealing reflected-distance labels from the original unknown-point questions. Total prototype count: 188. API key setup remains blocked pending explicit scope/lifetime confirmation; this curriculum request does not authorize key creation.

## 2026-10-19 — API credential provisioned

After explicit user confirmation of project scope and no expiry, the secure OpenAI Developers flow created Codex in Personal / North Star and saved OPENAI_API_KEY to north-star-local/.env.local. File permissions are owner-only and .env.local is ignored. No plaintext key was printed. Realtime voice integration is not yet implemented; credential creation alone does not enable voice or validate live model access.

## 2026-10-19 — Realtime voice integration

User authorized connecting the freshly provisioned API key. Implemented gpt-realtime-2.1-mini WebRTC with server-side SDP exchange and tutor instructions/current lesson context. Permanent key never leaves backend. Text retains subscription login; voice is separately billed and labeled. Removed old browser dictation control. Start/mute/end controls, VAD interruptions, assistant transcripts, context synchronization and media cleanup added. No separate input transcription fee; learner voice is represented by a marker. Calls end on navigation/collapse, 2-minute inactivity or 15-minute duration. This remains localhost-only, not production multi-user authorization or hard billing enforcement.

## 2026-10-19 — Mascot selected: D 小光

User selected D, the golden star sprite with sage scarf and forest-green boots. Generated a transparent standalone asset and saved it in north-star-local/public/mascot-xiaoguang.png. Used in the floating tutor launcher and chat header; assistant labels now identify 小光老師 and instructions identify 小光 as AI. No idle animation added; voice action remains 跟老師對話.

## 2026-10-19 — 小光 throughout the learning experience

User requested a cuter interface with mascot presence throughout. Added 小光 to the homepage hero and welcome message, each unit card, concept/practice guidance, hint and correct/retry feedback, results celebration, learning-progress welcome and footer. Reused the selected transparent asset; no distracting idle animation. Decorative copies have empty alt text; learning content remains separate and readable. Mobile hero keeps a smaller mascot instead of hiding it.

## 2026-10-19 — Brand logo selected

User selected the bottom-right horizontal logo in their supplied brand sheet: open book plus golden four-point star with 北極星 教育平台 / NORTH STAR EDUCATION wordmark. Generated a standalone transparent reproduction, saved as public/north-star-logo.png and applied to the homepage-linked site header with responsive sizing. 小光 remains the mascot, distinct from the brand logo. Source is a raster reproduction, not a vector master.

## 2026-10-19 — Logo lettering refinement

User prefers the supplied hand-drawn 北極星 lettering with a gold sparkle inside 極 and beside 星. Updated the active logo to a transparent rendition of that lettering, keeping the book/star symbol and education subtitle. Prior raster saved as north-star-logo-v1.png.

## 2026-10-19 — Gentle brand and mascot animation

User requested motion for 北極星. Added subtle logo glow, hero/launcher mascot floating, and hero star twinkle. Voice events switch avatar/launcher between listening tilt, thinking glow, and speaking bounce; stopping resets state. Uses CSS transforms without moving layout and disables animation for prefers-reduced-motion. The raster mascot does not have lip-synced mouth animation.

## 2026-10-19 — Select current practice question

User requested direct question selection. Added picker to concept and practice pages with question number and prompt preview, routes practice/<lesson>/<1-based question>. Switching questions preserves draft/attempt/hint/correct state in the current in-memory session, and tutor follows selected question; ongoing voice ends on navigation. Completion now requires every question to be solved rather than merely reaching the last question. Next goes to the next unfinished question, wrapping as needed. Picker explicitly describes website question numbers, not workbook numbering. Reload still resets unfinished session.


## 2026-10-19 — Handwriting and photo review

Added per-question canvas scratchpad with Pointer Events (mouse/touch/pen), pen-only mode, eraser, undo, clear, and native camera/gallery inputs. Recent 20 drafts remain in browser memory only; reload clears them. Photos are resized to 1600 px and re-encoded as JPEG locally, stripping metadata; max original size 15 MB. Attachment preview requires explicit send through existing authenticated text chat, alongside server-generated question context. One image per message, no image persistence in server history, and no automatic grading or voice image synchronization. Existing subscription model is preserved; actual image acceptance requires a signed-in end-to-end trial, with no paid API fallback. Prompt requires clarification of ambiguous handwriting rather than assuming errors. Localhost binding remains unchanged; physical iPad access still requires a separate network/hosting setup.

Validation: JS syntax checks and 11 learning-core tests passed. Browser verified drawing, empty-canvas guard, attachment preview, and local photo conversion. No authenticated live AI image request or physical iPad camera/Pencil test performed.

## 2026-10-19 — Xiaoguang character frame animation

User approved idle blink, listening, speaking, and correct-answer celebration. Generated an eight-frame transparent 4×2 sprite sheet preserving the existing mascot. Only tutor launcher/header use frame animation; lesson illustrations stay static. Existing Realtime events drive listening and speaking poses, with timed mouth frames (not phoneme/lip synchronization). Correct answers trigger a 2.2-second celebration, then return to current voice/idle state; speaking takes priority. Navigation clears celebration timer. Reduced-motion mode disables movement and displays a static state pose. Browser verified sprite rendering, correct-answer celebration, and return to idle blink; live microphone/audio session not exercised. Asset: north-star-local/public/xiaoguang-sprites.png.


## 2026-10-19 — Dedicated North Star repository

User requested cloning Teacher-Peng/North-Star and importing the current website. Repository root now contains the runnable application and this decision history. Secrets, local OAuth registration, and dependencies are excluded; .env.example contains no secret. Original north-star-local directory remains the running local copy; subsequent source work should use North-Star.

## 2026-10-20 — Grade-five interactive mission library

Reviewed all 188 existing prompts/answers/hints; made 12 targeted wording/hint revisions and reframed correction questions as helping Xiaoguang. Added 30 original missions (three per unit), 218 questions total. Eight reusable mechanisms: chart plotting, factor grouping, angle-piece assembly, fractional painting, symmetry points/reflection, ordered step cards with area visuals, time boxes, and cube-net selection. Separate mission gallery and persistent completion badges avoid requiring an entire 40-question chapter before feedback. No timer, lives, or leaderboard. Drag uses Pointer Events and has click/keyboard alternatives. Shared GameCore is used by grading and server tutor context, including current drawing/selection and comparison/grouping view. Full review and limitations recorded in CURRICULUM_REVIEW.md. Browser verified all eight mechanisms; actual iPad/child usability and live AI interpretation remain untested. Development server now runs from North-Star repository; ignored local runtime configuration was retained locally, not committed.


## 2026-10-20 — 面積多樣性第一版落地

使用者授權開始改題目。本次將面積 14 題主線重寫為辨認、比較、守恆、基本計算、找錯、逆推、規律、資料判斷、組合圖形、創作及生活應用；保留原 3 個拼圖任務。新增原創圖解與可接受多種正確底／高的三角旗設計題，共用數學條件判分並傳給 AI。採新題目 ID，不把舊題視為相同內容。32 個測試通過，瀏覽器驗證作答與圖解。仍待完成：其他單元重整、再練一次變體入口、直接操作幾何圖形、真實兒童／iPad 使用驗證。沒有宣稱全部候選任務已實作。詳見 CURRICULUM_REVIEW.md。


## 2026-10-20 — 題庫品質關卡第一版

使用者確認建立題目履歷、自動檢查與面積審查報告。以 quality/area.json 管理 17 題的課綱、目標、先備、思考方式、互動、難度、誤解、提示、判分案例與審查歷程。版本指紋綁定題目、教學／檢查履歷及共用畫面、判分與 AI context 程式；改動使舊證據失效。npm run verify 執行回歸與品質檢查；quality:release 要求目前版本的教學、視覺與真人確認，不能只靠程式通過或 AI 自評放行。

第一輪：面積 56 個正反案例通過；修正高度題圖說洩題、右側直角標記、剪角圖硬編碼尺寸與自主設計聯合判分回饋。三個排序遊戲同質、卡片含答案仍列為待改善事項。17 題均維持待審，沒有宣稱真人教育者或孩子驗證，也沒有執行獨立 AI 審查；提供 review packet 供下一位審查者使用。既有原型仍可開啟，此為本機開發關卡，尚未強制接入發布流程。其他單元僅檢查 ID 唯一性。

驗證方式與限制在 quality/README.md；程式產出的報告在 quality/AREA_REPORT.md。保留先前未提交的改題工作，本次未發布或更換帳號／API 設定。


## 2026-10-20 — 全五上題庫檢查與修補

使用者要求目前題目全數檢查，至少五年級可用。沿用已確定的五上範圍：檢查原218題，補16題原先薄弱的課綱代表題，總234題。全部十單元建立版本化履歷及獨立算式／幾何依據，quality 預設全題庫，可用 --unit 篩選；不把五上結果延伸宣稱五下也完整。

重要修正：讀圖與目標分母不提前洩題、指定分母／最簡形式必須符合形式、帶分數輸入優先辨識而不把空格刪成另一個數、正方體圖依shape繪製、紙剪題前提明確、同策略題標加強練習。補複雜長條圖、倍數應用、五六邊形角和、分配律／簡算、帶分數加減、立體邊關係與表面積。

54個測試與859個判分案例通過；瀏覽器逐頁檢查234題初始載入，並實測分數格式拒絕／通過與帶分數作答。自動檢查無阻擋問題，但嚴格試用關卡仍要求真人／教育審查證據，不偽造批准。現有遊戲同質性、兒童與iPad使用驗證仍明列限制。總報告 quality/GRADE5_REPORT.md，操作證據 quality/BROWSER_CHECK.json。

## 2026-10-20 — 無資料庫的受邀家庭登入

使用者同意先做 Google 登入加私人允許名單，並提供第一個受邀 Gmail。地址只寫入被 Git 忽略的 `.env.local`，沒有放進題庫、前端或版本庫。使用者尚未建立 Google web client ID，要求先完成程式並提供設定指引。

新增 `family-auth.mjs`、獨立家庭登入頁及私有伺服器設定。驗證 Google 簽章、issuer、audience、期限、nonce、azp；Gmail 必須通過 email_verified，或由管理者事先核准確切 Google sub。成功登入更換 session ID 與 CSRF token；八小時記憶體 session、HTTPS Secure/HttpOnly/SameSite cookie、逐請求檢查名單，登出刪除 session。沒有帳號密碼資料庫、自動寄邀請、管理後台或新增學童個別進度。

公開模式預設需家庭登入，首頁／教材資源／文字圖片 API／語音 API／ChatGPT 授權均在伺服器檢查後才開放。未設定 client ID 或名單時維持封鎖。保留原本純本機模式，禁止在公開 origin、公開 listener 或 production 使用免登入模式。家庭 Google 登入與文字 ChatGPT 訂閱授權分開；後者預設只在本機開啟，公開網域資格尚未驗證，沒有偷偷改走付費文字 API。

GoDaddy 帳號檢視已確認 Web Hosting 方案包含一個未使用的 Node.js app slot；本次未新增 GoDaddy app、未部署、未改 DNS。新增 PUBLIC_ORIGIN/PORT 設定為後續部署準備；完整指南在 FAMILY_ACCESS.md。

驗證：89 個測試通過，其中 35 個新增家庭登入測試，以本機簽署 JWT 與注入的測試身份驗證器檢查正常與拒絕流程；原 859 個題目判分案例通過。實際 HTTP 驗證匿名 session 即使持有 CSRF 仍無法呼叫語音／文字／ChatGPT 授權，直接 index 無法繞過，偽造 Host 拒絕；瀏覽器確認登入準備頁與既有本機數學頁正常。尚未執行真實 Google 帳號登入或 iPad popup 測試；不能宣稱已啟用。Google client ID、正式 hosting 設定與真實登入測試仍需完成。

限制：重啟會清空 session，適用單一 instance；使用上限不是持久化金額限制，已建立的跨分頁直連 WebRTC 不會因本機 session 被撤銷而由伺服器強制中止。正式公開前仍需處理用量控管與既有內容審查關卡。原型服務保留 5175；家庭登入準備頁另在 localhost:5176 預覽。

## 2026-10-20 — Google 登入建議更正，尚未啟用

使用者授權代為建立 Google sign-in client，並完成個人帳號驗證。已在個人帳號建立 North Star Education 專案（clear-tooling-512215-g2），準備 app name／support email／External testing audience／contact 欄位，尚未送出 OAuth branding 設定。

在必須同意 User Data Policy 的步驟實際閱讀官方條文後，發現「主要面向兒童的應用不應使用 Google Sign-In」限制。North Star 明確面向小五；不能推定家長先登入就符合例外。先前推薦 Google 作為必需入口未考慮此條件，已主動向使用者更正。未勾選同意、未建立 OAuth client、未新增付款或啟用公開服務。既有 Google 登入程式保留未啟用。

已提出改用每家庭長隨機存取碼、伺服器只存雜湊、仍不需資料庫的替代方案，等待使用者選擇；尚未宣稱替代方案已實作。來源：https://developers.google.com/terms/api-services-user-data-policy#child-directed-apps


## 2026-10-20 — 改用私人家庭存取碼，取代 Google 登入

使用者明確選擇私人家庭存取碼。已移除 Google 登入程式及本機 Google 名單設定；既有個人 Cloud 專案保留未使用，沒有建立 OAuth client 或部署到 GoDaddy。每家庭使用 192-bit 隨機存取碼，伺服器設定只保留 SHA-256 雜湊、家庭 ID 與名稱，不需要資料庫或孩子的 email。這是可重複使用的持有者憑證，不能當成一次性邀請或身份證明。

新增 family:invite 指令，私有交付檔與設定使用 owner-only 權限並排除 Git；第一組已產生於 .local/family-invites/main-family.txt，未在對話或 log 印出。--rotate 換碼及刪除設定後需重啟／部署，舊碼失效；所有 session 隨重啟清除。登入沿用 CSRF、同源、一次性短期 challenge、session rotation、八小時有效期、HTTPS cookie、API 與教材路由檢查；每 process 每分鐘最多 30 次登入嘗試。

36 個認證測試及全套 90 個測試通過，859 個題目判分案例通過。瀏覽器實測錯碼拒絕、正確碼進首頁、家庭名稱及登出成功；發現原 no-referrer 使原生表單 Origin 不符，改為 same-origin referrer policy，仍嚴格檢查 Origin 與 CSRF。沒有呼叫付費 AI 測試。

完整操作與限制在 FAMILY_ACCESS.md：目前只在本機驗證，尚未公開部署；正式環境 HTTPS／proxy／iPad 尚待驗證。文字 ChatGPT 訂閱授權仍只預設本機可用，語音使用原本伺服器 API key，沒有自動改用付費文字 API。進度仍在瀏覽器、未按家庭隔離或跨裝置同步；持久化 AI 額度限制與真人題目審查仍是發布前工作。

## 2026-10-20 — GoDaddy Node.js 預覽部署準備

使用者要求先設定 GoDaddy。帳號頁再次確認現有 Web Hosting 包含 Node.js Apps，0/1 slots used。先採 ZIP 匯入，包含目前尚未提交的原型修正，不需先授權 GitHub app。已補 package version 0.1.0、Node 24.x、main 與 build script；build 是語法檢查，前端無編譯步驟。90 個測試及 859 個題目判分案例通過。

部署 ZIP 僅含執行程式、package manifests、public 資產及 private 登入模板／教學提示，排除 .env、.local、node_modules、Git 與測試。此為家庭預覽準備，不代表題庫已通過真人發布審查。

GoDaddy 設定頁在第一次 Continue 明示會同意 Universal Terms 及 AI Terms；停在該步等使用者明確確認條款。尚未點選同意、建立 app、上傳程式、傳送金鑰、修改 DNS 或發布網站。後續完成狀態需另記錄。

## 2026-10-20 — GoDaddy Secrets 設定獲准

使用者自行繼續 GoDaddy 設定並連接 GitHub，瀏覽器進入 Secrets 頁。使用者明確同意把現有 OPENAI_API_KEY 與 FAMILY_ACCESS_CODES（只有雜湊）儲存到該 North Star GoDaddy app 的私有 Secrets。已透過設定表單輸入，沒有在輸出或版本庫揭露值。一般設定為 PUBLIC_ORIGIN=https://ailearning.com.tw、FAMILY_AUTH_MODE=family、CHATGPT_LOGIN_ENABLED=false；NODE_ENV=production 在匯入後未出現在 UI（需確認平台管理方式）。

GoDaddy 已進入 GitHub import 流程（app ID 5efv50aj72）。尚待確認匯入結果和實際程式版本；本機新的家庭登入與部署修正尚未推送，不能把舊 GitHub 版本直接當作可公開版本。尚未點選 Publish 或修改 DNS。

## 2026-10-20 — GoDaddy app 已建立，預覽尚未通過

GoDaddy North-Star app 5efv50aj72 已掛到既有 Economy 方案（1/1 slot），連接 Teacher-Peng/North-Star main。Secrets UI 確認 Preview 有五個 DEPLOYED 設定，Publish 為零，值保持遮蔽。既有部署 commit 63a4eab 為舊版本並顯示 Gateway error；已檢查 staged 檔不含本機 API key、原始家庭碼或私人雜湊，將已授權且測試通過的程式與題庫品質修改 commit/push 為 15650f1。

初次匯入採正式網域 PUBLIC_ORIGIN；因先做預覽，需改為 GoDaddy 顯示的 https://5efv50aj72.preview.c24.airoapp.ai。該變更在 Save Secrets 時要求重新登入且視窗空白，重新整理後重試仍相同，未宣稱更新成功。已請使用者在 Chrome 重新登入，沒有索取密碼或 OTP。尚未發布、未改 DNS、未執行付費語音測試。恢復後須更新預覽至最新 commit，確認 origin/runtime/登入與路由防護。


## 2026-10-20 — GoDaddy 私人預覽驗證完成

使用者完成重新登入後，PUBLIC_ORIGIN 成功存為 https://5efv50aj72.preview.c24.airoapp.ai，GoDaddy 顯示儲存成功。Update Preview 已抓取 15650f1，平台為 Build Healthy／Infra OK／Site Auth required。首頁需登入，平台因此無法用首頁作完整健康監測；沒有因此移除家庭登入保護。平台 runtime 標籤仍為 Node.js 22，雖 package 指定 24.x，不宣稱已升級 runtime。

HTTPS 瀏覽器實測：錯誤碼拒絕、正確家庭碼登入、首頁十單元與 234 題載入、登出、匿名語音路由要求登入、直接題庫資源導向登入，全部通過。未測付費語音或開啟麥克風。預覽需另外登入擁有者 GoDaddy 帳號，尚不能直接把預覽網址當成一般家人入口。尚未 Publish to Live、未改 DNS／綁正式域名，Published Secrets 尚未同步。題庫真人審查仍待完成。

## 2026-10-21 — 正式網址發布處理中

使用者明確指出正式入口應為 ailearning.com.tw，繼續完成正式發布與域名連接。瀏覽器顯示先前另一次 Publish 失敗：正式環境缺 PUBLIC_ORIGIN，與題目程式錯誤無關。已在 Publish Secrets 補五項既有已授權設定（正式 origin、family mode、家庭碼雜湊、既有 API key、停用未驗證的 ChatGPT 訂閱授權），GoDaddy 明確回報 secrets 已儲存並要求 Publish。未建立新 key 或資料庫。

域名設定必須先完成發布才能啟用。已開始 Publish，結果待確認。切換前 DNS 記錄：ailearning.com.tw A = 184.168.119.128；www CNAME = ailearning.com.tw。現行網頁標題 Spelling Bee；此次目標是以 North Star 取代根網址入口，保留舊主機檔案以便回復，沒有刪除舊站。

正式環境補好設定後可啟動，但發布仍被 health check 擋下。新增唯一公開 GET/HEAD /healthz，僅回傳 status ok、無 session／設定／題目資料，讓未連接正式網域前的內部 Host 能做健康檢查。其他路由 Host 與家庭登入檢查保留；GoDaddy General Root path 設為 /healthz，訪客仍走根網址。90 tests／859 fixtures 與 production-mode HTTP guard smoke 通過。原 fetch smoke 的 Host override 未按預期送出，改用 node:http 傳送真實 Host 後同一組斷言通過，未放寬安全條件。
