import Head from "next/head";
import Link from "next/link";

export default function TermosDeServico() {
  return (
    <>
      <Head>
        <title>Termos de Serviço | FabTech</title>
        <meta name="description" content="Termos de Serviço da FabTech." />
      </Head>

      <main className="container">
        <h1>Termos de Serviço</h1>
        <p>Última atualização: 11 de fevereiro de 2026</p>

        <h2>1. Objeto</h2>
        <p>
          Estes termos regulam o uso do site da FabTech e a contratação de
          serviços de automação e tecnologia.
        </p>

        <h2>2. Uso do site</h2>
        <p>
          O usuário se compromete a utilizar este site de forma lícita, sem
          violar direitos de terceiros ou comprometer a segurança da plataforma.
        </p>

        <h2>3. Propriedade intelectual</h2>
        <p>
          Conteúdos, marcas, textos e materiais disponibilizados neste site são
          protegidos por direitos de propriedade intelectual e não podem ser
          reproduzidos sem autorização.
        </p>

        <h2>4. Limitação de responsabilidade</h2>
        <p>
          A FabTech não se responsabiliza por indisponibilidades temporárias,
          falhas externas de conexão ou uso inadequado do site por terceiros.
        </p>

        <h2>5. Alterações dos termos</h2>
        <p>
          Estes termos podem ser atualizados a qualquer momento. A versão
          vigente será sempre publicada nesta página.
        </p>

        <h2>6. Contato</h2>
        <p>
          Dúvidas sobre estes termos podem ser enviadas pelos canais oficiais
          informados na página inicial.
        </p>

        <p>
          <Link href="/">Voltar para a página inicial</Link>
        </p>
      </main>

      <style jsx>{`
        .container {
          max-width: 860px;
          margin: 0 auto;
          padding: 40px 24px 56px;
          color: #f5f7fb;
        }
        :global(body) {
          margin: 0;
          font-family: "IBM Plex Sans", sans-serif;
          background: #0f1216;
        }
        h1,
        h2 {
          font-family: "Space Grotesk", sans-serif;
          line-height: 1.2;
        }
        h1 {
          font-size: 40px;
          margin: 0 0 12px;
        }
        h2 {
          margin-top: 32px;
          font-size: 24px;
        }
        p {
          color: #c8d0db;
          line-height: 1.6;
        }
        a {
          color: #27d3a2;
        }
      `}</style>
    </>
  );
}
