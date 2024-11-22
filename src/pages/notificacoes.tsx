import useAppData from "../data/hooks/useAppDate";
import Layout from "../components/template/Layout";

export default function Notificacoes() {
  const { changeTheme } = useAppData();
  return (
    <div>
      <Layout
        titulo={"Notificações"}
        subtitulo="Aqui você ira gerenciar suas notificações "
      >
        <h3>conteudo</h3>
        <button onClick={changeTheme}>cl</button>
      </Layout>
    </div>
  );
}
