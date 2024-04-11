import { useRoutes } from "react-router-dom";
import "./App.css";
import router from "./router";

function App() {
  const content = useRoutes(router);
  return (
    <>
      {content}
    </>
  );
}

export default App;
