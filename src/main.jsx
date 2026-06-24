import { createRoot } from 'react-dom/client'
import { Building2, Cog, Factory, Route, Server, ShieldAlert } from 'lucide-react'
import landingSelector from './landing-selector.png'
import logo from './logo.png'
import technicalData from './technical-data.png'
import './styles.css'

const Icon = ({ name, size = 20 }) => {
  const paths = {
    bolt: <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />,
    chart: <><path d="M3 3v18h18" /><path d="m7 15 4-4 3 2 5-6" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    volume: <><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" /></>,
    compare: <><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" /><path d="M8 12h8M12 8v8" /></>,
    report: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    play: <path d="m9 6 8 6-8 6V6Z" />,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Header() {
  return <header className="site-header"><div className="nav-shell">
    <a className="brand" href="#top" aria-label="FloSelect home"><img src={logo} alt="FloSelect" style={{ width: 24, height: 24, objectFit: 'contain' }} /><span>Flo<span>Select</span></span><small>by Paramet Ltd</small></a>
    <nav aria-label="Main navigation"><a href="#features">Features</a><a href="#how-it-works">How It Works</a><a href="#reports">Reports</a><a href="#industries">Industries</a><a href="#demo">Demo</a></nav>
    <a className="button button-small" href="#demo">Book a Demo <Icon name="arrow" size={15} /></a>
  </div></header>
}

function CurveChart() { return <svg className="curve-chart" viewBox="0 0 430 170" role="img" aria-label="Fan performance curve chart"><defs><linearGradient id="curve" x1="0" x2="1"><stop stopColor="#74BF3C"/><stop offset="1" stopColor="#1A9342"/></linearGradient></defs><g className="chart-grid"><path d="M35 15v125M35 140h380M35 42h380M35 70h380M35 98h380M110 15v125M185 15v125M260 15v125M335 15v125" /></g><path className="curve-area" d="M42 35C112 40 148 49 202 72s95 40 207 43v25H42Z"/><path className="curve-line" d="M42 35C112 40 148 49 202 72s95 40 207 43"/><path className="curve-line second" d="M42 61c83 1 132 15 187 43 52 26 104 35 180 38"/><circle cx="218" cy="78" r="6" className="duty-dot"/><path className="dash-line" d="M218 78V140M35 78h183"/><text x="226" y="68">Duty point</text></svg> }

function DashboardMockup({ detailed = false }) {
  return <div className={`dashboard ${detailed ? 'dashboard-large' : ''}`}>
    <div className="dash-bar"><div className="dash-logo"><img src={logo} alt="" style={{ width: 13, height: 13, objectFit: 'contain' }} /> FloSelect</div><div className="dash-actions"><span /><span /><b /></div></div>
    {detailed && <div className="dash-tabs"><b>Selection</b><span>Curves</span><span>Acoustics</span><span>Reports</span></div>}
    <div className="dash-body"><aside className="duty-panel"><p className="eyebrow">PROJECT PARAMETERS</p><h3>Duty Point</h3><label>Airflow <strong>8,500 <em>m³/h</em></strong></label><label>Static pressure <strong>420 <em>Pa</em></strong></label><label>Temperature <strong>20 <em>°C</em></strong></label><button className="find-button">Find matching fans <Icon name="arrow" size={16}/></button></aside>
      <section className="performance"><div className="panel-heading"><div><p className="eyebrow">PERFORMANCE</p><h3>Fan curves</h3></div><span className="live">● Live results</span></div><CurveChart /><div className="mini-legend"><span><i /> Selected range</span><span><i /> Duty point</span></div></section>
      {!detailed && <section className="selected-fan"><p className="eyebrow">RECOMMENDED</p><div className="fan-name"><span className="fan-symbol" /> <div><h3>AXC 630-4</h3><p>Axial flow fan</p></div></div><div className="fan-specs"><span>Efficiency <b>72.8%</b></span><span>Power <b>1.85 kW</b></span><span>Sound <b>68 dB(A)</b></span></div><button>View selection <Icon name="arrow" size={14}/></button></section>}
      {detailed && <section className="results"><div className="panel-heading"><div><p className="eyebrow">MATCHING FANS</p><h3>12 results</h3></div><span className="sort">Best match ▾</span></div>{['AXC 630-4','AXC 710-4','ECF 560'].map((fan, i) => <div className={`result-row ${i === 0 ? 'selected' : ''}`} key={fan}><span className="fan-symbol"/><b>{fan}</b><span>{[72.8, 70.1, 69.4][i]}% eff.</span><span>{[1.85, 2.15, 1.72][i]} kW</span><Icon name="arrow" size={15}/></div>)}</section>}
    </div>
  </div>
}

function Hero() { return <section className="hero" id="top"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="container hero-grid"><div className="hero-copy"><p className="kicker"><span/> ENGINEERED FOR BETTER SELECTIONS</p><h1>Intelligent Fan Selection.<br/><em>Simplified.</em></h1><p className="hero-text">FloSelect helps engineers, contractors and consultants find the right fan faster, with performance data, curves and reports in one streamlined platform.</p><div className="hero-actions"><a className="button" href="#demo">Book a Demo <Icon name="arrow" size={17}/></a><a className="button button-ghost" href="#how-it-works"><span className="play"><Icon name="play" size={13}/></span> Watch Overview</a></div><p className="trust"><Icon name="check" size={16}/> Built for HVAC, industrial ventilation, smoke control and specialist fan applications.</p></div><div className="hero-dashboard"><div className="dashboard-glow"/><img src={landingSelector} alt="FloSelect selector interface showing fan model results" style={{ display: 'block', width: '100%', border: '1px solid #344152', borderRadius: 9, boxShadow: '0 30px 70px #05080e99' }} /></div></div></section> }

const metrics = [['Faster','Selection'],['1000s','of Fan Configurations'],['Dynamic','Technical Reports'],['Cloud','Based Access']]
function MetricsStrip() { return <section className="metrics"><div className="container metrics-grid">{metrics.map(([number, label]) => <div className="metric" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></section> }
const features = [['bolt','Intelligent Selection Engine','Find the optimal fan from thousands of configurations using precise duty point matching.'],['chart','Performance Curves & Duty Points','Visualise fan performance instantly and assess every option with confidence.'],['database','Technical Data in One Place','Access dimensions, materials, motor data and certifications without switching tools.'],['volume','Acoustic Performance Data','Compare sound power levels across octave bands for clearer specification decisions.'],['compare','Product Comparison','Evaluate candidate fans side-by-side to identify the best fit for every application.'],['report','Exportable PDF Reports','Create polished, technical reports ready for clients, approvals and procurement.']]
function FeatureGrid() { return <section className="section features" id="features"><div className="container"><div className="section-heading"><p className="kicker green"><span/> PLATFORM CAPABILITIES</p><h2>Everything You Need to<br/> Select <em>With Confidence</em></h2><p>One connected workspace for selecting, reviewing and specifying fan equipment.</p></div><div className="feature-grid">{features.map(([icon,title,text]) => <article className="feature-card" key={title}><div className="feature-icon"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p><a href="#demo" aria-label={`Learn more about ${title}`}>Explore feature <Icon name="arrow" size={15}/></a></article>)}</div></div></section> }

function ProductDemo() { const steps=['Enter airflow and pressure requirements','Compare matching fan options','Review curves, acoustics and motor data','Export professional reports']; return <section className="section product-demo" id="how-it-works"><div className="container demo-grid"><div className="demo-copy"><p className="kicker green"><span/> A CLEARER WORKFLOW</p><h2>From duty point to<br/><em>final report</em></h2><p>FloSelect guides your team through the full selection process, making technical decisions faster and easier to validate.</p><ul>{steps.map(s => <li key={s}><span><Icon name="check" size={14}/></span>{s}</li>)}</ul><a href="#demo" className="text-link">See the selection workflow <Icon name="arrow" size={17}/></a></div><div className="demo-visual"><img src={technicalData} alt="FloSelect technical performance data, duty point, and motor information" style={{ display: 'block', width: '100%', border: '1px solid #344152', borderRadius: 9, boxShadow: '0 18px 50px #17283133' }} /></div></div></section> }

const industries=[
  { title: 'Commercial Buildings', Icon: Building2 },
  { title: 'Industrial Ventilation', Icon: Factory },
  { title: 'Data Centres', Icon: Server },
  { title: 'Smoke Control', Icon: ShieldAlert },
  { title: 'Tunnel Ventilation', Icon: Route },
  { title: 'Manufacturing Facilities', Icon: Cog },
]
function Industries() { return <section className="section industries" id="industries"><div className="container"><div className="section-heading centered"><p className="kicker green"><span/> BUILT FOR THE REAL WORLD</p><h2>Trusted Across <em>Fan Applications</em></h2></div><div className="industry-grid">{industries.map(({ title, Icon: IndustryIcon }) => <article className="industry" key={title}><span className="industry-icon" style={{ width: 48, height: 48, display: 'grid', placeItems: 'center', border: 'none', color: 'var(--color-primary)' }}><IndustryIcon size={31} strokeWidth={1.65} /></span><h3>{title}</h3><a href="#demo" aria-label={`Learn more about ${title}`}><Icon name="arrow" size={17}/></a></article>)}</div></div></section> }
function CTASection() { return <section className="cta" id="demo"><div className="cta-shape"/><div className="container cta-content"><p className="kicker"><span/> SEE WHAT'S POSSIBLE</p><h2>Ready to Transform<br/><em>Fan Selection?</em></h2><p>Give your team a faster, smarter way to select and specify fans.</p><div><a className="button" href="mailto:sales@paramet.co.uk?subject=FloSelect%20Demo%20Request">Book a Demo Today <Icon name="arrow" size={17}/></a><a className="button button-ghost" href="mailto:sales@paramet.co.uk?subject=FloSelect%20Trial%20Request">Request a Trial</a></div></div></section> }
function Footer() { return <footer><div className="container footer-inner"><a className="brand" href="#top"><img src={logo} alt="FloSelect" style={{ width: 19, height: 19, objectFit: 'contain' }} /><span>Flo<span>Select</span></span></a><p>FloSelect by Paramet Ltd</p><div className="footer-contact"><a href="mailto:sales@paramet.co.uk">sales@paramet.co.uk</a><a href="https://www.paramet.co.uk">www.paramet.co.uk</a><a className="linkedin" href="https://www.linkedin.com" aria-label="LinkedIn">in</a></div></div></footer> }
function App(){return <><Header/><main><Hero/><MetricsStrip/><FeatureGrid/><ProductDemo/><Industries/><CTASection/></main><Footer/></>}
createRoot(document.getElementById('root')).render(<App />)
