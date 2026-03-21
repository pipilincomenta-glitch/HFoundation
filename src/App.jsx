import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, ArrowUpRight, ShieldCheck, TrendingUp, Globe } from 'lucide-react';
import logoHF from './assets/logoHF.png';

const Navbar = () => (
  <nav>
    <div className="container nav-content">
      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={logoHF} 
        alt="High Foundation" 
        className="logo" 
        style={{ height: '32px' }}
      />
      <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', letterSpacing: '0.1em', opacity: 0.8 }}>
        <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>VISIÓN</a>
        <a href="#social" style={{ color: 'white', textDecoration: 'none' }}>REDES</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="hero" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.5em', opacity: 0.5, textTransform: 'uppercase' }}>Inversiones de Elite</span>
        <h1 className="hero-text title-gradient" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          High Foundation<br />
          <span style={{ fontStyle: 'italic', opacity: 0.5 }}>Estrategia Global</span>
        </h1>
        <p className="description" style={{ marginBottom: '3rem' }}>
          Somos una firma enfocada en la excelencia empresarial y el crecimiento estratégico. 
          Transformamos capital en legado a través de inversiones inteligentes en mercados dinámicos.
        </p>
        <a href="#about" className="btn-primary">Explorar Visión <ArrowUpRight size={18} style={{ verticalAlign: 'middle', marginLeft: '5px' }} /></a>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section id="about" style={{ paddingTop: '4rem' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <motion.div 
          whileHover={{ y: -10 }}
          className="glass-panel" 
          style={{ padding: '3rem' }}
        >
          <ShieldCheck size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
          <h3>Seguridad & Formalidad</h3>
          <p style={{ opacity: 0.6, marginTop: '1rem', fontSize: '0.95rem' }}>Garantizamos la integridad de cada transacción bajo los más altos estándares legales y éticos del mercado internacional.</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -10 }}
          className="glass-panel" 
          style={{ padding: '3rem' }}
        >
          <TrendingUp size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
          <h3>Impacto Estratégico</h3>
          <p style={{ opacity: 0.6, marginTop: '1rem', fontSize: '0.95rem' }}>Detección proactiva de oportunidades emergentes diseñadas para maximizar el valor de nuestros socios de negocio.</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="glass-panel" 
          style={{ padding: '3rem' }}
        >
          <Globe size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
          <h3>Alcance Ilimitado</h3>
          <p style={{ opacity: 0.6, marginTop: '1rem', fontSize: '0.95rem' }}>Presencia en los principales centros financieros del mundo, conectando visiones con el capital adecuado.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Socials = () => (
  <section id="social" style={{ paddingBottom: '10rem' }}>
    <div className="container">
      <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Conecte con High Foundation</h2>
        <p style={{ opacity: 0.6, maxWidth: '500px', margin: '0 auto 2rem' }}>Síganos en nuestras plataformas oficiales para estar al tanto de las últimas tendencias en inversión y noticias corporativas.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="#" className="social-icon"><Instagram size={28} /></a>
          <a href="#" className="social-icon"><Linkedin size={28} /></a>
          <a href="#" className="social-icon"><Twitter size={28} /></a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 0', opacity: 0.5, fontSize: '0.8rem' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p>© 2026 High Foundation Investments. Todos los derechos reservados.</p>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <span>Privacidad</span>
        <span>Aviso Legal</span>
      </div>
    </div>
  </footer>
);

const Background = () => (
  <div className="bg-container">
    <div className="blob blob-1"></div>
    <div className="blob blob-2"></div>
    <div className="blob blob-3"></div>
  </div>
);

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Socials />
      </main>
      <Footer />
    </>
  );
}

export default App;
