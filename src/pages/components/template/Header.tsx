import Title from "./Title";

interface HeaderProps {
  titulo: string;
  subtitulo: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div>
      <Title titulo={props.titulo} subtitulo={props.subtitulo} />
    </div>
  );
};

export default Header;
