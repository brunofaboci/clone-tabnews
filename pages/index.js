// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FabTech - Automacao com IA</title>
        <meta
          name="description"
          content="FabTech: automacao inteligente para empresas que querem acelerar processos com IA."
        />
      </Head>

      <div className="page">
        <header className="header">
          <div className="logo">FabTech</div>
          <nav className="nav">
            <a href="#servicos">Servicos</a>
            <a href="#sobre">Sobre</a>
            <a href="#diferenciais">Diferenciais</a>
            <Link href="/politica-de-privacidade">Privacidade</Link>
            <Link href="/termos-de-servico">Termos</Link>
            <a href="#contato" className="cta">
              Fale com a gente
            </a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="hero-content">
              <p className="eyebrow">Automacao com IA para negocios reais</p>
              <h1>
                Processos mais rapidos, equipes mais leves e decisoes melhores
              </h1>
              <p className="lead">
                A FabTech desenha e implementa automacoes com IA para eliminar
                tarefas repetitivas, integrar sistemas e dar visibilidade
                operacional em tempo real.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contato">
                  Agendar diagnostico
                </a>
                <a className="button ghost" href="#servicos">
                  Ver solucoes
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong>+40%</strong>
                  <span>ganho de produtividade</span>
                </div>
                <div>
                  <strong>2-6 semanas</strong>
                  <span>para entregar MVP funcional</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>monitoramento e suporte</span>
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h3>Diagnostico inicial</h3>
              <p>
                Mapeamos fluxos, detectamos gargalos e entregamos um plano de
                automacao com IA.
              </p>
              <ul>
                <li>Mapeamento de processos</li>
                <li>Priorizacao por impacto</li>
                <li>Plano 30-60-90 dias</li>
              </ul>
              <a className="button primary" href="#contato">
                Solicitar avaliacao
              </a>
            </div>
          </section>

          <section id="servicos" className="section">
            <div className="section-header">
              <h2>Servicos</h2>
              <p>
                Solucoes sob medida para automatizar tarefas, integrar dados e
                escalar operacoes.
              </p>
            </div>
            <div className="grid">
              <div className="card">
                <h3>Automacao de processos</h3>
                <p>
                  Bots e fluxos inteligentes para reduzir tempo e erro humano.
                </p>
              </div>
              <div className="card">
                <h3>IA aplicada a atendimento</h3>
                <p>Assistentes e triagem automatica com integrações a CRM.</p>
              </div>
              <div className="card">
                <h3>Integracao de sistemas</h3>
                <p>Conectamos ERPs, CRMs e bases de dados com segurança.</p>
              </div>
              <div className="card">
                <h3>Analise e inteligencia</h3>
                <p>Dashboards e insights com dados limpos e em tempo real.</p>
              </div>
              <div className="card">
                <h3>Automacao financeira</h3>
                <p>
                  Conciliacoes, cobranca e rotinas contabeis mais eficientes.
                </p>
              </div>
              <div className="card">
                <h3>Treinamento e governanca</h3>
                <p>Acompanhamento, documentacao e boas praticas de IA.</p>
              </div>
            </div>
          </section>

          <section id="sobre" className="section alt">
            <div className="two-col">
              <div>
                <h2>Sobre a FabTech</h2>
                <p>
                  Somos uma empresa de tecnologia especializada em automacao com
                  inteligencia artificial. Entregamos solucoes praticas que
                  aumentam produtividade e reduzem custos operacionais.
                </p>
                <p>
                  Atuamos com servicos, varejo, industria e empresas que buscam
                  transformar operacoes com rapidez e controle.
                </p>
              </div>
              <div className="quote">
                <p>
                  &ldquo;A FabTech trouxe ganhos visiveis na operacao e reduziu
                  o tempo de atendimento em poucas semanas.&rdquo;
                </p>
                <span>Gestao de Operacoes</span>
              </div>
            </div>
          </section>

          <section id="diferenciais" className="section">
            <div className="section-header">
              <h2>Diferenciais</h2>
              <p>Execucao rapida, foco em resultado e suporte completo.</p>
            </div>
            <div className="grid">
              <div className="card">
                <h3>Time multidisciplinar</h3>
                <p>
                  Engenheiros, analistas e especialistas em IA no mesmo squad.
                </p>
              </div>
              <div className="card">
                <h3>Entrega em ciclos curtos</h3>
                <p>MVP funcional rapido com evolucao por sprints.</p>
              </div>
              <div className="card">
                <h3>Seguranca e conformidade</h3>
                <p>
                  Boas praticas, controle de acesso e rastreabilidade de dados.
                </p>
              </div>
            </div>
          </section>

          <section id="contato" className="section contact">
            <div className="contact-inner">
              <div>
                <h2>Vamos conversar</h2>
                <p>
                  Agende uma conversa inicial e receba um diagnostico rapido.
                </p>
              </div>
              <div className="contact-card">
                <p>FabTech</p>
                <p>(19) 98950-8042</p>
                <p>Mogi Guacu - Sao Paulo</p>
                <a className="button primary" href="tel:+5519989508042">
                  Ligar agora
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-left">
            <strong>FabTech</strong>
            <span>59.880.707 BRUNO EDUARDO FABOCI</span>
          </div>
          <div className="footer-right">
            <span>CNPJ: 59.880.707/0001-82</span>
            <span>
              Rua Francisco Arruda Melo, 07, Jardim America, Mogi Guacu / Sao
              Paulo - CEP 13848-014
            </span>
            <span>Telefone: (19) 98950-8042</span>
            <span>
              <Link href="/politica-de-privacidade">
                Politica de Privacidade
              </Link>
              {" | "}
              <Link href="/termos-de-servico">Termos de Servico</Link>
            </span>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        :root {
          --bg: #0f1216;
          --fg: #f5f7fb;
          --muted: #b8c1cc;
          --accent: #27d3a2;
          --accent-2: #3c8bff;
          --card: #151b22;
          --border: #273140;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "IBM Plex Sans", sans-serif;
          color: var(--fg);
          background: radial-gradient(circle at top, #1a2331 0%, var(--bg) 55%);
        }
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>

      <style jsx>{`
        .page {
          min-height: 100vh;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 64px;
        }
        .logo {
          font-family: "Space Grotesk", sans-serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.6px;
        }
        .nav {
          display: flex;
          gap: 22px;
          align-items: center;
          font-size: 15px;
          color: var(--muted);
        }
        .nav .cta {
          padding: 10px 16px;
          border: 1px solid var(--accent);
          border-radius: 999px;
          color: var(--fg);
        }
        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          padding: 64px;
        }
        .hero-content h1 {
          font-family: "Space Grotesk", sans-serif;
          font-size: 48px;
          margin: 8px 0 16px;
        }
        .lead {
          color: var(--muted);
          font-size: 18px;
          max-width: 560px;
        }
        .eyebrow {
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 2px;
          color: var(--muted);
        }
        .hero-actions {
          display: flex;
          gap: 12px;
          margin: 24px 0;
        }
        .button {
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 600;
          display: inline-block;
        }
        .primary {
          background: var(--accent);
          color: #0a0f14;
        }
        .ghost {
          border: 1px solid var(--border);
          background: transparent;
          color: var(--fg);
        }
        .hero-metrics {
          display: flex;
          gap: 24px;
          margin-top: 28px;
        }
        .hero-metrics strong {
          display: block;
          font-size: 20px;
        }
        .hero-metrics span {
          color: var(--muted);
          font-size: 14px;
        }
        .hero-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.4);
        }
        .hero-card ul {
          padding-left: 18px;
          color: var(--muted);
        }
        .section {
          padding: 64px;
        }
        .section.alt {
          background: #111824;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .section-header h2,
        .section h2 {
          font-family: "Space Grotesk", sans-serif;
          font-size: 32px;
          margin: 0 0 8px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 24px;
        }
        .card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
          color: var(--muted);
        }
        .card h3 {
          color: var(--fg);
        }
        .two-col {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          align-items: center;
        }
        .quote {
          background: #141f2d;
          border-left: 4px solid var(--accent-2);
          padding: 20px;
          border-radius: 12px;
          color: var(--muted);
        }
        .contact {
          background: linear-gradient(120deg, #0f1216 0%, #121b27 60%);
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
        }
        .contact-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px;
        }
        .footer {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 16px;
          padding: 24px 64px;
          font-size: 14px;
          color: var(--muted);
          border-top: 1px solid var(--border);
        }
        .footer-left strong {
          display: block;
          color: var(--fg);
          font-size: 16px;
          margin-bottom: 6px;
        }
        .footer-right {
          display: grid;
          gap: 6px;
        }

        @media (max-width: 960px) {
          .header,
          .hero,
          .section,
          .footer {
            padding: 24px;
          }
          .hero,
          .grid,
          .two-col,
          .contact-inner,
          .footer {
            grid-template-columns: 1fr;
          }
          .hero-content h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </>
  );
}
