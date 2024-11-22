import useAppData from "@/data/hooks/useAppDate";
import ButtonTheme from "./ButtonTheme";
import Title from "./Title";

interface HeaderProps {
  titulo: string;
  subtitulo: string;
}

const Header = (props: HeaderProps) => {
  const { theme, changeTheme } = useAppData();
  return (
    <div className="flex">
      <Title titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className="flex flex-grow justify-end">
        <ButtonTheme theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
};

export default Header;
