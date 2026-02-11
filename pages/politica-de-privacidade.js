import Head from "next/head";
import Link from "next/link";

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | FabTech</title>
        <meta
          name="description"
          content="Política de Privacidade da FabTech."
        />
      </Head>

      <main className="container">
        <h1>Política de Privacidade</h1>
        <p>Última atualização: 11 de fevereiro de 2026</p>

        <h2>1. Coleta de informações</h2>
        <p>
          Coletamos dados fornecidos por você em formulários de contato, como
          nome, email, telefone e informações relacionadas ao seu projeto.
        </p>

        <h2>2. Uso das informações</h2>
        <p>
          Utilizamos os dados para responder solicitações, elaborar propostas,
          melhorar nossos serviços e manter comunicação sobre soluções da
          FabTech.
        </p>

        <h2>3. Compartilhamento de dados</h2>
        <p>
          Não vendemos dados pessoais. O compartilhamento ocorre apenas quando
          necessário para execução de serviços, cumprimento legal ou proteção de
          direitos.
        </p>

        <h2>4. Armazenamento e segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger os dados
          contra acesso não autorizado, perda ou alteração indevida.
        </p>

        <h2>5. Direitos do titular</h2>
        <p>
          Você pode solicitar acesso, correção, exclusão ou portabilidade dos
          seus dados, observadas as obrigações legais aplicáveis.
        </p>

        <h2>6. Contato</h2>
        <p>
          Para dúvidas sobre privacidade, entre em contato com a FabTech pelos
          canais oficiais informados no site.
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
