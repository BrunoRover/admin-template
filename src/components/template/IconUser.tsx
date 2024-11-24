import useAuth from "@/data/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";

interface IconUserProps {
  classname?: string;
}

const IconUser = (props: IconUserProps) => {
  const { user } = useAuth();
  return (
    <Link href="/profile">
      <Image
        src={user?.imageUrl ?? "/images/user.png"}
        alt="Icone usuario"
        width={50}
        height={50}
        className={`rounded-full cursor-pointer ${props.classname}`}
      />
    </Link>
  );
};

export default IconUser;
