import "@/styles/globals.css";
import Formbar from "../../components/Formbar";



export default function App({ Component, pageProps }) {
  return <>
  <Formbar/>
  <Component {...pageProps} />;
  </>
}
