import { BellIcon, HomeIcon, SetIcon } from "../icons/icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <div>
      <aside>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 h-20 w-20">
          <Logo />
        </div>
        <ul>
          <MenuItem url="/" text="Inicio" icon={HomeIcon} />
          <MenuItem url="/ajustes" text="Ajustes" icon={SetIcon} />
          <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon} />
        </ul>
      </aside>
    </div>
  );
}
