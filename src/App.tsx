import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";
function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
