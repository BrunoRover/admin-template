import useAuth from "@/data/hooks/useAuth";
import { BellIcon, HomeIcon, LogoutIcon, SetIcon } from "../icons/icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  const { logout } = useAuth();
  return (
    <div>
      <aside className="flex flex-col h-full bg-gray-200 text-gray-700 dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 h-20 w-20">
          <Logo />
        </div>
        <ul className="flex-grow flex flex-col">
          <MenuItem url="/" text="Inicio" icon={HomeIcon} />
          <MenuItem url="/ajustes" text="Ajustes" icon={SetIcon} />
          <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon} />
        </ul>
        <ul>
          <MenuItem onclick={logout} text="Sair" icon={LogoutIcon} />
        </ul>
      </aside>
    </div>
  );
}
