import type { AppProps } from "next/app";

import Layout from "../components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";
// import Modal from "@/components/Modal";

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <>
      {/* <Modal actionLabel="Submit" isOpen title="Test Modal" />  */}
      <RegisterModal />
      <LoginModal />
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
