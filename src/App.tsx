import { useEffect, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'

const mission = 'Rideau Neural Labs helps Canadian organizations adopt AI without losing control.'

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Rideau Neural Labs | Practical AI for Canadian organizations', description: mission },
  '/work': { title: 'Services and AI solutions | Rideau Neural Labs', description: 'Responsible AI adoption, workflow automation, knowledge assistants, training, data tools, and practical software delivery.' },
  '/about': { title: 'About | Rideau Neural Labs', description: 'An Ottawa-based applied AI practice built for organizations where trust, evidence, and accountability matter.' },
  '/contact': { title: 'Contact | Rideau Neural Labs', description: 'Request a 30-minute scoping conversation with Rideau Neural Labs in Ottawa, Ontario.' },
}

const services = [
  ['01', 'AI consulting', 'Choose useful, defensible applications of AI. Define owners, safeguards, and a practical path from pilot to operations.'],
  ['02', 'Workflow automation', 'Reduce repetitive hand-offs and administration while keeping approvals and important decisions with people.'],
  ['03', 'Custom AI assistants', 'Build grounded assistants over trusted documents, with clear sources, access rules, and refusal when evidence is weak.'],
  ['04', 'AI training and workshops', 'Give leaders and teams the shared language, practical skills, and operating rules needed to use AI responsibly.'],
  ['05', 'Data and reporting tools', 'Turn fragmented data into dependable reporting, clear measures, and tools teams can maintain.'],
  ['06', 'Web and portal development', 'Create focused internal tools and public-facing portals that fit existing work instead of adding another burden.'],
]

const principles = [
  ['Business first', 'Start with the work, the people, and the constraint—not a model demo.'],
  ['Responsible by design', 'Set boundaries for privacy, security, evidence, and human accountability before launch.'],
  ['Capability stays with you', 'Train the people who will operate, review, and improve the solution.'],
  ['Disciplined delivery', 'Bring engineering and project-management rigour to discovery, build, and handover.'],
  ['Canadian support', 'Work with an Ottawa-based partner who understands Canadian operating environments.'],
]

function Meta() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const meta = pageMeta[pathname] ?? pageMeta['/']
    const canonicalPath = pathname === '/' ? '/' : `${pathname}/`
    const canonicalUrl = `https://rideauneurallabs.com${canonicalPath}`
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Rideau Neural Labs home">
      <span className="brand__rideau">Rideau</span>
      <span className="brand__labs">Neural Labs</span>
    </Link>
  )
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell nav-bar">
          <Brand />
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              <li><NavLink to="/work">Work</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div><Brand /><p className="footer-location">Ottawa, Ontario, Canada</p></div>
          <p className="footer-mission">{mission}</p>
          <div className="footer-contact">
            <a href="mailto:info@rideauneurallabs.com">info@rideauneurallabs.com</a>
            <p>This website does not collect or store visitor data.</p>
          </div>
        </div>
        <div className="shell footer-base">
          <span>© {new Date().getFullYear()} Rideau Neural Labs</span>
          <span>Applied AI · Automation · Intelligent software</span>
        </div>
      </footer>
    </>
  )
}

function Arrow() { return <span aria-hidden="true">→</span> }

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__shade" />
        <div className="shell hero__content">
          <p className="eyebrow eyebrow--light">Applied AI · Ottawa</p>
          <h1 id="hero-title">AI that your organization can defend.</h1>
          <p className="hero__copy">Practical AI solutions for real-world organizations. We help teams use AI, automation, and data-driven tools responsibly—without losing clarity or control.</p>
          <div className="button-row">
            <Link className="button button--light" to="/work#services">Explore services <Arrow /></Link>
            <Link className="button button--outline-light" to="/contact">Contact us</Link>
          </div>
        </div>
        <p className="hero__credit">An original, AI-generated interpretation of the Rideau Canal at dawn.</p>
      </section>

      <section className="section section--intro">
        <div className="narrow intro-grid">
          <p className="eyebrow">What we help you do</p>
          <div><h2>Make AI useful. Keep people accountable.</h2><p className="lede">We work with businesses, education, public-sector, and community organizations that want better tools without giving up good judgement.</p></div>
        </div>
      </section>

      <section className="section section--white" id="services">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Services</p><h2>Focused help from first question to handover.</h2></div>
            <Link className="text-link" to="/work">How we work <Arrow /></Link>
          </div>
          <div className="service-grid">
            {services.map(([number, title, copy]) => <article className="service-card" key={title}><span className="service-card__number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div className="split__heading"><p className="eyebrow">Why Rideau Neural Labs</p><h2>Measured by what works in your organization.</h2><p>Useful systems have clear sources, named owners, and a way to stop. We design for all three.</p></div>
          <ol className="principle-list">
            {principles.map(([title, copy], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section section--navy">
        <div className="shell evidence-grid">
          <div><p className="eyebrow eyebrow--light">Training and project work</p><h2>Build confidence alongside capability.</h2></div>
          <div className="evidence-card"><p className="eyebrow eyebrow--light">Workshops</p><h3>Shared rules for responsible use</h3><p>Practical sessions for leaders and staff, grounded in the tools and decisions they face now.</p><Link to="/work#training">Training options <Arrow /></Link></div>
          <div className="evidence-card"><p className="eyebrow eyebrow--light">Project patterns</p><h3>Assistants, workflows, and reporting</h3><p>See representative ways organizations can reduce document search, manual intake, and reporting effort.</p><Link to="/work#projects">View examples <Arrow /></Link></div>
        </div>
      </section>
      <Callout />
    </>
  )
}

function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <header className="page-intro"><div className="narrow"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{copy}</p></div></header>
}

function Work() {
  const projectPatterns = [
    ['Policy knowledge assistant', 'A source-grounded search and answer tool for policies, procedures, and reports. It cites evidence and refuses unsupported answers.'],
    ['Structured intake workflow', 'A guided intake that organizes requests, checks required information, and routes exceptions to a named person.'],
    ['Operational reporting workspace', 'A maintainable portal that brings scattered inputs into consistent measures and decision-ready views.'],
  ]

  return (
    <>
      <PageIntro eyebrow="Work" title="AI work with a clear owner." copy="Short, governed engagements that solve a defined problem, strengthen internal capability, and leave your organization in control." />
      <section className="section section--white section--flush">
        <div className="shell offer-grid">
          <article className="offer-card"><p className="eyebrow">Offer 01</p><h2>Responsible AI adoption</h2><p>In six to ten weeks, we map current use, select two practical opportunities, and define simple operating rules for intake, ownership, review, and stopping.</p><ul className="plain-list"><li>Current-state and risk review</li><li>Use-case prioritization</li><li>Operating model and safeguards</li><li>Leader and staff workshop</li></ul></article>
          <article className="offer-card"><p className="eyebrow">Offer 02</p><h2>Grounded knowledge assistant</h2><p>We create question-and-answer tools over your trusted documents. Answers show their sources. Weak evidence produces a refusal, not a confident guess.</p><ul className="plain-list"><li>Document and access review</li><li>Source-grounded responses</li><li>Evaluation and refusal rules</li><li>Handover and quality review</li></ul></article>
        </div>
      </section>

      <section className="section" id="services">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Capabilities</p><h2>Services that support the engagement.</h2></div></div>
          <div className="compact-service-grid">{services.map(([number, title, copy]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="narrow"><p className="eyebrow eyebrow--light">The engagement</p><h2>Four steps. No black box.</h2><ol className="steps"><li><span>01</span><div><h3>Discover</h3><p>Understand the process, sources, people, and constraints.</p></div></li><li><span>02</span><div><h3>Choose</h3><p>Agree on the work worth doing now. Park the rest.</p></div></li><li><span>03</span><div><h3>Build and test</h3><p>Measure usefulness, errors, and edge cases with the people who know the work.</p></div></li><li><span>04</span><div><h3>Hand over</h3><p>Deliver the solution, operating rules, training, and a way to turn it off.</p></div></li></ol></div>
      </section>

      <section className="section section--white" id="training">
        <div className="shell split split--bordered"><div className="split__heading"><p className="eyebrow">Training and workshops</p><h2>Help teams use AI with good judgement.</h2></div><div><p className="lede">Sessions are tailored to your policies, tools, risks, and roles—not built around generic prompts.</p><ul className="check-list"><li>AI foundations for leaders and boards</li><li>Responsible everyday use for staff</li><li>Use-case and risk working sessions</li><li>Knowledge-assistant owner training</li></ul></div></div>
      </section>

      <section className="section" id="projects">
        <div className="shell"><div className="section-heading"><div><p className="eyebrow">Illustrative project patterns</p><h2>Concrete applications. Claims kept honest.</h2><p>These are representative use cases, not claims about named client work.</p></div></div><div className="project-grid">{projectPatterns.map(([title, copy], index) => <article className="project-card" key={title}><span>Pattern 0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
      </section>

      <section className="section section--white"><div className="narrow audience"><p className="eyebrow">Who this is for</p><h2>Organizations that need useful AI—and defensible decisions.</h2><p>Crown corporations, government teams, education organizations, community organizations, hospitals, insurers, credit unions, and professional firms working through complex processes or large document collections.</p><Link className="button" to="/contact">Request a conversation <Arrow /></Link></div></section>
    </>
  )
}

function About() {
  return (
    <>
      <PageIntro eyebrow="About" title="Built in Ottawa for work that carries responsibility." copy="Rideau Neural Labs is an applied AI practice for Canadian organizations where trust, evidence, and accountability matter." />
      <section className="section section--white section--flush"><div className="narrow prose-grid"><p className="eyebrow">Who we are</p><div><h2>Practical experience across technology and delivery.</h2><p>Rideau Neural Labs is led by Sivas Premjeyanth, PhD, P.Eng., PMP. His work spans engineering, project management, technology delivery, and multi-stakeholder Canadian programs.</p><p>The practice focuses that experience on responsible AI adoption, automation, grounded knowledge systems, and the training needed to operate them well.</p></div></div></section>
      <section className="section"><div className="shell split"><div className="split__heading"><p className="eyebrow">Our method</p><h2>Evidence before confidence.</h2><p>Keep the sources. Make ownership visible. Test the failures, not only the demo.</p></div><ol className="method-list"><li><span>01</span><div><h3>Start with the operating reality.</h3><p>Understand who does the work, what they rely on, and where a wrong answer could cause harm.</p></div></li><li><span>02</span><div><h3>Build from trusted evidence.</h3><p>Use governed sources, explicit rules, and clear human review points.</p></div></li><li><span>03</span><div><h3>Leave control with the client.</h3><p>Document the system, train its owners, and make stopping or changing it straightforward.</p></div></li></ol></div></section>
      <section className="section section--navy values-band"><div className="shell"><p className="eyebrow eyebrow--light">Working principles</p><div className="value-grid"><p>Useful over impressive.</p><p>Clear over clever.</p><p>Owned over autonomous.</p><p>Evidence over confidence.</p></div></div></section>
      <Callout />
    </>
  )
}

function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="A practical first conversation." copy="Email us at info@rideauneurallabs.com or start with a 30-minute scoping conversation." />
      <section className="section section--white section--flush"><div className="shell contact-grid">
        <aside className="contact-details" aria-label="Contact details"><p className="eyebrow">Direct contact</p><h2>Ottawa, Ontario</h2><a href="mailto:info@rideauneurallabs.com">info@rideauneurallabs.com</a><p>Serving businesses, education, and community organizations from Canada’s capital.</p><div className="privacy-note"><strong>Your information stays yours.</strong><p>No visitor data is collected or stored by this website.</p></div></aside>
        <div className="contact-card"><p className="eyebrow">Start a conversation</p><h2>Bring the problem, not a polished brief.</h2><p>Share the process, document pile, or operational challenge you want to improve, along with any privacy, security, or capacity constraints.</p><a className="button" href="mailto:info@rideauneurallabs.com?subject=Rideau%20Neural%20Labs%20enquiry">Email Rideau Neural Labs <Arrow /></a><p className="contact-note">This link opens your default email application. The website does not collect or store visitor information.</p></div>
      </div></section>
    </>
  )
}

function Callout() {
  return <section className="section callout"><div className="narrow callout__inner"><p className="eyebrow">Start with the real constraint</p><h2>What work should be easier six months from now?</h2><p>Bring the process, document collection, or reporting burden. We will help frame the first sensible step.</p><Link className="button" to="/contact">Contact us <Arrow /></Link></div></section>
}

function NotFound() {
  return <section className="section not-found"><div className="narrow"><p className="eyebrow">404</p><h1>That page is not here.</h1><p>Return to the homepage or tell us what you were looking for.</p><div className="button-row"><Link className="button" to="/">Back to home</Link><Link className="button button--outline" to="/contact">Contact us</Link></div></div></section>
}

export default function App() {
  return <Layout><Meta /><Routes><Route path="/" element={<Home />} /><Route path="/work" element={<Work />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></Layout>
}
