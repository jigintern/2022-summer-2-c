import Header from "../components/Header.tsx";
import Header2 from "../components/Header2.tsx";



export default function App({ children }: { children: React.ReactNode }) {
  //console.log(children.props.modules[0].filename);
  const access_file = children.props.modules[0].filename;
  const byHistory = ((access_file === "./routes/history.tsx") ? true:false);
  return (
    <>
      
      {!byHistory && <Header />}
      {byHistory && <Header2 />}
      {children}
    </>
  );
}
