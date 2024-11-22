import Link from "next/link";

interface MenuItemProps {
  url?: string;
  text: string;
  icon: React.ReactNode;
  onclick?: (e: any) => void;
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <li className="hover:bg-gray-100 dark:hover:bg-gray-700">
      {props.url ? (
        <Link
          href={props.url}
          className="flex flex-col justify-center items-center h-20 w-20 cursor-pointer dark:text-gray-200"
        >
          {props.icon}
          <span className="text-xs font-light text-gray-600">{props.text}</span>
        </Link>
      ) : (
        <div className="flex flex-col justify-center items-center h-20 w-20 cursor-pointer dark:text-gray-200">
          {props.icon}
          <span
            className="text-xs font-light text-gray-600 cursor-pointer "
            onClick={props.onclick}
          >
            {props.text}
          </span>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
