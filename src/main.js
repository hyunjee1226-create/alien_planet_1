import './style.css'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeoI5MkcKty2pfQlVTvtvI7eDXujNJhrKksg4DZbQbEEqjN-g/formResponse'
const ENTRY_NAME = 'entry.1257199285'
const ENTRY_STUDENT_ID = 'entry.368492961'

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

    <section class="chatbot-section">
      <div class="chatbot-container">
        <div class="chatbot-header">
          <h2 class="chatbot-title">아스트라와 대화하기</h2>
          <div class="api-status" id="apiStatus">API 상태: 확인 중...</div>
        </div>
        <div class="chatbot-messages" id="chatbotMessages"></div>
        <form class="chatbot-input-form" id="chatbotForm">
          <input
            type="text"
            id="chatbotInput"
            class="chatbot-input"
            placeholder="아스트라에게 질문해보세요..."
            autocomplete="off"
          />
          <button type="submit" class="chatbot-submit-btn">전송</button>
        </form>
      </div>
      <button type="button" class="final-submit-btn" id="finalSubmitBtn" style="display: none;">
        제출하기
      </button>
    </section>

    <section class="creature-section">
      <div class="creature-section__inner">
        <h2 class="creature-section__title">지금부터 생명체를 구상해보자</h2>
        <!-- 여기 텍스트는 나중에 수정 예정 -->
        <p class="creature-section__subtitle">
          탐사할 행성을 골랐다면, 이제 여러분만의 생명체와 탐사 정보를 입력해 보세요.
        </p>

        <form id="studentForm" class="student-form">
          <div class="form-field">
            <label for="studentName">이름</label>
            <input type="text" id="studentName" name="studentName" required />
          </div>
          <div class="form-field">
            <label for="studentId">학번</label>
            <input type="text" id="studentId" name="studentId" required />
          </div>
          <button type="submit" class="student-submit-btn">정보 전송하기</button>
          <p class="submit-status" id="submitStatus"></p>
        </form>
      </div>
    </section>
  </main>
`

const form = document.querySelector('#studentForm')
const statusEl = document.querySelector('#submitStatus')

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nameValue = form.studentName.value.trim()
    const studentIdValue = form.studentId.value.trim()

    if (!nameValue || !studentIdValue) {
      statusEl.textContent = '이름과 학번을 모두 입력해주세요.'
      statusEl.classList.add('is-error')
      return
    }

    const formData = new FormData()
    formData.append(ENTRY_NAME, nameValue)
    formData.append(ENTRY_STUDENT_ID, studentIdValue)

    fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        statusEl.textContent =
          '전송이 완료되었습니다. (네트워크 상태에 따라 실제 저장 여부는 달라질 수 있습니다.)'
        statusEl.classList.remove('is-error')
        statusEl.classList.add('is-success')
        form.reset()
      })
      .catch((error) => {
        console.error('Google Form 전송 중 오류:', error)
        statusEl.textContent = '전송이 시도되었습니다. 네트워크 상태를 확인하세요.'
        statusEl.classList.add('is-error')
      })
  })
}

// 챗봇 관련 코드
const apiKey = import.meta.env.VITE_OPENAI_API_KEY
const chatHistory = []
let questionCount = 0
const MAX_QUESTIONS = 5

const apiStatusEl = document.querySelector('#apiStatus')
const chatbotMessagesEl = document.querySelector('#chatbotMessages')
const chatbotForm = document.querySelector('#chatbotForm')
const chatbotInput = document.querySelector('#chatbotInput')
const finalSubmitBtn = document.querySelector('#finalSubmitBtn')

// API 상태 확인
if (apiKey) {
  apiStatusEl.textContent = 'API 상태: 연결됨'
  apiStatusEl.classList.add('is-connected')
} else {
  apiStatusEl.textContent = 'API 상태: 오류'
  apiStatusEl.classList.add('is-error')
}

// 초기 안내 메시지
const initialMessage = `저는 당신의 행성 탐사를 도와줄 아스트라(Astra)예요! 여러분이 도착한 이 행성의 환경과 생명체를 연구하며 생긴 궁금한 부분을 자유롭게 물어보세요! 다만, 질문 기회는 딱 5번! 참고로, 저는 정답을 알려주진 않고 도움만 줄 수 있어요. 모든 결정은 당신이 해야합니다. 자, 무엇이 궁금한가요?

--- 아스트라에게 도움 받을 수 있는 좋은 질문 예시:
'나는 중력이 지구보다 2배로 강한 행성을 연구하고 있어. 여기선 ~~한 특징이 나타날 거라고 생각해! 이게 과학적으로 맞을까? 그리고 맞다면, 이 행성에서는 구체적으로 어떤 일이 벌어지게 될까?'

도움받기 어려운 나쁜 질문 예시:
'그냥 정답을 알려줘!' (어차피 정답은 알려주지 않고 기회 1회만 소진돼요.)`

// 초기 메시지를 chatHistory에 추가
chatHistory.push({
  role: 'assistant',
  content: initialMessage,
})

// 초기 메시지 표시
function displayMessage(content, isUser = false) {
  const messageDiv = document.createElement('div')
  messageDiv.className = `message ${isUser ? 'message--user' : 'message--bot'}`
  
  if (!isUser) {
    const iconSpan = document.createElement('span')
    iconSpan.className = 'message-icon'
    iconSpan.textContent = '🤖'
    messageDiv.appendChild(iconSpan)
  }
  
  const textDiv = document.createElement('div')
  textDiv.className = 'message-text'
  textDiv.textContent = content
  messageDiv.appendChild(textDiv)
  
  chatbotMessagesEl.appendChild(messageDiv)
  chatbotMessagesEl.scrollTop = chatbotMessagesEl.scrollHeight
}

// 페이지 로딩 시 초기 메시지 표시
displayMessage(initialMessage, false)

// 챗봇 폼 제출 처리
if (chatbotForm) {
  chatbotForm.addEventListener('submit', async (event) => {
    event.preventDefault()
    
    const userMessage = chatbotInput.value.trim()
    if (!userMessage) return
    
    // 질문 횟수 확인
    if (questionCount >= MAX_QUESTIONS) {
      displayMessage('질문 기회를 모두 소진하셨습니다. 전 충전이 필요해요..zz', false)
      chatbotInput.disabled = true
      return
    }
    
    // 사용자 메시지 표시
    displayMessage(userMessage, true)
    chatHistory.push({
      role: 'user',
      content: userMessage,
    })
    
    // 입력창 비우기 및 비활성화
    chatbotInput.value = ''
    chatbotInput.disabled = true
    
    // 질문 횟수 증가
    questionCount++
    
    // 제출 버튼 표시 (1회 이상 대화 시)
    if (questionCount >= 1 && finalSubmitBtn) {
      finalSubmitBtn.style.display = 'block'
      finalSubmitBtn.style.opacity = '0'
      setTimeout(() => {
        finalSubmitBtn.style.transition = 'opacity 0.5s ease-in'
        finalSubmitBtn.style.opacity = '1'
      }, 10)
    }
    
    // API 키 확인
    if (!apiKey) {
      displayMessage('API 키가 설정되지 않았습니다. 관리자에게 문의하세요.', false)
      chatbotInput.disabled = false
      return
    }
    
    // 로딩 표시
    const loadingDiv = document.createElement('div')
    loadingDiv.className = 'message message--bot'
    const loadingIcon = document.createElement('span')
    loadingIcon.className = 'message-icon'
    loadingIcon.textContent = '🤖'
    loadingDiv.appendChild(loadingIcon)
    const loadingText = document.createElement('div')
    loadingText.className = 'message-text'
    loadingText.textContent = '생각 중...'
    loadingDiv.appendChild(loadingText)
    chatbotMessagesEl.appendChild(loadingDiv)
    chatbotMessagesEl.scrollTop = chatbotMessagesEl.scrollHeight
    
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: chatHistory,
          temperature: 0.7,
        }),
      })
      
      const data = await response.json()
      
      // 로딩 메시지 제거
      chatbotMessagesEl.removeChild(loadingDiv)
      
      if (data.choices && data.choices[0]) {
        const reply = data.choices[0].message.content
        displayMessage(reply, false)
        chatHistory.push({
          role: 'assistant',
          content: reply,
        })
      } else {
        displayMessage('응답을 받는 중 오류가 발생했습니다. 다시 시도해주세요.', false)
      }
    } catch (error) {
      // 로딩 메시지 제거
      if (loadingDiv.parentNode) {
        chatbotMessagesEl.removeChild(loadingDiv)
      }
      console.error('OpenAI API 오류:', error)
      displayMessage('통신 오류가 발생했습니다. 네트워크를 확인하고 다시 시도해주세요.', false)
    } finally {
      chatbotInput.disabled = false
      chatbotInput.focus()
    }
  })
}
