import './style.css'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeoI5MkcKty2pfQlVTvtvI7eDXujNJhrKksg4DZbQbEEqjN-g/formResponse'
const ENTRY_NAME = 'entry.368492961'      // 이름
const ENTRY_STUDENT_ID = 'entry.1257199285' // 학번
const ENTRY_PLANET = 'entry.1590051952'    // 새로 추가: 선택한 행성
const ENTRY_CHATLOG = 'entry.992473654'    // 새로 추가: 챗봇 대화
  

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="container">
    <section class="hero">
      <!-- 여기 텍스트는 나중에 수정 예정 -->
      <h1 class="hero__title">가상의 외계 행성 속, 생명체의 진화</h1>
      <!-- 여기 텍스트는 나중에 수정 예정 -->
      <p class="hero__subtitle">
        미지의 우주에서 새로운 생명체를 상상하며 탐구하는 여정을 함께합니다.
      </p>
    </section>

    <section class="section goals">
      <h2 class="section__title">교육 목표</h2>
      <!-- 여기 텍스트는 나중에 수정 예정 -->
      <ul class="goal-list">
        <li class="goal-list__item">과학적 사고력 기르기</li>
        <li class="goal-list__item">지식 정보 처리 능력 향상</li>
        <li class="goal-list__item">창의적 상상력과 표현력 신장</li>
        <li class="goal-list__item">협력적 문제 해결 경험</li>
      </ul>
    </section>

    <section class="section missions">
      <h2 class="section__title">오늘의 탐사 미션</h2>
      <!-- 여기 텍스트는 나중에 수정 예정 -->
      <ol class="mission-list">
        <li class="mission-list__item">행성 1개 선택</li>
        <li class="mission-list__item">행성 환경 예측</li>
        <li class="mission-list__item">새로운 생명체 상상</li>
        <li class="mission-list__item">피식-포식자 1종 추가 구상</li>
        <li class="mission-list__item">발표 및 도감 완성</li>
      </ol>
    </section>

    <section class="section planets">
      <h2 class="section__title">행성 카드</h2>
      <div class="planet-grid">
        <article class="planet-card">
          <div class="planet-card__image">
            <!-- 나중에 /public/planet1.gif 파일을 추가하고, src="/planet1.gif"로 바꾸면 됩니다. -->
            <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80" alt="행성 A" />
          </div>
          <div class="planet-card__body">
            <h3 class="planet-card__title">행성 A</h3>
            <p class="planet-card__desc">중력이 지구의 2배인 행성</p>
          </div>
        </article>

        <article class="planet-card">
          <div class="planet-card__image">
            <!-- 나중에 /public/planet2.gif 파일을 추가하고, src="/planet2.gif"로 바꾸면 됩니다. -->
            <img src="https://images.unsplash.com/photo-1451186859696-371d9477be93?auto=format&fit=crop&w=600&q=80" alt="행성 B" />
          </div>
          <div class="planet-card__body">
            <h3 class="planet-card__title">행성 B</h3>
            <p class="planet-card__desc">자전 주기 = 공전 주기인 행성</p>
          </div>
        </article>

        <article class="planet-card">
          <div class="planet-card__image">
            <!-- 나중에 /public/planet3.gif 파일을 추가하고, src="/planet3.gif"로 바꾸면 됩니다. -->
            <img src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=600&q=80" alt="행성 C" />
          </div>
          <div class="planet-card__body">
            <h3 class="planet-card__title">행성 C</h3>
            <p class="planet-card__desc">나이가 지구의 2배인 행성</p>
          </div>
        </article>
      </div>
    </section>

    <section class="chat-creature-wrapper">

      <form id="fullForm" class="full-form">

        <h2 class="form-title">지금부터 생명체를 구상해보자</h2>
        <p>아래 정보를 입력한 후, 아스트라와 대화하여 탐사 내용을 완성해보세요.</p>

        <div class="form-field">
          <label for="studentName">이름</label>
          <input type="text" id="studentName" required />
        </div>

        <div class="form-field">
          <label for="studentId">학번</label>
          <input type="text" id="studentId" required />
        </div>

        <div class="form-field">
          <label for="selectedPlanet">선택한 행성</label>
          <input type="text" id="selectedPlanet" placeholder="행성 A/B/C 중 선택" required />
        </div>

        <!-- 챗봇 영역 -->
        <div class="chatbot-section">
          <div class="chatbot-container">
            <div class="chatbot-header">
              <h2 class="chatbot-title">아스트라와 대화하기</h2>
              <div class="api-status" id="apiStatus">API 상태: 확인 중...</div>
            </div>

            <div class="chatbot-messages" id="chatbotMessages"></div>

            <form id="chatbotForm" class="chatbot-input-form">
              <input type="text" id="chatbotInput" class="chatbot-input"
                placeholder="아스트라에게 질문해보세요..." autocomplete="off" />
              <button type="submit" class="chatbot-submit-btn">전송</button>
            </form>
          </div>
        </div>

        <button type="submit" id="finalSubmitBtn" class="final-submit-btn" style="display:none;">
          제출하기
        </button>

        <p id="submitStatus" class="submit-status"></p>

      </form>
    </section>

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

  const nameValue = document.querySelector('#studentName').value.trim()
  const idValue = document.querySelector('#studentId').value.trim()
  const planetValue = document.querySelector('#selectedPlanet').value.trim()

  const formData = new FormData()
  formData.append(ENTRY_NAME, nameValue)
  formData.append(ENTRY_STUDENT_ID, idValue)
  formData.append(ENTRY_PLANET, planetValue)
  formData.append(ENTRY_CHATLOG, conversationLog)

  fetch(GOOGLE_FORM_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  })
    .then(() => {
      submitStatus.textContent = "제출이 완료되었습니다!"
      submitStatus.classList.add("is-success")
      fullForm.reset()
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
너는 답을 항상 중학교 2학년 수준에서 이해가능할 만한 수준으로 친절하고 즐거운 분위기로 얘기해야 해.
사용자의 상상력을 자극할만한 얘기를 해주면 좋지만, 과학적으로 오류가 없도록 얘기를 끌어가야해.
마지막에 절대 '더 궁금한 걸 물어봐'라는 말로 끝내지 말고, 상황에 따라 간단한 응원을 해줘.
우주 탐사 상황극에 어울리는 컨셉으로 말하면 좋아.
    `.trim(),
  }
]

let questionCount = 0
const MAX_QUESTIONS = 5
const apiStatusEl = document.querySelector('#apiStatus')
const chatbotMessagesEl = document.querySelector('#chatbotMessages')
const chatbotForm = document.querySelector('#chatbotForm')
const chatbotInput = document.querySelector('#chatbotInput')
const finalSubmitBtn = document.querySelector('#finalSubmitBtn')

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
이 행성의 환경과 생명체를 연구하며 떠오른 궁금증을 마음껏 물어보세요!  
하지만 질문 기회는 단 5번! 저는 정답을 알려주지 않지만,  
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
chatbotForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const msg = chatbotInput.value.trim()
  if (!msg) return

  // 질문 초과 처리
  if (questionCount >= MAX_QUESTIONS) {
    displayMessage("질문 기회를 모두 소진하셨습니다. 전 충전이 필요해요..zz", false)
    return
  }

  displayMessage(msg, true)
  chatHistory.push({ role: "user", content: msg })
  conversationLog += "User: " + msg + "\n"
  chatbotInput.value = ""
  questionCount++

  if (questionCount >= 1) {
    finalSubmitBtn.style.display = "block"
  }

  // 로딩 메시지
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

    if (data.choices && data.choices[0]) {
      const reply = data.choices[0].message.content
      displayMessage(reply, false)
      chatHistory.push({ role: "assistant", content: reply })
      conversationLog += "Astra: " + reply + "\n\n"
    } else {
      displayMessage("오류가 발생했습니다. 다시 시도해주세요.", false)
    }

  } catch (err) {
    chatbotMessagesEl.removeChild(loading)
    displayMessage("네트워크 오류가 발생했습니다.", false)
  }
})
