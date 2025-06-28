<template>
    <section class="about-section">
  
      <div class="subsection">
        <h2 class="heading">Обо мне</h2>
        <div
          :class="[
            'text-block',
            'about-text-block',
          ]"
        >
          <p>
            Я психолог с более чем 10‑летним опытом работы. Моя специализация —
            помощь в преодолении тревожности, восстановлении после стрессов и
            построении здоровых отношений. Я провожу индивидуальные и групповые
            консультации, провожу тренинги и вебинары по развитию эмоционального
            интеллекта. <!-- длинный текст для демонстрации -->
          </p>
        </div>
      </div>
  
      <div class="subsection">
        <h2 class="heading">Образование</h2>
        <div
          :class="[
            'text-block',
            'education-text-block',
          ]"
        >
          <ul>
            <li>2008–2012 — Бакалавр психологии, МГУ</li>
            <li>2012–2014 — Магистр психотерапии, РГПУ</li>
            <li>2015 — Сертификат EMDR‑терапевта</li>
            <li>2018 — Курсы по когнитивно‑поведенческой терапии (КПТ)</li>
            <li>2021 — Семинары по семейному консультированию</li>
          </ul>
        </div>
      </div>
  
    </section>
</template>
  
  <style scoped>
    .about-section {
        position: relative;
        width: 100%;
        padding: 16px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        background-color: #0C1E28;
        color: white;
    }

    .subsection {
        position: relative;
        width: 100%;
        min-height: 50vh;
        height: auto;
    }
</style>
  