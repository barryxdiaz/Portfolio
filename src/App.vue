<template>
  <v-app :class="{ 'dark-mode': isDarkMode }">
    <div class="app-container">
      
      <nav class="navbar">
        <div class="nav-content">
          <div class="brand">
            BARRY <span class="accent">DIAZ</span>
          </div>
          
          <!-- Desktop Menu -->
          <div class="desktop-menu">
            <a href="#" @click.prevent="handleNavClick($event)" class="nav-link">Home</a>
            <a href="#about" @click.prevent="handleNavClick($event)" class="nav-link">About</a>
            <a href="#projects" @click.prevent="handleNavClick($event)" class="nav-link">Projects</a>
            <a href="#experience" @click.prevent="handleNavClick($event)" class="nav-link">Experience</a>
            <a href="#education" @click.prevent="handleNavClick($event)" class="nav-link">Education</a>
            <a href="mailto:barryxdiaz@gmail.com" class="nav-link">Contact</a>
          </div>

          <div class="nav-controls">
            <!-- Theme Toggle -->
            <button @click="toggleTheme" class="icon-btn" aria-label="Toggle Dark Mode">
              <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- ********************************************************* -->
            <!-- **** THIS IS THE MOBILE MENU BUTTON (Hamburger) **** -->
            <!-- ********************************************************* -->
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="mobile-toggle" aria-label="Toggle Menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <!-- 3 Lines Icon (Closed) -->
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <!-- X Icon (Open) -->
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <!-- ********************************************************* -->
            
          </div>
        </div>

        <!-- ********************************************************* -->
        <!-- **** THIS IS THE MOBILE MENU DROPDOWN CONTENT **** -->
        <!-- ********************************************************* -->
        <transition name="slide-fade">
          <div v-if="isMobileMenuOpen" class="mobile-menu">
            <a href="#" @click.prevent="handleNavClick($event)" class="mobile-link">Home</a>
            <a href="#about" @click.prevent="handleNavClick($event)" class="mobile-link">About</a>
            <a href="#projects" @click.prevent="handleNavClick($event)" class="mobile-link">Projects</a>
            <a href="#experience" @click.prevent="handleNavClick($event)" class="mobile-link">Experience</a>
            <a href="#education" @click.prevent="handleNavClick($event)" class="mobile-link">Education</a>
            <a href="mailto:barryxdiaz@gmail.com" class="mobile-link">Contact</a>
          </div>
        </transition>
        <!-- ********************************************************* -->

      </nav>

      <v-main class="main-content-wrapper">
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'App',
  data() {
    return {
      isDarkMode: true,
      isMobileMenuOpen: false,
      lenis: null
    }
  },
  provide() {
    return {
      lenis: this.lenis
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light')
    },
    handleNavClick(event) {
      const targetId = event.target.getAttribute('href');
      if (this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
      }
      if (targetId && targetId.startsWith('#')) {
        if (targetId === '#') {
          this.lenis.scrollTo(0);
        } else {
          const element = document.querySelector(targetId);
          if (element) {
            this.lenis.scrollTo(element);
          }
        }
        window.history.replaceState(null, null, ' ');
      } 
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      this.isDarkMode = false;
    } else {
      this.isDarkMode = true;
    }

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    this.lenis = lenisInstance;

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenisInstance.scrollTo(value, 0) : lenisInstance.scroll;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.body.style.transform ? "transform" : "fixed"
    });

    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    lenisInstance.on('scroll', ScrollTrigger.update);
  },
  beforeUnmount() {
    if (this.lenis) {
      this.lenis.destroy();
    }
  }
}
</script>

<style>
@font-face {
  font-family: "SF-Regular";
  src: local("SF-Regular"), url("@/fonts/SF-Pro-Text-Regular.otf") format("opentype");
  font-display: swap;
}
@font-face {
  font-family: "SF-Bold";
  src: local("SF-Bold"), url("@/fonts/SF-Pro-Text-Bold.otf") format("opentype");
  font-display: swap;
}

.v-application {
  font-family: "SF-Regular", sans-serif !important;
}

html { scroll-behavior: smooth; }

:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-glass: rgba(255, 255, 255, 0.9);
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-muted: #9ca3af;
  --border-color: #e5e7eb;
  --accent: #2563eb;
  --accent-hover: #3b82f6;
  --accent-bg: #eff6ff;
  --accent-text: #1d4ed8;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.v-application.dark-mode {
  --bg-primary: #080808;
  --bg-secondary: #0e1721;
  --bg-glass: rgba(8, 8, 8, 0.9);
  --text-primary: #ffffff;
  --text-secondary: #d4d4d8;
  --text-muted: #71717a;
  --border-color: #27272a;
  --accent: #2563eb;
  --accent-hover: #3b82f6;
  --accent-bg: rgba(37, 99, 235, 0.15);
  --accent-text: #60a5fa;
  background-color: var(--bg-primary) !important;
  color: var(--text-primary) !important;
}

.v-application:not(.dark-mode) {
  background-color: var(--bg-primary) !important;
  color: var(--text-primary) !important;
}

.app-container {
  min-height: 100vh;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; transition: color 0.2s; }
button { cursor: pointer; border: none; outline: none; font-family: inherit; }
</style>

<style scoped>
.navbar {
  position: fixed; top: 0; left: 0; right: 0; width: 100%;
  z-index: 1000; background-color: var(--bg-glass);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s, border-color 0.3s;
}

.nav-content {
  max-width: 1280px; margin: 0 auto; padding: 1.5rem;
  display: flex; justify-content: space-between; align-items: center;
}

.brand { font-weight: 800; font-size: 1.25rem; letter-spacing: -0.05em; color: var(--text-primary); }
.accent { color: var(--accent); }

.desktop-menu {
  display: none; gap: 2rem; font-size: 0.75rem; text-transform: uppercase;
  letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary);
}

.nav-link:hover { color: var(--accent); }

.nav-controls { display: flex; align-items: center; gap: 1rem; }

.icon-btn {
  padding: 0.5rem; border-radius: 9999px; background: transparent;
  color: var(--text-primary); transition: background-color 0.2s, color 0.2s;
  display: flex; align-items: center; justify-content: center;
}

.icon-btn:hover { background-color: var(--bg-secondary); }
.icon-btn svg { width: 1.25rem; height: 1.25rem; }

.mobile-toggle { display: flex; background: transparent; color: var(--text-primary); }

.mobile-menu {
  position: absolute; top: 100%; left: 0; width: 100%;
  background-color: var(--bg-secondary); border-bottom: 1px solid var(--border-color);
  padding: 1rem; display: flex; flex-direction: column; gap: 1rem;
}

.mobile-link {
  font-size: 0.9rem; font-weight: 600; padding: 0.75rem; border-radius: 0.5rem; color: var(--text-primary);
}

.mobile-link:hover { background-color: var(--bg-primary); color: var(--accent); }

@media (min-width: 768px) {
  .desktop-menu { display: flex; }
  .mobile-toggle { display: none; }
}

.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.3s ease; max-height: 300px; opacity: 1; }
.slide-fade-enter-from, .slide-fade-leave-to { max-height: 0; opacity: 0; transform: translateY(-10px); }

.main-content-wrapper { padding-top: 80px; }
</style>