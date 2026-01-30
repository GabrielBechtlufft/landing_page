import { useState } from "react";
import meiImg from "./assets/MEI-DvNVUEOG.png";
import pagamentosImg from "./assets/pagamentos.png";
import meImg from "./assets/me.jpeg";
import wallpaperImg from "./assets/wallpaper.png";
import demoVideo from "./assets/demostração.mp4";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("cnpj");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app-container">
      {/* Header / Hero */}
      <header className="hero-section">
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              GB Automation<span className="dot">.</span>
            </div>
            <div className="nav-links">
              <a href="#about">Sobre</a>
              <a href="#portfolio">Portfólio</a>
              <a href="#contact">Contato</a>
            </div>
          </nav>

          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Escale seu Negócio com{" "}
              <span className="gradient-text">Automação Inteligente</span>
            </h1>
            <p className="hero-subtitle">
              Transforme processos manuais em máquinas de eficiência com n8n.
            </p>
            <a href="#portfolio" className="btn-primary pulse">
              Explorar Projetos
            </a>
          </div>
        </div>
        <div className="hero-glow"></div>
      </header>

      {/* About Me */}
      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-text slide-in-left">
            <h2>Quem Sou Eu</h2>
            <p>
              Me chamo <strong>Gabriel Bechtlufft</strong>.
            </p>
            <p>
              Especialista em <strong>n8n</strong> e Jovem Aprendiz na{" "}
              <strong>Petrobras</strong> (Desenvolvimento de Sistemas).
            </p>
            <p>
              Crio soluções que conectam ferramentas, eliminam tarefas chatas e
              geram valor real.
            </p>
            <div className="badges">
              <span className="badge">N8N Expert</span>
              <span className="badge">Petrobras</span>
              <span className="badge">API Integration</span>
            </div>
          </div>
          <div className="about-image-container slide-in-right">
            <div className="image-wrapper">
              <img
                src={meImg}
                alt="Gabriel Bechtlufft"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section portfolio-section">
        <div className="container">
          <h2 className="section-title">Portfólio de Automações</h2>

          <div className="portfolio-tabs">
            <button
              className={`tab-btn ${activeTab === "cnpj" ? "active" : ""}`}
              onClick={() => setActiveTab("cnpj")}
            >
              Analisador CNPJ
            </button>
            <button
              className={`tab-btn ${activeTab === "payment" ? "active" : ""}`}
              onClick={() => setActiveTab("payment")}
            >
              Controle de Pagamentos
            </button>
            <button
              className={`tab-btn ${activeTab === "whatsapp" ? "active" : ""}`}
              onClick={() => setActiveTab("whatsapp")}
            >
              WhatsApp IA
            </button>
          </div>

          <div className="portfolio-content">
            {activeTab === "cnpj" && (
              <div className="project-card fade-in">
                <div className="project-info">
                  <h3>Verificador de MEI & Simples Nacional</h3>
                  <p>
                    Um workflow robusto que processa CNPJs a partir de uma
                    planilha. Ele consulta a API <strong>CNPJá</strong> para
                    analisar cada registro e retorna automaticamente as
                    informações fiscais, identificando se é MEI e se é optante
                    pelo Simples Nacional.
                  </p>
                  <ul className="project-features">
                    <li>📥 Leitura de Planilha</li>
                    <li>🔄 Integração API CNPJá</li>
                    <li>📊 Classificação Automática</li>
                  </ul>
                </div>
                <div className="project-image">
                  <img src={meiImg} alt="Workflow CNPJ MEI" />
                </div>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="project-card fade-in">
                <div className="project-info">
                  <h3>Cobrança Automática de Clientes</h3>
                  <p>
                    Sistema que monitora planilhas financeiras para identificar
                    pagamentos em atraso. O workflow verifica os prazos e envia
                    automaticamente e-mails personalizados de cobrança para os
                    clientes inadimplentes, garantindo melhor fluxo de caixa.
                  </p>
                  <ul className="project-features">
                    <li>📅 Monitoramento de Prazos</li>
                    <li>📧 Envio de E-mail Automático</li>
                    <li>💰 Gestão de Inadimplência</li>
                  </ul>
                </div>
                <div className="project-image">
                  <img src={pagamentosImg} alt="Workflow Pagamentos" />
                </div>
              </div>
            )}

            {activeTab === "whatsapp" && (
              <div className="project-card fade-in">
                <div className="project-info">
                  <h3>Atendimento Inteligente WhatsApp</h3>
                  <p>
                    Sistema de respostas automáticas para lanchonete usando
                    inteligência artificial via WhatsApp. Integra a{" "}
                    <strong>Uazapi API</strong> com <strong>OpenAI</strong> para
                    gerar respostas contextualizadas e naturais, automatizando o
                    atendimento ao cliente 24/7.
                  </p>
                  <ul className="project-features">
                    <li>🤖 IA OpenAI para Respostas</li>
                    <li>💬 Integração Uazapi WhatsApp</li>
                    <li>⚡ Atendimento 24/7 Automatizado</li>
                  </ul>
                  <button
                    onClick={() => setShowModal(true)}
                    className="btn-demo"
                  >
                    Ver Demonstração
                  </button>
                </div>
                <div className="project-image">
                  <img src={wallpaperImg} alt="WhatsApp IA Bot" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              ×
            </button>
            <video className="modal-video" controls autoPlay src={demoVideo}>
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <h2>Vamos automatizar o seu negócio?</h2>
          <p>
            Entre em contato e descubra como o n8n pode transformar sua empresa.
          </p>
          <a
            href="https://wa.me/5511915069150"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Fale Comigo
          </a>
          <div className="footer-credits">© 2026 Gabriel Bechtlufft.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
