<template>
  <div class="home-page">
    <!-- Header / Hero -->
    <header class="hero">
      <div class="hero-grid">
        <div class="hero-text" v-reveal>
          <div class="hero-greeting">
            <h2>Hello<span class="accent">.</span></h2>
          </div>
          
          <div class="intro-row">
            <div class="line"></div>
            <span>I'm Barry</span>
          </div>

          <h1 class="hero-title">
            Software <br/> <span class="highlight">Developer</span>
          </h1>

          <div class="cta-group">
            <button class="btn btn-primary">
              Got a project?
            </button>
            <button 
                href="../../../public/Diaz, Barry A. - Resume.pdf" 
                download 
                class="btn btn-secondary"
                >
                My resume
            </button>
          </div>
        </div>

        <div class="hero-image-wrapper" v-reveal>
          <div class="hero-image-container">
            <div class="bracket left">&lt;</div>
            <div class="bracket right">&gt;</div>
            <div class="circle-bg-large"></div>
            <div class="circle-border"></div>
            <div class="image-frame">
              <img 
                src="../../../images/IMG_2712 2X2 2.jpg"   
                alt="Barry Diaz" 
                class="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="section about">
      <div class="container">
        <div class="content-grid">
          <div class="bio" v-reveal>
            <h2 class="section-title">About me</h2>
            <p class="description">
              I am a self-motivated individual and Cum Laude Computer Science graduate from Cavite State University. 
              I excel in identifying effective solutions for software challenges, applying my programming knowledge to build responsive web applications and enhance digital workflows.
            </p>
            <div class="stats">
              <div>
                <div class="stat-number">Dec 2023</div>
                <div class="stat-label">Professional Start</div>
              </div>
              <div>
                <div class="stat-number">9+</div>
                <div class="stat-label">Core Technologies</div>
              </div>
            </div>
          </div>

          <div class="skills-list" v-reveal>
            <div 
              v-for="skill in skills" 
              :key="skill.name" 
              class="skill-tag"
            >
              <img 
                :src="getSkillIcon(skill.iconName)" 
                :alt="skill.name"
                class="skill-icon"
              />
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section projects">
      <div class="container">
        <div v-reveal>
          <h3 class="pre-title">Portfolio</h3>
          <h2 class="section-title">Featured Projects</h2>
        </div>

        <div class="projects-grid">
          <div 
            v-for="(project, index) in projects" 
            :key="index" 
            class="project-card"
            v-reveal
          >
            <div class="card-header">
              <div class="folder-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <div class="project-links">
                <a href="#" class="icon-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
                <a href="#" class="icon-link" aria-label="External Link">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <h3 class="project-title">{{ project.title }}</h3>
            
            <p class="project-desc">
              {{ project.description }}
            </p>

            <div class="project-tech-list">
              <span 
                v-for="tech in project.stack" 
                :key="tech" 
                class="tech-item"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section experience">
      <div class="container">
        <div v-reveal>
          <h3 class="pre-title">Professional Path</h3>
          <h2 class="section-title">Work Experience</h2>
        </div>

        <div class="timeline">
          <div class="timeline-item" v-reveal>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="job-header">
                <div>
                  <h4 class="job-title">Software Developer</h4>
                  <p class="company">H.R.D. Singapore Pte. Ltd.</p>
                </div>
                <div class="date">Dec 2023 — Present</div>
              </div>
              <ul class="job-tasks">
                <li>Developed responsive, component-based user interfaces using Vue.js and modern JavaScript to deliver seamless, high-performance user experiences across all devices.</li>
                <li>Engineered scalable server-side logic and secure RESTful APIs leveraging Laravel and Node.js to bridge the gap between complex data and the client.</li>
                <li>Managed diverse data architectures by optimizing SQL relational schemas and implementing CouchDB for high-availability, document-based storage solutions.</li>
              </ul>
            </div>
          </div>

          <div class="timeline-item" v-reveal>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="job-header">
                <div>
                  <div class="title-group">
                    <h4 class="job-title">Technical Support Intern</h4>
                    <span class="badge badge-intern">Internship</span>
                  </div>
                  <p class="company">City Government of Cavite</p>
                </div>
                <div class="date">Jul 2022 — Sept 2022</div>
              </div>
              <ul class="job-tasks">
                <li>Managed and organized data within the organization’s internal database systems, ensuring accurate record-keeping and efficient retrieval.</li>
                <li>Performed diagnostics and troubleshooting on system units and peripherals, including printers, to resolve hardware-related issues.</li>
                <li>Acquired foundational programming skills by learning the basics of the Python language to assist in data manipulation tasks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="section education">
      <div class="container">
        <div v-reveal>
          <h3 class="pre-title">Academic Foundation</h3>
          <h2 class="section-title">Education</h2>
        </div>

        <div class="edu-list">
          <div class="edu-item" v-reveal>
            <div class="edu-degree">
              <div class="degree-name">Bachelor of Science in Computer Science</div>
              <div class="honor">Cum Laude</div>
            </div>
            <div class="edu-details">
              <div class="school-header">
                <h4 class="school-name">Cavite State University - Cavite City Campus</h4>
                <span class="badge badge-college">College</span>
              </div>
              <p class="location">Cavite City, Province of Cavite, Philippines</p>
              <div class="honor-box">
                <span class="honor-text">Graduated with Honors</span>
              </div>
            </div>
          </div>

          <div class="edu-item" v-reveal>
            <div class="edu-degree">
              <div class="degree-name">Science, Technology, Engineering, and Mathematics</div>
            </div>
            <div class="edu-details">
              <div class="school-header">
                <h4 class="school-name">St. Joseph College of Cavite Inc.</h4>
                <span class="badge badge-school">Senior High School</span>
              </div>
              <p class="location">Cavite City, Province of Cavite, Philippines</p>
            </div>
          </div>

          <div class="edu-item" v-reveal>
            <div class="edu-degree"></div>
            <div class="edu-details">
              <div class="school-header">
                <h4 class="school-name">Cavite National High School</h4>
                <span class="badge badge-school">Junior High School</span>
              </div>
              <p class="location">Cavite City, Province of Cavite, Philippines</p>
            </div>
          </div>

          <div class="edu-item" v-reveal>
            <div class="edu-degree"></div>
            <div class="edu-details">
              <div class="school-header">
                <h4 class="school-name">Patnubay Academy</h4>
                <span class="badge badge-school">Elementary</span>
              </div>
              <p class="location">Noveleta, Province of Cavite, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="copyright">
          © {{ currentYear }} BARRY DIAZ
        </div>
        <div class="socials">
          <a href="mailto:barryxdiaz@gmail.com" class="social-link">Email</a>
          <a href="https://www.linkedin.com/in/barryxdiaz/" target="_blank" class="social-link">LinkedIn</a>
          <a href="#" class="social-link">GitHub</a>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <!-- Note: v-if="showBackToTop" controls visibility -->
    <transition 
      enter-active-class="transition-enter-active"
      enter-from-class="transition-enter-from"
      enter-to-class="transition-enter-to"
      leave-active-class="transition-leave-active"
      leave-from-class="transition-leave-from"
      leave-to-class="transition-leave-to"
    >
      <button 
        v-show="showBackToTop" 
        @click="scrollToTop"
        class="back-to-top"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
export default {
  name: 'HomePage',
  inject: ['lenis'],
  data() {
    return {
      showBackToTop: false,
      skills: [
        { name: 'Vue.js', iconName: 'vuejs' },
        { name: 'Vuetify', iconName: 'vuetify' },
        { name: 'Node.js', iconName: 'nodejs' },
        { name: 'JavaScript', iconName: 'javascript' },
        { name: 'Laravel', iconName: 'laravel' },
        { name: 'PHP', iconName: 'php' },
        { name: 'HTML', iconName: 'html5' },
        { name: 'CSS', iconName: 'css3' },
        { name: 'SQL', iconName: 'azuresqldatabase' },
        { name: 'CouchDB', iconName: 'couchdb' },
        { name: 'phpMyAdmin', iconName: 'mysql' },
        { name: 'Python', iconName: 'python' }
      ],
      projects: [
        {
          title: "Barangay MIS",
          description: "A Management Information System for Barangay Salcedo 1 in Noveleta, Cavite. Developed as a group thesis project to streamline barangay administrative operations and record keeping.",
          stack: ["HTML", "CSS", "PHP", "MySQL"]
        },
        {
          title: "SDAK Memory Monitor",
          description: "A solo project created for my current job's section (SD After Kakou). It monitors the memory usage of drives assigned to our section, providing real-time saving of data in CouchDB and data visualization.",
          stack: ["Vue 3", "Vuetify", "Node.js", "CouchDB"]
        },
        {
          title: "TaskFlow Management",
          description: "A full-stack task management dashboard designed for small teams. Features include user authentication, real-time task updates, and performance analytics charts.",
          stack: ["Laravel", "Vue.js", "MySQL"]
        }
      ]
    }
  },
  directives: {
    reveal: {
      mounted(el) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(el, 
          { 
            y: 60, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.25, 
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    getSkillIcon(iconName) {
      if(iconName === 'laravel' || iconName === 'mysql' || iconName === 'python'){
        return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`
      } else {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-plain.svg`
      }
    },
    scrollToTop() {
      // 1. Normalize the instance (Ref vs Object)
      const lenisInstance = this.lenis && this.lenis.value ? this.lenis.value : this.lenis;
      
      if (lenisInstance && typeof lenisInstance.scrollTo === 'function') {
        // 2. Use Lenis scrollTo with explicit duration to ensure smoothness
        lenisInstance.scrollTo(0, {
          duration: 1.5, // 1.5 seconds scroll time
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Standard smooth easing
        });
      } else {
        // 3. Fallback to native smooth scroll
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    handleLenisScroll(e) {
      // Log for debugging
      // console.log("Lenis scroll event:", e.scroll); 
      this.showBackToTop = e.scroll > 50;
    },
    handleNativeScroll() {
      this.showBackToTop = window.scrollY > 50;
    }
  },
  mounted() {
    // 1. Debug: Check what we actually injected
    // console.log("Injected raw lenis:", this.lenis);

    // 2. Normalize the instance
    const lenisInstance = this.lenis && this.lenis.value ? this.lenis.value : this.lenis;

    if (lenisInstance && typeof lenisInstance.on === 'function') {
      // Valid Lenis instance found
      lenisInstance.on('scroll', this.handleLenisScroll);
    } else {
      window.addEventListener('scroll', this.handleNativeScroll);
    }
  },
  beforeUnmount() {
    const lenisInstance = this.lenis && this.lenis.value ? this.lenis.value : this.lenis;
    
    if (lenisInstance && typeof lenisInstance.off === 'function') {
      lenisInstance.off('scroll', this.handleLenisScroll);
    } else {
      window.removeEventListener('scroll', this.handleNativeScroll);
    }
  }
}
</script>

<style scoped>
  .home-page {
    width: 100%;
  }

  .hero {
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 1.5rem 6rem;
    overflow: hidden;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  .hero-text {
    text-align: center;
    order: 2;
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
    margin-bottom: 2.5rem;
    color: var(--text-primary);
  }

  .highlight { color: var(--text-secondary); }
  .accent { color: var(--accent); }

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

  /* Hero Image */
  .hero-image-wrapper {
    display: flex;
    justify-content: center;
    order: 1;
  }

  .hero-image-container {
    position: relative;
    width: 18rem;
    height: 18rem;
  }

  .bracket {
    position: absolute;
    font-size: 6rem;
    font-family: serif;
    color: var(--accent);
    opacity: 0.40;
    z-index: 0;
  }
  .bracket.left { top: 50%; left: -2rem; transform: translateY(-50%); }
  .bracket.right { bottom: -1rem; right: -2rem; }

  .circle-bg-large {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 12px solid var(--accent);
    opacity: 0.2;
    transform: scale(1.05);
    z-index: 0;
  }

  .circle-border {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 10px solid var(--accent);
    opacity: 0.3;
    z-index: 0;
  }

  .image-frame {
    position: absolute;
    inset: 1rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--bg-secondary);
    background-color: var(--bg-secondary);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    z-index: 10;
  }

  .profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .image-frame:hover .profile-img {
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    .hero-grid { grid-template-columns: 1fr 1fr; }
    .hero-text { text-align: left; order: 1; }
    .hero-image-wrapper { justify-content: flex-end; order: 2; }
    .intro-row { justify-content: flex-start; }
    .cta-group { flex-direction: row; justify-content: flex-start; }
    .hero-greeting h2 { font-size: 3rem; }
    .intro-row span { font-size: 1.875rem; }
    .hero-title { font-size: 5rem; }
    .hero-image-container { width: 24rem; height: 24rem; }
  }

  /* SECTIONS (General) */
  .section {
    border-top: 1px solid var(--border-color);
    margin-top: 2rem;
    transition: border-color 0.3s;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 6rem 1.5rem;
  }

  .pre-title {
    color: var(--accent);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 2.5rem;
    color: var(--text-primary);
  }

  /* ABOUT SECTION */
  .about { background-color: transparent; }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .bio p {
    color: var(--text-secondary);
    font-size: 1.125rem;
    line-height: 1.75;
    margin-bottom: 2rem;
  }

  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-content: flex-start;
  }

  .skill-tag {
    padding: 1rem 2.75rem;
    background-color: var(--bg-primary);
    border: 2px solid var(--border-color);
    border-radius: 9999px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-secondary);
    box-shadow: var(--shadow-sm);
    transition: all 0.2s;
    cursor: default;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .skill-icon {
    height: 1.25rem;
    width: 1.25rem;
  }

  .v-application.dark-mode .skill-icon { filter: brightness(0) invert(1); }
  .v-application:not(.dark-mode) .skill-icon { filter: brightness(0); }

  .skill-tag:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }

  @media (min-width: 1024px) { .content-grid { grid-template-columns: 1fr 1fr; } }

  /* PROJECTS SECTION */
  .projects { background-color: transparent; }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .project-card {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .folder-icon { color: var(--accent); }
  .folder-icon svg { width: 2.5rem; height: 2.5rem; }

  .project-links { display: flex; gap: 1rem; }

  .icon-link {
    color: var(--text-secondary);
    transition: color 0.2s;
  }
  .icon-link:hover { color: var(--accent); }
  .icon-link svg { width: 1.25rem; height: 1.25rem; }

  .project-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    transition: color 0.2s;
  }

  .project-card:hover .project-title { color: var(--accent); }

  .project-desc {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    flex-grow: 1;
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-family: monospace;
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .tech-item::after { content: ","; }
  .tech-item:last-child::after { content: ""; }

  /* EXPERIENCE SECTION */
  .experience {
    background-color: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }

  .timeline {
    position: relative;
    padding-left: 1rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--border-color);
  }

  .timeline-item {
    position: relative;
    padding-left: 2.5rem;
    margin-bottom: 4rem;
  }

  .timeline-dot {
    position: absolute;
    left: -6px;
    top: 0;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: var(--accent);
    border: 4px solid var(--bg-secondary); 
    box-shadow: 0 0 0 1px var(--border-color); 
  }

  .job-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }

  .job-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .company {
    color: var(--accent);
    font-weight: 500;
  }

  .date {
    font-family: monospace;
    font-size: 0.875rem;
    color: var(--text-muted);
  }

  .title-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 0.25rem 0.625rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid transparent;
  }

  .badge-intern {
    background-color: var(--accent-bg);
    color: var(--accent-text);
    border-color: var(--accent);
  }

  .job-tasks {
    list-style: none;
    padding: 0;
  }

  .job-tasks li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary);
    line-height: 1.75;
  }

  .job-tasks li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  @media (min-width: 768px) {
    .job-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
    }
  }

  /* EDUCATION SECTION */
  .education { background-color: transparent; }

  .edu-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .edu-item {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .edu-degree {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .degree-name {
    color: var(--accent);
    font-weight: 700;
    font-size: 1.125rem;
  }

  .honor {
    font-style: italic;
    font-weight: 700;
    color: var(--text-primary);
  }

  .edu-details {
    border-left: 1px solid var(--border-color);
    padding-left: 2rem;
  }

  .school-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
  }

  .school-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .badge-college {
    background-color: var(--accent-bg);
    color: var(--accent-text);
    border-color: var(--accent);
  }

  .badge-school {
    background-color: var(--bg-secondary);
    color: var(--text-secondary);
    border-color: var(--border-color);
  }

  .location {
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  .honor-box {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: var(--accent-bg);
    border: 1px solid var(--accent);
    border-radius: 0.5rem;
  }

  .honor-text {
    color: var(--accent);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  @media (min-width: 768px) {
    .edu-item { grid-template-columns: 1fr 2fr; }
  }

  /* FOOTER */
  .footer {
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-top: 1px solid var(--border-color);
    align-items: center;
  }

  .copyright {
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--text-muted);
  }

  .socials {
    display: flex;
    gap: 2rem;
  }

  .social-link {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-muted);
  }

  .social-link:hover {
    color: var(--accent);
  }

  @media (min-width: 768px) {
    .footer {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  /* BACK TO TOP */
  /* ... existing styles ... */

/* BACK TO TOP */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: var(--accent);
  color: white;
  padding: 0.75rem;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.4);
  z-index: 9999;
  transition: background-color 0.3s ease, transform 0.3s ease; /* Hover effects */
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top:hover {
  background-color: var(--accent-hover);
  transform: translateY(-4px);
}

.transition-enter-active,
.transition-leave-active {
  transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.transition-enter-from,
.transition-leave-to {
  opacity: 0;
  /* Reduced translate distance slightly (from 2.5rem to 20px) for elegance */
  transform: translateY(20px) scale(0.9);
}

.transition-enter-to,
.transition-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.back-to-top .icon {
  width: 1.5rem;
  height: 1.5rem;
}

</style>