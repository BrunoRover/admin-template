import Image from "next/image";
import loading from "../../../public/images/loading.gif";
import useAuth from "@/data/hooks/useAuth";
import router from "next/router";
import Head from "next/head";

export default function ForceAuthenticaton(props) {
  const { load, user } = useAuth();

  function renderContext() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (!document.cookie.includes('admin-template-auth')) {
                window.location.href = "/authentication";
              }
            `,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderLoading() {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={loading} />
      </div>
    );
  }

  if (!load && user?.email) {
    return renderContext();
  } else if (load) {
    return renderLoading();
  } else {
    router.push("/authentication");
    return null;
  }
}
