import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/guestAndCustomer/header/Header";
import Footer from "./components/guestAndCustomer/footer/Footer";
import { Scrollbars } from "react-custom-scrollbars-2";

function App() {
  return (
    <div className="App">
      <Scrollbars
        style={{ height: "100vh" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={500}
      >
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </Scrollbars>
    </div>
  );
}

export default App;
