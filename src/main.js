import './style.css'

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
  </main>
`
