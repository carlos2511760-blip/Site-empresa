import React, { useState, useEffect } from 'react'
import { 
  Building2, 
  Users2, 
  BarChart3, 
  Globe2, 
  ArrowRight, 
  ShieldCheck, 
  Handshake, 
  Mail,
  Zap,
  Target
} from 'lucide-react'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            Próximo<span>Amor</span> <small style={{fontSize: '0.6rem', marginLeft: '4px', verticalAlign: 'middle', background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px', color: '#64748b'}}>EMPRESAS</small>
          </div>
          <div className="nav-links">
            <a href="#solucoes">Soluções</a>
            <a href="#impacto">Impacto</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#contato" className="btn btn-primary" style={{padding: '0.5rem 1.5rem'}}>Falar com consultor</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content animate-up">
            <h1>Sua empresa pode <span>mudar vidas</span> hoje.</h1>
            <p>Conectamos grandes marcas a causas reais. Implemente programas de ESG e voluntariado corporativo com resultados mensuráveis e impacto direto.</p>
            <div className="hero-btns">
              <a href="#contato" className="btn btn-primary">Começar agora <ArrowRight size={20} /></a>
              <a href="#solucoes" className="btn btn-outline">Ver nossas soluções</a>
            </div>
          </div>
        </div>
      </header>

      {/* Partners / Logos Section */}
      <section style={{padding: '50px 0', background: 'white', borderY: '1px solid #f1f5f9'}}>
        <div className="container">
          <p style={{textAlign: 'center', color: 'var(--text-gray)', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px'}}>Empresas que confiam em nós</p>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', opacity: 0.5, filter: 'grayscale(1)', flexWrap: 'wrap', gap: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 700}}><Building2 /> TechGlobal</div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 700}}><ShieldCheck /> SecureBank</div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 700}}><Handshake /> UnitedConsult</div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 700}}><Zap /> EnergyCo</div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes">
        <div className="container">
          <div className="section-header">
            <h2>Soluções completas para ESG</h2>
            <p>Criamos pontes entre o seu investimento social e as comunidades que mais precisam, garantindo transparência e engajamento.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card glass">
              <div className="service-icon">
                <Users2 size={32} />
              </div>
              <h3>Voluntariado Corporativo</h3>
              <p>Programas estruturados para engajar seus colaboradores em ações presenciais ou remotas de alto impacto.</p>
            </div>
            
            <div className="service-card glass">
              <div className="service-icon">
                <BarChart3 size={32} />
              </div>
              <h3>Impacto Mensurável</h3>
              <p>Relatórios detalhados com indicadores de performance social para alimentar seus dashboards de ESG e sustentabilidade.</p>
            </div>
            
            <div className="service-card glass">
              <div className="service-icon">
                <Globe2 size={32} />
              </div>
              <h3>Projetos Customizados</h3>
              <p>Desenvolvemos ações exclusivas que conectam os valores da sua marca às necessidades urgentes da sociedade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h2>+500</h2>
              <p>Empresas Parceiras</p>
            </div>
            <div className="stat-item">
              <h2>R$ 2M+</h2>
              <p>Investimento Gerado</p>
            </div>
            <div className="stat-item">
              <h2>100k+</h2>
              <p>Vidas Impactadas</p>
            </div>
            <div className="stat-item">
              <h2>150</h2>
              <p>Cidades Atendidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" style={{background: 'white'}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center'}}>
            <div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team" style={{width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}} />
            </div>
            <div>
              <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)'}}>Por que ser um parceiro corporativo?</h2>
              
              <div style={{display: 'flex', gap: '1.5rem', marginBottom: '2rem'}}>
                <div style={{color: 'var(--accent)', flexShrink: 0}}><Target size={28} /></div>
                <div>
                  <h4 style={{marginBottom: '0.5rem'}}>Atração e Retenção de Talentos</h4>
                  <p style={{color: 'var(--text-gray)'}}>Novas gerações buscam empresas com propósito. O voluntariado aumenta o orgulho de pertencer em até 70%.</p>
                </div>
              </div>

              <div style={{display: 'flex', gap: '1.5rem', marginBottom: '2rem'}}>
                <div style={{color: 'var(--accent)', flexShrink: 0}}><Zap size={28} /></div>
                <div>
                  <h4 style={{marginBottom: '0.5rem'}}>Desenvolvimento de Lideranças</h4>
                  <p style={{color: 'var(--text-gray)'}}>Ações sociais estimulam soft skills como empatia, resolução de problemas e trabalho em equipe.</p>
                </div>
              </div>

              <div style={{display: 'flex', gap: '1.5rem'}}>
                <div style={{color: 'var(--accent)', flexShrink: 0}}><ShieldCheck size={28} /></div>
                <div>
                  <h4 style={{marginBottom: '0.5rem'}}>Fortalecimento de Marca</h4>
                  <p style={{color: 'var(--text-gray)'}}>Sua empresa reconhecida como agente de transformação social ativa e responsável.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato">
        <div className="container">
          <div className="cta-banner">
            <h2>Pronto para levar impacto à sua empresa?</h2>
            <p>Agende uma conversa com nossos especialistas em impacto social e descubra como podemos criar um projeto sob medida para sua organização.</p>
            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
              <a href="mailto:parcerias@proximoamor.com" className="btn btn-white"><Mail size={20} /> Falar conosco</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{padding: '4rem 0', background: '#0F172A', color: 'white'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem', marginBottom: '2rem'}}>
            <div className="logo" style={{color: 'white'}}>
              Próximo<span>Amor</span> <small style={{background: 'rgba(255,255,255,0.1)', border: 'none'}}>EMPRESAS</small>
            </div>
            <div style={{display: 'flex', gap: '2rem'}}>
              <a href="#" style={{color: 'white', textDecoration: 'none', opacity: 0.7}}>Política de Privacidade</a>
              <a href="#" style={{color: 'white', textDecoration: 'none', opacity: 0.7}}>Termos de Uso</a>
            </div>
          </div>
          <p style={{textAlign: 'center', opacity: 0.5, fontSize: '0.9rem'}}>© 2026 Próximo Amor Institucional. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
