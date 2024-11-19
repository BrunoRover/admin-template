import Header from "./Header";
import MenuLateral from "./MenuLateral";
import Content from "./Content";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div>
      <MenuLateral />
      <Header titulo={props.titulo} subtitulo={props.subtitulo} />
      <Content>{props.children}</Content>
    </div>
  );
};

export default Layout;
