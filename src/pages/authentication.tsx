import AuthInput from "@/components/auth/AuthInput";
import { WarningIcon } from "@/components/icons/icons";
import useAuth from "@/data/hooks/useAuth";
import Image from "next/image";
import { useState } from "react";

const Authentication = () => {
  const { user, loginGoogle } = useAuth();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [error, setError] = useState(null);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function displayError(msg, time = 5) {
    setError(msg);
    setTimeout(() => setError(null), time * 1000);
  }

  function submit() {
    if (mode === "login") {
      displayError("Ocorreu um erro no login");
    } else {
      displayError("Ocorreu um erro no cadastro");
    }
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative hidden md:block md:w-1/2 lg:w-2/3 h-screen">
        <Image
          src="/img.jpg"
          alt="Descrição da imagem"
          layout="fill"
          objectFit="cover"
          className="h-screen w-full"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold mb-5">
          {mode === "login"
            ? "Entre com sua Conta"
            : "Cadastre-se na Plataforma"}
        </h1>
        {error ? (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2  rounded-lg">
            {WarningIcon}
            <span className="ml-3">{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          type="email"
          value={email}
          new={setEmail}
          mandatory
        />
        <AuthInput
          label="Senha"
          type="password"
          value={senha}
          new={setSenha}
          mandatory
        />
        <button
          onClick={submit}
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
        >
          {mode === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={loginGoogle}
          className="w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3 "
        >
          Entrar com o Google
        </button>
        {mode === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setMode("register")}
              className="text-indigo-500 hover:text-indigo-700 font-semibold cursor-pointer"
            >
              {" "}
              Crie uma Conta Gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setMode("login")}
              className="text-indigo-500 hover:text-indigo-700 font-semibold cursor-pointer"
            >
              {" "}
              Entre com suas Credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Authentication;
