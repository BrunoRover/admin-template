import useAppData from "@/data/hooks/useAppDate";
import ButtonTheme from "./ButtonTheme";
import Title from "./Title";
import IconUser from "./IconUser";

interface HeaderProps {
  titulo: string;
  subtitulo: string;
}

const Header = (props: HeaderProps) => {
  const { theme, changeTheme } = useAppData();
  return (
    <div className="flex">
      <Title titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className="flex flex-grow justify-end items-center">
        <ButtonTheme theme={theme} changeTheme={changeTheme} />
        <IconUser classname="ml-3" />
      </div>
    </div>
  );
};

export default Header;
