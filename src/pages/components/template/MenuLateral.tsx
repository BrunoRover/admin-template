import { BellIcon, HomeIcon, SetIcon } from "../icons/icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <div>
      <aside>
        <ul>
          <MenuItem url="/" text="Inicio" icon={HomeIcon} />
          <MenuItem url="/ajustes" text="Ajustes" icon={SetIcon} />
          <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon} />
        </ul>
      </aside>
    </div>
  );
}
