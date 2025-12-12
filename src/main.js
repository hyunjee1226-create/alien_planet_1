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
