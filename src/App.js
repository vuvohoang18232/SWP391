import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/guestAndCustomer/header/Header";
import Footer from "./components/guestAndCustomer/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
