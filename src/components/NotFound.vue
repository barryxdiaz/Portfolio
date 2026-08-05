<template>
  <div class="not-found-page">
    <section class="hero">
      <div class="hero-content" v-reveal>
        <div class="hero-greeting">
          <h2>Oops<span class="accent">.</span></h2>
        </div>

        <div class="intro-row">
          <div class="line"></div>
          <span>Error 404</span>
          <div class="line"></div>
        </div>

        <h1 class="hero-title">
          Page not <br />
          <span class="highlight">found</span>
        </h1>

        <p class="description">
          The page you're looking for doesn't exist, may have been moved, or the URL might be
          mistyped. Let's get you back on track.
        </p>

        <div class="cta-group">
          <router-link to="/" class="btn btn-primary">Back to home</router-link>
          <a href="mailto:barryxdiaz@gmail.com" class="btn btn-secondary">Contact me</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'NotFound',
  directives: {
    reveal: {
      mounted(el) {
        gsap.fromTo(
          el,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.25,
            ease: 'power4.out',
          },
        )
      },
    },
  },
}
</script>

<style scoped>
.not-found-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 1.5rem 6rem;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
}

.hero-content {
  text-align: center;
  max-width: 40rem;
}

.hero-greeting h2 {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.intro-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.line {
  height: 2px;
  width: 3rem;
  background-color: var(--accent);
}

.intro-row span {
  font-size: 1.5rem;
  color: var(--text-secondary);
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.05em;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.highlight {
  color: var(--text-secondary);
}
.accent {
  color: var(--accent);
}

.description {
  color: var(--text-secondary);
  font-size: 1.125rem;
  line-height: 1.75;
  margin-bottom: 2.5rem;
  margin-left: auto;
  margin-right: auto;
}

.cta-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.2s;
  text-align: center;
}

.btn-primary {
  background-color: var(--accent);
  color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
}

.btn-primary:hover {
  background-color: var(--accent-hover);
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (min-width: 1024px) {
  .hero-greeting h2 {
    font-size: 3rem;
  }
  .intro-row span {
    font-size: 1.875rem;
  }
  .hero-title {
    font-size: 5rem;
  }
  .cta-group {
    flex-direction: row;
    justify-content: center;
  }
}
</style>