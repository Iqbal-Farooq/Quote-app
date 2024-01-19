import QuoteApp from "./QuoteApp";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "iqbalfarooq"
  }, [])
  return <QuoteApp />
}
export default App;
