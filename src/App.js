import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Page from "./components/Page";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = Math.random() * 5000 + 2000;
    setTimeout(() => setIsLoading(false), timer);
  }, []);

  if(isLoading) {
    return <Loading />;
  }

  return <Page />;
}

export default App;
