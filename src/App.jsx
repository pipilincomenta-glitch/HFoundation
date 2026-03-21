import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin, Twitter, ArrowUpRight, ShieldCheck, TrendingUp, Globe, Languages } from 'lucide-react';
import logoHF from './assets/logoHF.png';

const translations = {
  es: {
    nav_vision: "VISIÓN",
    nav_social: "REDES",
    hero_top: "Inversiones de Elite",
    hero_title1: "High Foundation",
    hero_title2: "Estrategia Global",
    hero_desc: "Somos una firma enfocada en la excelencia empresarial y el crecimiento estratégico. Transformamos capital en legado a través de inversiones inteligentes en mercados dinámicos.",
    hero_btn: "Explorar Visión",
    feature1_title: "Seguridad & Formalidad",
    feature1_desc: "Garantizamos la integridad de cada transacción bajo los más altos estándares legales y éticos del mercado internacional.",
    feature2_title: "Impacto Estratégico",
    feature2_desc: "Detección proactiva de oportunidades emergentes diseñadas para maximizar el valor de nuestros socios de negocio.",
    feature3_title: "Alcance Ilimitado",
    feature3_desc: "Presencia en los principales centros financieros del mundo, conectando visiones con el capital adecuado.",
    social_title: "Conecte con High Foundation",
    social_desc: "Síganos en nuestras plataformas oficiales para estar al tanto de las últimas tendencias en inversión y noticias corporativas.",
    footer_copy: "© 2026 High Foundation Investments. Todos los derechos reservados.",
    footer_privacy: "Privacidad",
    footer_legal: "Aviso Legal"
  },
  en: {
    nav_vision: "VISION",
    nav_social: "SOCIAL",
    hero_top: "Elite Investments",
    hero_title1: "High Foundation",
    hero_title2: "Global Strategy",
    hero_desc: "We are a firm focused on business excellence and strategic growth. We transform capital into legacy through intelligent investments in dynamic markets.",
    hero_btn: "Explore Vision",
    feature1_title: "Security & Formality",
    feature1_desc: "We guarantee the integrity of every transaction under the highest legal and ethical standards of the international market.",
    feature2_title: "Strategic Impact",
    feature2_desc: "Proactive detection of emerging opportunities designed to maximize value for our business partners.",
    feature3_title: "Unlimited Reach",
    feature3_desc: "Presence in the world's leading financial centers, connecting visions with the right capital.",
    social_title: "Connect with High Foundation",
    social_desc: "Follow us on our official platforms to stay up to date with the latest investment trends and corporate news.",
    footer_copy: "© 2026 High Foundation Investments. All rights reserved.",
    footer_privacy: "Privacy",
    footer_legal: "Legal Notice"
  }
};

const Navbar = ({ lang, setLang, t }) => (
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
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', letterSpacing: '0.1em', opacity: 0.8 }}>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>{t('nav_vision')}</a>
          <a href="#social" style={{ color: 'white', textDecoration: 'none' }}>{t('nav_social')}</a>
        </div>
        
        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="glass-panel"
          style={{ 
            background: 'rgba(255,255,255,0.1)', 
            border: 'none', 
            borderRadius: '100px', 
            padding: '0.5rem 1rem', 
            color: 'white', 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            fontWeight: '600',
            letterSpacing: '0.05em'
          }}
        >
          <Languages size={14} />
          {lang.toUpperCase()}
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ t, lang }) => (
  <section id="hero" style={{ paddingTop: '12rem', paddingBottom: '6rem' }}>
    <div className="container">
      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.5em', opacity: 0.5, textTransform: 'uppercase' }}>{t('hero_top')}</span>
          <h1 className="hero-text title-gradient" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            {t('hero_title1')}<br />
            <span style={{ fontStyle: 'italic', opacity: 0.5 }}>{t('hero_title2')}</span>
          </h1>
          <p className="description" style={{ marginBottom: '3rem' }}>
            {t('hero_desc')}
          </p>
          <a href="#about" className="btn-primary">
            {t('hero_btn')} <ArrowUpRight size={18} style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  </section>
);

const Features = ({ t, lang }) => (
  <section id="about" style={{ paddingTop: '4rem' }}>
    <div className="container">
      <AnimatePresence mode="wait">
        <motion.div 
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
        >
          <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '3rem' }}>
            <ShieldCheck size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
            <h3>{t('feature1_title')}</h3>
            <p style={{ opacity: 0.6, marginTop: '1rem', fontSize: '0.95rem' }}>{t('feature1_desc')}</p>
          </motion.div>
          
          <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '3rem' }}>
            <TrendingUp size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
            <h3>{t('feature2_title')}</h3>
            <p style={{ opacity: 0.6, marginTop: '1rem', fontSize: '0.95rem' }}>{t('feature2_desc')}</p>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '3rem' }}>
            <Globe size={40} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
            <h3>{t('feature3_title')}</h3>
            <p style={{ opacity: 0.6, marginTop: '1rem', fontSize: '0.95rem' }}>{t('feature3_desc')}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  </section>
);

const Socials = ({ t, lang }) => (
  <section id="social" style={{ paddingBottom: '10rem' }}>
    <div className="container" id="social-content">
      <AnimatePresence mode="wait">
        <motion.div 
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="glass-panel" 
          style={{ padding: '4rem', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t('social_title')}</h2>
          <p style={{ opacity: 0.6, maxWidth: '500px', margin: '0 auto 2rem' }}>{t('social_desc')}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="#" className="social-icon"><Instagram size={28} /></a>
            <a href="#" className="social-icon"><Linkedin size={28} /></a>
            <a href="#" className="social-icon"><Twitter size={28} /></a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </section>
);

const Footer = ({ t }) => (
  <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 0', opacity: 0.5, fontSize: '0.8rem' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p>{t('footer_copy')}</p>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <span>{t('footer_privacy')}</span>
        <span>{t('footer_legal')}</span>
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
  const [lang, setLang] = useState('es');

  const t = (key) => translations[lang][key] || key;

  return (
    <>
      <Background />
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} lang={lang} />
        <Features t={t} lang={lang} />
        <Socials t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </>
  );
}

export default App;
