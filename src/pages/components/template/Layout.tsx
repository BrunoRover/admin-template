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
    <div className="flex h-screen w-screen">
      <MenuLateral />
      <div className="flex flex-col w-full p-7 bg-gray-300">
        <Header titulo={props.titulo} subtitulo={props.subtitulo} />
        <Content>{props.children}</Content>
      </div>
    </div>
  );
};

export default Layout;
