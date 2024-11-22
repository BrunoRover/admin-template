import { MoonIcon, SunIcon } from "../icons/icons";

interface ButtonThemeProps {
  theme?: string;
  changeTheme?: () => void;
}

const ButtonTheme = (props: ButtonThemeProps) => {
  return props.theme === "dark" ? (
    <div
      onClick={props.changeTheme}
      className="hidden sm:flex items-center justify-start bg-gradient-to-r from-yellow-300 to-yellow-600 w-14 lg:w-24 h-8 rounded-full p-1 cursor-pointer"
    >
      <div className="flex items-center justify-center bg-gray-100 text-yellow-600 w-6 h-6 rounded-full">
        {SunIcon}
      </div>
      <div className="hidden lg:flex items-center ml-3 text-gray-100">
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.changeTheme}
      className="hidden sm:flex items-center justify-end bg-gradient-to-r from-gray-900 to-gray-500 w-14 lg:w-24 h-8 rounded-full p-1 cursor-pointer"
    >
      <div className="hidden lg:flex items-center mr-2 text-gray-100">
        <span>Escuro</span>
      </div>
      <div className="flex items-center justify-center bg-gray-700 text-yellow-300 w-6 h-6 rounded-full">
        {MoonIcon}
      </div>
    </div>
  );
};

export default ButtonTheme;
