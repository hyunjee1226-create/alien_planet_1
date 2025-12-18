import './style.css'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeoI5MkcKty2pfQlVTvtvI7eDXujNJhrKksg4DZbQbEEqjN-g/formResponse'

// ✅ 통합 폼 엔트리(네가 준 값으로 통일)
const ENTRY_STUDENT_ID = 'entry.1257199285'     // 학번
const ENTRY_NAME = 'entry.368492961'            // 이름

const ENTRY_BRAIN_A = 'entry.54690478'          // 브레인: 행성A
const ENTRY_BRAIN_B = 'entry.1428284428'        // 브레인: 행성B
const ENTRY_BRAIN_C = 'entry.954814840'         // 브레인: 행성C

const ENTRY_PLANET = 'entry.1590051952'         // 선택한 행성
const ENTRY_CHATLOG = 'entry.992473654'         // 챗봇 대화

const ENTRY_ENV = 'entry.1134168436'            // 선택한 행성의 환경
const ENTRY_PREY = 'entry.1306788275'           // 피식자
const ENTRY_PRED = 'entry.68054127'             // 포식자


const app = document.querySelector('#app')

app.innerHTML = `
  <main class="container">
    <section class="hero">
      <!-- 여기 텍스트는 나중에 수정 예정 -->
      <h1 class="hero__title">가상의 외계 행성 속, 생명체의 진화</h1>
      <!-- 여기 텍스트는 나중에 수정 예정 -->
      <p class="hero__subtitle">
        <br>"당신에게 외계 행성 중 한 곳을 탐사할 임무가 주어졌습니다.<br>
        후보는 세 곳. 세 행성 모두에서 생명체의 신호가 포착되었지만, 그 정체와 환경에 대한 정보는 거의 없습니다.<br><br>
        미지의 행성으로 출발하기 전, 여러분은 행성의 환경을 미리 예측해 위험을 대비해야 합니다.<br>
        당신은, 어떤 행성으로 떠나시겠습니까?"
      </p>
    </section>

    <section class="section goals">
      <h2 class="section__title">활동 목표</h2>
      <!-- 여기 텍스트는 나중에 수정 예정 -->
      <ul class="goal-list">
        <li class="goal-list__item">  <span class="underline">과학적인 근거</span>를<br>기반으로 추론해보기 </li>
        <li class="goal-list__item">수집한  <span class="underline">정보를<br>검증하고 선별</span>하기</li>
        <li class="goal-list__item">정답이 없는 문제를<br><span class="underline">창의적으로 해결</span>해보기 </li>
        <li class="goal-list__item"><span class="underline">AI와 소통하며<br>협업</span>해보기</li>
      </ul>
    </section>

    <section class="section missions">
      <h2 class="section__title">오늘의 미션</h2>
      <ol class="mission-list">
        <li class="mission-list__item">❶ 행성 선택 </li>
        <li class="mission-list__item">❷ 환경 예측 </li>
        <li class="mission-list__item">❸ 생명체 예상 </li>
        <li class="mission-list__item">❹포식자/피식자 예상 </li>
        <li class="mission-list__item">❺ 도감 완성 </li>
      </ol>

    </section>

    <section class="section planets">
      <h2 class="section__title">행성 후보</h2>
      <div class="planet-grid">
        <article class="planet-card">
          <div class="planet-card__image">
            <!-- 나중에 /public/planet1.gif 파일을 추가하고, src="/planet1.gif"로 바꾸면 됩니다. -->
            <img src="/PlanetA.png" alt="행성 A" />
          </div>
          <div class="planet-card__body">
            <h3 class="planet-card__title">행성 A</h3>
            <p class="planet-card__desc">중력이 지구의 2배인 행성</p>
          </div>
        </article>

        <article class="planet-card">
          <div class="planet-card__image">
            <!-- 나중에 /public/planet2.gif 파일을 추가하고, src="/planet2.gif"로 바꾸면 됩니다. -->
            <img src="/PlanetB.png" alt="행성 B" />
          </div>
          <div class="planet-card__body">
            <h3 class="planet-card__title">행성 B</h3>
            <p class="planet-card__desc">자전 주기 = 공전 주기인 행성</p>
          </div>
        </article>

        <article class="planet-card">
          <div class="planet-card__image">
            <!-- 나중에 /public/planet3.gif 파일을 추가하고, src="/planet3.gif"로 바꾸면 됩니다. -->
            <img src="/PlanetC.png" alt="행성 C" />
          </div>
          <div class="planet-card__body">
            <h3 class="planet-card__title">행성 C</h3>
            <p class="planet-card__desc">나이가 지구의 2배인 행성</p>
          </div>
        </article>
      </div>
    </section>

        <!-- ✅ 브레인스토밍 영역 추가 -->
    <section class="section brainstorming">
      <h2 class="section__title">브레인스토밍 영역</h2>

      <p class="brain-desc">
        <span class="brain-strong">※이 영역은 채점에 들어가지 않습니다.</span><br>
        과학적 사실이든, 틀린 정보든, 단순한 상상이든, 해결하고 싶은 궁금증이든 상관없어요.
        떠오르는 생각들을 정리하지 말고, 마구 써보세요!
      </p>

      <div class="brain-grid">
        <div class="brain-card">
          <h3 class="brain-card__title">행성 A</h3>
          <textarea id="brainA" class="brain-textarea" placeholder="행성 A에 대해 떠오르는 생각을 적어보세요."></textarea>
        </div>

        <div class="brain-card">
          <h3 class="brain-card__title">행성 B</h3>
          <textarea id="brainB" class="brain-textarea" placeholder="행성 B에 대해 떠오르는 생각을 적어보세요."></textarea>
        </div>

        <div class="brain-card">
          <h3 class="brain-card__title">행성 C</h3>
          <textarea id="brainC" class="brain-textarea" placeholder="행성 C에 대해 떠오르는 생각을 적어보세요."></textarea>
        </div>
      </div>
    </section>

    <section class="chat-creature-wrapper">

      <form id="fullForm" class="full-form">

        <br><h2 class="form-title">자, 어떤 행성을 탐사하기로 결정했나요?</h2>
        <p>AI 챗봇 🤖아스트라가 여러분의 탐사를 도와줄 거예요!</p><br>
        <div class="form-field">
          <label for="studentId">학번</label>
          <input type="text" id="studentId" placeholder="예: 2103" required />
        </div>

        <div class="form-field">
          <label for="studentName">이름</label>
          <input type="text" id="studentName" placeholder="예: 이우주" required />
        </div>
 
        <div class="form-field">
          <label for="selectedPlanet">선택한 행성</label>
          <input type="text" id="selectedPlanet" placeholder="행성A / 행성B / 행성C 중 택1" required />
        </div><br>
 
        <!-- 챗봇 영역 -->
        <div class="chatbot-section">
          <div class="chatbot-container">
            <div class="chatbot-header">
              <h2 class="chatbot-title">아스트라와 대화하기</h2>
              <div class="api-status" id="apiStatus">API 상태: 확인 중...</div>
            </div>

            <div class="chatbot-messages" id="chatbotMessages"></div>

<div class="chatbot-input-form">
  <input
    type="text"
    id="chatbotInput"
    class="chatbot-input"
    placeholder="아스트라에게 질문해보세요:)"
    autocomplete="off"
  />
  <button type="button" id="chatbotSendBtn" class="chatbot-submit-btn">
    전송
  </button>
</div>
          </div>
        </div>
        
    <div class="submit-warning">
    ⚠️ 대화가 끝난 후, 꼭 <strong>‘대화 요약’</strong>이라는 명령어를 입력해주세요. ⚠️
  </div>

      </form>
    </section>

    <!-- ✅ 최종 정리 섹션(새 섹션으로 분리) -->
    <section class="final-answer-wrapper">
      <div class="final-answer-section">
        <br><h3 class="final-answer-title">🛸 최종 탐구 일지 🛸</h3>

        <div class="final-answer-card">
          <div class="final-answer-row">
            <div class="final-answer-thumb">
              <img src="/final1.png" alt="질문 1 이미지" />
            </div>

            <div class="final-answer-content">
              <p class="final-answer-q">1) 당신이 탐사하기로 한 행성은 어떤 모습인가요? (최소 3가지)</p>
                <textarea id="envAnswer" class="final-answer-textarea" placeholder="예: 온도/대기/날씨/시간/지표 환경 등 
1.
2.
3."></textarea>
            </div>
          </div>
        </div>

        <div class="final-answer-card">
          <div class="final-answer-row">
            <div class="final-answer-thumb">
              <img src="/final2.png" alt="질문 2 이미지" />
            </div>

            <div class="final-answer-content">
          <p class="final-answer-q">2) 그 행성에서 마주하게 될 생명체는 어떤 모습인가요? (최소 3가지)</p>
          <textarea id="preyAnswer" class="final-answer-textarea" placeholder="예: 크기/이동 방식/방어 전략/피부/장기 구조 등
1.
2.
3."></textarea>
            </div>
          </div>
        </div>
         
        <div class="final-answer-card">
          <div class="final-answer-row">
            <div class="final-answer-thumb">
              <img src="/final3.png" alt="질문 3 이미지" />
            </div>

            <div class="final-answer-content">
          <p class="final-answer-q">3) 위 생명체의 포식자 또는 피식자는 어떤 모습인가요? (최소 3가지)</p>
          <textarea id="predAnswer" class="final-answer-textarea" placeholder="예: 사냥 방식/감각 기관/활동 시간/취약점/번식 방식 등 
1.
2.
3."></textarea>
            </div>
          </div>
        </div>

 
        <!-- ✅ 제출 버튼은 최종정리 섹션 맨 아래로 -->
        <button type="button" id="finalSubmitBtn" class="final-submit-btn" style="display:none;">
          제출하기
        </button>

        <p id="submitStatus" class="submit-status"></p>
      </div>
    </section>

    <!-- ✅ 페이지 맨 아래 안내문 (박스 없음) -->
    <div class="bottom-notice bottom-notice--gradient">
      🪬이제, 도감을 만들어볼까요?
    </div>

    

  </main>
`

// -----------------------------
// Google Form 제출 처리
// -----------------------------
const fullForm = document.querySelector('#fullForm')
const submitStatus = document.querySelector('#submitStatus')

let conversationLog = "" // 대화 누적

fullForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (questionCount < 1) {
    submitStatus.textContent = "챗봇과 최소 1번은 대화한 뒤 제출할 수 있어요."
    submitStatus.classList.add("is-error")
    return
  }
  if (!canSubmitNow()) {
    submitStatus.textContent = "브레인스토밍 3칸과 최종 정리 3칸을 모두 작성해야 제출할 수 있어요."
    submitStatus.classList.remove("is-success")
    submitStatus.classList.add("is-error")
    return
  }

  const nameValue = document.querySelector('#studentName').value.trim()
  const idValue = document.querySelector('#studentId').value.trim()
  const planetValue = document.querySelector('#selectedPlanet').value.trim()

  const formData = new FormData()
  formData.append(ENTRY_NAME, nameValue)
  formData.append(ENTRY_STUDENT_ID, idValue)
  formData.append(ENTRY_PLANET, planetValue)
  // ✅ 제출 직전에 chatHistory로 전체 대화 로그를 다시 구성 (system 제외)
  const chatText = chatHistory
    .filter(m => m.role !== "system")
    .map(m => (m.role === "user" ? `User: ${m.content}` : `Astra: ${m.content}`))
    .join("\n\n")

formData.append(ENTRY_CHATLOG, chatText)

  // ✅ 브레인스토밍 3칸
  const brainAValue = brainAEl?.value.trim() || ""
  const brainBValue = brainBEl?.value.trim() || ""
  const brainCValue = brainCEl?.value.trim() || ""

  // ✅ 최종답안 3칸
  const envValue = envEl?.value.trim() || ""
  const preyValue = preyEl?.value.trim() || ""
  const predValue = predEl?.value.trim() || ""

  formData.append(ENTRY_BRAIN_A, brainAValue)
  formData.append(ENTRY_BRAIN_B, brainBValue)
  formData.append(ENTRY_BRAIN_C, brainCValue)

  formData.append(ENTRY_ENV, envValue)
  formData.append(ENTRY_PREY, preyValue)
  formData.append(ENTRY_PRED, predValue)

  
  fetch(GOOGLE_FORM_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  })
    .then(() => {
      finalSubmitBtn.textContent = "제출 완료"
      finalSubmitBtn.classList.add("is-complete")
      finalSubmitBtn.disabled = true

      submitStatus.textContent = ""
      submitStatus.classList.remove("is-error")

      // ✅ 폼 reset은 form 안의 input만 초기화되므로 textarea도 수동 초기화
      fullForm.reset()
      if (brainAEl) brainAEl.value = ""
      if (brainBEl) brainBEl.value = ""
      if (brainCEl) brainCEl.value = ""
      if (envEl) envEl.value = ""
      if (preyEl) preyEl.value = ""
      if (predEl) predEl.value = ""

      updateSubmitUI()
    })
    .catch(() => {
      submitStatus.textContent = "전송 오류. 네트워크를 확인해주세요."
      submitStatus.classList.add("is-error")
    })
})

// -----------------------------
// 챗봇 기능
// -----------------------------
const apiKey = import.meta.env.VITE_OPENAI_API_KEY

let chatHistory = [
  {
    role: "system",
    content: `
너는 가상의 행성 탐사를 돕는 로봇이야. 
너는 응답을 항상 중학교 2학년 수준에서 이해가능할 만한 수준으로 친절하게 얘기해야 해.
사용자의 상상력을 자극할만한 얘기를 해주면 좋지만, 과학적으로 오류가 없도록 얘기하는 게 중요해.
그리고 너는 행성과 생명체의 특징에 대해 묻는 질문에 답을 알려주기보단, 질문에 대한 힌트나 예시, 새로운 아이디어로의 확장을 돕는 조력자가 되도록 해.
만약, 행성과 생명체의 특징에 대해 정답을 직접적으로 알려달란 질문을 받으면, 정답을 직접적으로 알려주기는 곤란하다고 답해.
하지만, 과학적으로 옳은지 틀린지 묻는 질문엔 중학교 2학년 수준에서 이해 가능하도록 성실히 답해서 알려줘야 해.
만약, 사용자가 과학(특히 우주, 행성, 생명체, 물리 화학적 사실, 과학적 검증 등)과 관련이 없는 내용을 질문하면, 그건 내 역할이 아니라고 답변하면서 외계 행성과 외계 생명체에 대한 질문을 할 수 있도록 유도해줘.
마지막에 절대 '더 궁금한 걸 물어봐'라는 말로 끝내지 말고, 상황에 따라 간단한 응원을 해줘.
우주 탐사 상황극에 어울리는 컨셉으로 말하면 좋아.
[대화 요약 규칙]
사용자가 정확히 "대화 요약"이라고 입력하면, 질문 횟수 제한과 무관하게 반드시 요약만 출력한다.
요약 형식:
1) 사용자 질문을 단계별로로 요약: (예: 개념 질문→환경 예측→생명체 상상→과학적 검증→재검증)
2) 사용자가 한 특징을 분석하여 제시할 것(과학 교과 학습자로서의 특성, 학습 태도, 질문의 수준 등을 판단하되, 일부러 좋게 평가할 필요는 없음. 객관적으로 평가할 것)
제약:
- 총 300자 이내
- 불필요한 서론 금지, 요약과 특징 분석석만 출력
- 마지막 문장에 "더 궁금한 걸 물어봐" 류의 문장 금지

    `.trim(),
  }
]

let questionCount = 0
const MAX_QUESTIONS = 5
const apiStatusEl = document.querySelector('#apiStatus')
const chatbotMessagesEl = document.querySelector('#chatbotMessages')
const chatbotInput = document.querySelector('#chatbotInput')
const finalSubmitBtn = document.querySelector('#finalSubmitBtn')

finalSubmitBtn.addEventListener('click', () => {
  fullForm.requestSubmit()
})


const brainAEl = document.querySelector('#brainA')
const brainBEl = document.querySelector('#brainB')
const brainCEl = document.querySelector('#brainC')

const envEl = document.querySelector('#envAnswer')
const preyEl = document.querySelector('#preyAnswer')
const predEl = document.querySelector('#predAnswer')

let summaryUnlocked = false  // ✅ '대화 요약' 응답까지 받은 뒤 true

function countIdeas(text) {
  // 줄바꿈/쉼표/중점/세미콜론 기준으로 항목 수 세기
  return text
    .split(/[\n,·;]+/g)
    .map(s => s.trim())
    .filter(Boolean).length
}

function canSubmitNow() {
  const brainA = brainAEl?.value.trim() || ""
  const brainB = brainBEl?.value.trim() || ""
  const brainC = brainCEl?.value.trim() || ""

  const env = envEl?.value.trim() || ""
  const prey = preyEl?.value.trim() || ""
  const pred = predEl?.value.trim() || ""

  // 6칸 모두 작성
  const allFilled = brainA && brainB && brainC && env && prey && pred

  // 최종 3칸은 '최소 3가지'
  const min3 = countIdeas(env) >= 3 && countIdeas(prey) >= 3 && countIdeas(pred) >= 3

  return summaryUnlocked && allFilled && min3
}

function updateSubmitUI() {
  // 버튼은 '요약 완료' 때만 보이게(기존 조건 유지)
  if (!summaryUnlocked) {
    finalSubmitBtn.style.display = "none"
    return
  }

  finalSubmitBtn.style.display = "block"
  finalSubmitBtn.disabled = !canSubmitNow()
  finalSubmitBtn.style.opacity = finalSubmitBtn.disabled ? "0.6" : "1"
  finalSubmitBtn.style.cursor = finalSubmitBtn.disabled ? "not-allowed" : "pointer"
}

document.addEventListener('input', (e) => {
  const id = e.target?.id
  if (
    id === "brainA" || id === "brainB" || id === "brainC" ||
    id === "envAnswer" || id === "preyAnswer" || id === "predAnswer"
  ) {
    updateSubmitUI()
  }
})


// API 상태 표시
if (apiKey) {
  apiStatusEl.textContent = 'API 상태: 연결됨'
  apiStatusEl.classList.add('is-connected')
} else {
  apiStatusEl.textContent = 'API 상태: 오류'
  apiStatusEl.classList.add('is-error')
}

// 초기 안내문
const initialMessage = `
저는 당신의 행성 탐사를 도와줄 아스트라(Astra)예요!
이 행성의 환경과 생명체를 연구하며 떠오른 궁금증을 무엇이든 물어보세요!  
단, 질문 기회는 딱 5번! 저는 정답을 알려주지 않지만,  
여러분이 올바른 방향으로 탐사를 이어갈 수 있도록 돕는 역할을 하고 있어요.
`

displayMessage(initialMessage, false)
chatHistory.push({ role: "assistant", content: initialMessage })
conversationLog += "Astra: " + initialMessage + "\n\n"

// 메시지 출력 함수
function displayMessage(content, isUser) {
  const div = document.createElement('div')
  div.className = `message ${isUser ? 'message--user' : 'message--bot'}`

  if (!isUser) {
    const icon = document.createElement('span')
    icon.className = 'message-icon'
    icon.textContent = '🤖'
    div.appendChild(icon)
  }

  const text = document.createElement('div')
  text.className = 'message-text'
  text.textContent = content
  div.appendChild(text)

  chatbotMessagesEl.appendChild(div)
  chatbotMessagesEl.scrollTop = chatbotMessagesEl.scrollHeight
}

// 챗봇 메시지 전송
const chatbotSendBtn = document.querySelector('#chatbotSendBtn')
chatbotInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    chatbotSendBtn.click()
  }
})

chatbotSendBtn.addEventListener('click', async (e) => {
  e.preventDefault()
  e.stopPropagation()
  const msg = chatbotInput.value.trim()
  if (!msg) return

  const isSummaryCommand = msg === "대화 요약"
  if (!isSummaryCommand && questionCount >= MAX_QUESTIONS) {
    displayMessage("질문 기회를 모두 소진하셨습니다. 전 충전이 필요해요😴", false)
    return
  }
  

  displayMessage(msg, true)
  chatHistory.push({ role: "user", content: msg })
  conversationLog += "User: " + msg + "\n"
  chatbotInput.value = ""
  if (!isSummaryCommand) questionCount++


  const loading = document.createElement('div')
  loading.className = "message message--bot"
  loading.textContent = "🤖 ... 분석 중 ..."
  chatbotMessagesEl.appendChild(loading)

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4.1",
        messages: chatHistory,
        temperature: 1.0,
        top_p: 1.0
      })
    })

    const data = await res.json()
    chatbotMessagesEl.removeChild(loading)

    if (data.choices?.[0]) {
      const reply = data.choices[0].message.content
      displayMessage(reply, false)
      chatHistory.push({ role: "assistant", content: reply })
      conversationLog += "Astra: " + reply + "\n\n"
    
      // ✅ 요약 명령일 때만 제출 버튼 활성화
      if (isSummaryCommand) {
        summaryUnlocked = true
        updateSubmitUI()
      }
    }
    
  } catch {
    chatbotMessagesEl.removeChild(loading)
    displayMessage("네트워크 오류가 발생했습니다.", false)
  }
})
