import { useState, useEffect, useRef } from 'react'
import './App.css'

// Import images
import navLogo from './assets/nav_logo.png'
import heroLogo from './assets/hero_logo.png'
import footerLogo from './assets/footer_logo.png'
import stillBuilding from './assets/still_building.png'
import stillAccordion from './assets/still_accordion.png'
import stillMarch from './assets/still_march.png'
import stillInn from './assets/still_inn.png'
import stillArrest from './assets/still_arrest.png'
import stillSnow from './assets/still_snow.png'

function App() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImg, setLightboxImg] = useState('')
  const [lightboxCaption, setLightboxCaption] = useState('')

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Intersection observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openLightbox = (src, caption) => {
    setLightboxImg(src)
    setLightboxCaption(caption)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const filmStills = [
    { src: stillBuilding, time: 'Scene 1', caption: 'A North Korean apartment block, its facade emblazoned with state propaganda — the only reality the boy has ever known.' },
    { src: stillAccordion, time: 'Scene 2', caption: 'An accordion classroom under the watchful eye of a stern instructor — music as state discipline, childhood as indoctrination.' },
    { src: stillMarch, time: 'Scene 3', caption: 'Children march beneath red flags while laborers toil in the fields — daily life under the regime\'s unyielding grip.' },
    { src: stillInn, time: 'Scene 4', caption: 'At a local inn, the boy meets his father for the journey that will change everything — a threshold between the known and the unknown.' },
    { src: stillArrest, time: 'Scene 5', caption: 'Arrested by Chinese authorities — the family faces the threat of forced repatriation, a fate that could mean imprisonment or death.' },
    { src: stillSnow, time: 'Scene 6', caption: 'Three months later — a mother holds her child close as snow falls outside their uncertain refuge, survival measured in days.' },
  ]

  return (
    <>
      {/* NAV */}
      <nav className={navScrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo" onClick={(e) => scrollTo(e, '#home')}>
          <img src={navLogo} alt="Zeugnis38Films" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#mission" onClick={(e) => scrollTo(e, '#mission')}>Mission</a></li>
          <li><a href="#film" onClick={(e) => scrollTo(e, '#film')}>Our Film</a></li>
          <li><a href="#pillars" onClick={(e) => scrollTo(e, '#pillars')}>Our Work</a></li>
          <li><a href="#projects" onClick={(e) => scrollTo(e, '#projects')}>Projects</a></li>
          <li><a href="#scope" onClick={(e) => scrollTo(e, '#scope')}>Global Scope</a></li>
          <li><a href="#technology" onClick={(e) => scrollTo(e, '#technology')}>Technology</a></li>
          <li><a href="#support" className="nav-cta" onClick={(e) => scrollTo(e, '#support')}>Support Us</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-watermark">Z38</div>
        <div className="hero-content">
          <img src={heroLogo} alt="Zeugnis38Films" className="hero-logo-img" />
          <div className="hero-pronunciation">[tsoyg-nis] — testimony, witness</div>
          <h1>Where there is<br />courage, there is <em>a story</em></h1>
          <p className="hero-sub">
            Behind every border, behind every closed door, ordinary people do extraordinary things —
            parents who walk through darkness so their children can reach the light, families who hold
            together when the world tries to tear them apart, strangers who risk everything to help
            someone they have never met. These are the stories we animate: tales of perseverance,
            of love that refuses to surrender, of the human will to survive and to hope.
            Named for the German <em>Zeugnis</em> (testimony) and the 38th parallel that divides Korea,
            our studio ensures that no act of courage goes unrecorded.
          </p>
          <div className="hero-actions">
            <a href="#film" className="btn-primary" onClick={(e) => scrollTo(e, '#film')}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><polygon points="4,2 14,8 4,14"/></svg>
              Watch Our Film
            </a>
            <a href="#support" className="btn-outline" onClick={(e) => scrollTo(e, '#support')}>Fund the Mission</a>
          </div>
          <div className="hero-award">
            <div className="award-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                <polygon points="12,2 15,9 22,9 16.5,13.5 18.5,21 12,16.5 5.5,21 7.5,13.5 2,9 9,9"/>
              </svg>
            </div>
            <div className="award-text">
              <strong>2024 International Creative Competition Winner — Film Category</strong><br />
              <em>Freedom's Last Embrace: A North Korean Accordion Boy</em>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker">
          {['North Korea','Ukraine','Syria','Afghanistan','Iran','Gaza','Myanmar','Sudan','Tigray','Yemen',
            'North Korea','Ukraine','Syria','Afghanistan','Iran','Gaza','Myanmar','Sudan','Tigray','Yemen'].map((item, i) => (
            <span className="ticker-item" key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <section className="mission" id="mission">
        <div className="section-label">Our Mission</div>
        <div className="mission-grid">
          <div>
            <h2>Every life holds<br />a story worth <em>telling</em></h2>
          </div>
          <div className="mission-text">
            <p>
              A boy plays accordion in a schoolroom, dreaming of the day his music will make
              someone smile. A mother wraps her arms around her child as snow falls outside
              an unfamiliar window. A family walks for days toward a border they have never
              seen, carrying nothing but each other. These are stories about love, about hope
              held tightly in impossible circumstances, about the bonds that hold families
              together when everything else falls apart.
            </p>
            <p>
              We believe people everywhere are drawn to these stories — not because of where
              they happen, but because of what they reveal about us. The courage of a parent.
              The resilience of a child. The small, fierce acts of kindness between strangers.
              These are universal truths, and they deserve a medium powerful enough to carry
              them to a global audience. Animation is that medium. It crosses every language.
              It invites audiences in through the warmth of its form. And it illuminates lives
              that might otherwise remain unseen.
            </p>
            <p>
              Behind every film, we also build something lasting: a meticulous record of testimony,
              documentation, and blockchain-secured evidence — assembled so that the human stories
              we tell on screen can, when the time comes, serve as cases for justice and accountability
              in international courts. Our films begin with hope. Our archives ensure it endures.
            </p>
          </div>
        </div>
      </section>

      {/* FILM SHOWCASE */}
      <section className="film-showcase" id="film">
        <div className="film-showcase-header">
          <div className="section-label">Award-Winning Debut</div>
          <h2>Freedom's Last Embrace:<br />A North Korean Accordion Boy</h2>
          <p>Our inaugural film, winner of the 2024 International Creative Competition (Film Category),
          follows a young boy and his family through escape, trafficking, detention, and the long passage toward asylum.</p>
        </div>

        <div className="film-gallery">
          {filmStills.map((still, i) => (
            <div className="film-still" key={i} onClick={() => openLightbox(still.src, still.caption)}>
              <img src={still.src} alt={still.caption} loading="lazy" />
              <div className="film-still-overlay">
                <div className="film-still-time">{still.time}</div>
                <div className="film-still-caption">{still.caption}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="film-info-grid">
          <div className="film-info-text">
            <p>
              The animation follows a young accordion student and his family as they flee North Korea —
              first across the border into China, then through a gauntlet of trafficking networks, detention
              by Chinese authorities, and the ever-present threat of forced repatriation. The story is drawn
              from firsthand defector testimonies, rendered through a visual style that protects identities
              while conveying the weight of lived experience.
            </p>
            <p>
              What sets this film apart is not only its subject matter but its method: each narrative element
              corresponds to documented testimony. The animation serves as both a creative work and a visual
              index of the evidentiary record behind it — a model for every film this studio will produce.
            </p>
          </div>
          <div className="film-credits">
            <div className="credit-block">
              <div className="credit-label">Project Visionary &amp; Executive Producer</div>
              <div className="credit-name"><strong>Prof. Leland Yi</strong></div>
            </div>
            <div className="credit-block">
              <div className="credit-label">Film Editing — Post Production</div>
              <div className="credit-name"><strong>Joshua Kim</strong></div>
            </div>
            <div className="credit-block">
              <div className="credit-label">Category</div>
              <div className="credit-name">Video/Film — Animation</div>
            </div>
            <div className="credit-block">
              <div className="credit-label">Runtime</div>
              <div className="credit-name">25 minutes, 58 seconds</div>
            </div>
            <div className="credit-block">
              <div className="credit-label">Recognition</div>
              <div className="credit-name gold">2024 International Creative Competition — Film Category Winner</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars" id="pillars">
        <div className="pillars-header">
          <div className="section-label">What We Do</div>
          <h2>Three pillars of our work</h2>
          <p>Every project at Zeugnis38Films moves through three integrated disciplines, each reinforcing the others.</p>
        </div>
        <div className="pillars-grid">
          {[
            { num: '01', title: 'Testimony & Documentation', text: 'Teams of trained interviewers, translators, and legal advisors gather firsthand accounts from refugees and survivors. Each testimony is recorded in structured formats that satisfy evidentiary standards — fixed-form questionnaires, video depositions, and corroborating materials — then digitized and secured on an immutable blockchain ledger.', tags: ['Structured Interviews', 'Legal Standards', 'Blockchain Archive'] },
            { num: '02', title: 'Animated Storytelling', text: 'Our directors, writers, and artists transform documented testimonies into compelling films. Animation is uniquely suited to this work: it protects the identities of those still at risk, renders events that no camera witnessed, and delivers emotional truth across cultures and languages without exploiting graphic imagery.', tags: ['Identity Protection', 'Emotional Truth', 'Global Reach'] },
            { num: '03', title: 'Distribution & Accountability', text: 'Completed films reach global audiences through streaming platforms, film festivals, educational institutions, and advocacy organizations. Simultaneously, the evidentiary archive grows — available to international tribunals, human rights courts, and truth commissions when justice becomes possible.', tags: ['YouTube & Netflix', 'Tribunals', 'Education'] },
          ].map((pillar, i) => (
            <div className="pillar-card fade-up" key={i}>
              <div className="pillar-number">{pillar.num}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <div className="pillar-tags">
                {pillar.tags.map((tag, j) => <span className="pillar-tag" key={j}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="methodology" id="methodology">
        <div className="methodology-header">
          <div className="section-label">Our Process</div>
          <h2>From testimony to screen</h2>
          <p>A rigorous pipeline ensures that every story is both artistically compelling and legally defensible.</p>
        </div>
        <div className="process-steps">
          {[
            { num: 'I', title: 'Gather', text: 'Trained interviewers conduct structured sessions with refugees and survivors, capturing testimony in standardized legal and narrative formats.' },
            { num: 'II', title: 'Secure', text: 'Every record — transcripts, documents, multimedia — is digitized, time-stamped, and committed to an immutable blockchain ledger.' },
            { num: 'III', title: 'Animate', text: 'Directors and AI-assisted production tools transform verified testimonies into films, leveraging scalable workflows to produce at volume.' },
            { num: 'IV', title: 'Deliver', text: 'Films reach audiences via YouTube, Netflix, festivals, and educational networks — while the archive stands ready for courts and commissions.' },
          ].map((step, i) => (
            <div className="step fade-up" key={i}>
              <div className="step-dot">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING PROJECTS */}
      <section className="methodology projects-section" id="projects">
        <div className="methodology-header">
          <div className="section-label">Upcoming Projects</div>
          <h2>Stories in development</h2>
          <p>Each project begins with testimony — gathered, verified, and secured — before a single frame is drawn.</p>
        </div>
        <div className="pillars-grid two-col">
          {[
            { num: '01', title: 'The Crossing', text: 'A series of short films documenting the trafficking networks that move North Korean women through China — told through the voices of survivors who made it to safety and those still searching for family members left behind.', tags: ['Koreans from the North', 'In Development'] },
            { num: '02', title: 'Letters from Mariupol', text: 'Animated testimonies from Ukrainian civilians displaced by the siege of Mariupol — capturing the bombardment, the shelters, the evacuations, and the long displacement that followed, drawn from interviews conducted in Poland and Germany.', tags: ['Ukraine', 'Pre-Production'] },
            { num: '03', title: 'The Political Camps', text: "First-person accounts from survivors of North Korea's political prison camps — forced labor, starvation, public executions, and the systematic erasure of families deemed politically disloyal. Animation as the only medium that can render what no camera entered.", tags: ['Koreans from the North', 'Research Phase'] },
            { num: '04', title: 'Children of the Route', text: 'Stories from unaccompanied minors who crossed through Iran, Turkey, and the Balkans — the smugglers, the camps, the kindness of strangers, and the bureaucratic limbo of asylum systems that leaves children stateless for years.', tags: ['Middle East', 'Concept Phase'] },
          ].map((project, i) => (
            <div className="pillar-card fade-up" key={i}>
              <div className="pillar-number">{project.num}</div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="pillar-tags">
                {project.tags.map((tag, j) => <span className="pillar-tag" key={j}>{tag}</span>)}
              </div>
            </div>
          ))}
          <div className="pillar-card fade-up full-width">
            <div className="pillar-number">05</div>
            <h3>Voices from the Safehouse</h3>
            <p>
              A new animation series led by filmmaker Joshua Kim, produced in partnership with
              <strong> Amigo Safehouse</strong>, documenting the journeys of North Korean escapees
              who found refuge and rebuilt their lives. These are stories of arrival —
              the first warm meal, the first safe night, the moment a stranger becomes family.
              Each film pairs intimate personal testimony with the safehouse workers who
              opened their doors when no one else would.
            </p>
            <div className="pillar-tags">
              <span className="pillar-tag">Koreans from the North</span>
              <span className="pillar-tag">Joshua Kim, Director</span>
              <span className="pillar-tag">Amigo Safehouse Partnership</span>
              <span className="pillar-tag">In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="scope" id="scope">
        <div className="scope-header">
          <div className="section-label">Global Reach</div>
          <h2>Where the stories are</h2>
        </div>
        <div className="scope-regions">
          {[
            { name: 'Koreans from the North', focus: 'Founding Focus', text: "Stories of families torn apart and reunited, of children who carried music across borders, of mothers who walked through winter for their children's freedom — and the courage it takes to begin again in an unfamiliar world." },
            { name: 'Eastern Europe', focus: 'Active Documentation', text: 'Families sheltering together beneath shelling, grandparents who refused to leave, communities rebuilding from rubble — stories of resilience, solidarity, and the fierce determination to preserve home and identity.' },
            { name: 'Middle East & Central Asia', focus: 'Expanding Coverage', text: 'Teachers who kept schools open in basements, fathers who carried libraries across borders, women who built new lives in foreign cities — the ingenuity, faith, and quiet heroism of people who refuse to let war define them.' },
            { name: 'The Americas', focus: 'In Development', text: "Migrants who crossed continents carrying their children's drawings, families who found community in unfamiliar cities, and the bonds forged between strangers on journeys no one should have to make alone." },
            { name: 'Asia Pacific', focus: 'In Development', text: 'Fishermen who became rescuers, communities that sheltered strangers, and the stories of people who crossed seas and mountains seeking safety — carrying with them the traditions, songs, and hopes of home.' },
          ].map((region, i) => (
            <div className="region-card fade-up" key={i}>
              <div className="region-name">{region.name}</div>
              <div className="region-focus">{region.focus}</div>
              <p>{region.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="technology" id="technology">
        <div className="tech-grid">
          <div className="tech-content">
            <div className="section-label">Technology &amp; Scale</div>
            <h2>Built for truth<br />at <em>scale</em></h2>
            <p>
              Our ambition is not a single film but hundreds — an entire library of animated testimony spanning
              continents and decades. Achieving this demands infrastructure that traditional studios cannot offer.
            </p>
          </div>
          <div className="tech-features">
            {[
              { title: 'Blockchain Evidence Chain', text: 'Every testimony, document, and media file is hashed and stored on a distributed ledger, creating a tamper-proof chain of custody admissible in international courts.' },
              { title: 'AI-Assisted Animation Pipeline', text: 'Generative AI accelerates storyboarding, background rendering, and motion workflows, enabling a distributed team to produce high-quality animation at a pace impossible by conventional means.' },
              { title: 'Distributed Production Model', text: 'A global network of volunteers, interns, and studio professionals collaborate through secure cloud pipelines — conducting interviews, translating testimony, producing animation, and managing distribution simultaneously across time zones.' },
            ].map((feature, i) => (
              <div className="tech-feature fade-up" key={i}>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="support">
        <div className="cta-inner">
          <div className="section-label">Join the Work</div>
          <h2>These stories will not<br />tell <em>themselves</em></h2>
          <p>
            Every film requires funding, expertise, and time. Whether you are a donor, a filmmaker,
            a legal professional, or someone who believes documented truth is the precondition of justice —
            there is a role for you here.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn-primary">Make a Donation</a>
            <a href="#" className="btn-outline">Volunteer With Us</a>
            <a href="#" className="btn-outline">Partner or Distribute</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-name">
              <img src={footerLogo} alt="Zeugnis38Films" className="footer-logo-img" />
            </div>
            <p>
              A human rights animation studio transforming refugee testimonies into films
              and immutable evidence. Every frame a record. Every story a case for justice.
            </p>
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <a href="#">About</a><a href="#">Our Team</a><a href="#">Methodology</a>
            <a href="#">Finances</a><a href="#">Careers</a>
          </div>
          <div className="footer-col">
            <h4>Films</h4>
            <a href="#">All Films</a><a href="#">Koreans from the North</a><a href="#">Eastern Europe</a>
            <a href="#">Middle East &amp; Central Asia</a><a href="#">Upcoming Projects</a>
          </div>
          <div className="footer-col">
            <h4>Get Involved</h4>
            <a href="#">Donate</a><a href="#">Volunteer</a><a href="#">Distribute</a>
            <a href="#">Press Inquiries</a><a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Zeugnis38Films. All rights reserved.</span>
          <span>Privacy Policy &middot; Terms of Use</span>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox active" onClick={closeLightbox}>
          <button className="lightbox-close">&times;</button>
          <img src={lightboxImg} alt="" />
          <div className="lightbox-caption"><p>{lightboxCaption}</p></div>
        </div>
      )}
    </>
  )
}

export default App
