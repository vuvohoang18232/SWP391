import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./components/guestAndCustomer/header/Header";
import Footer from "./components/guestAndCustomer/footer/Footer";
// import { Scrollbars } from "react-custom-scrollbars-2";
import { StateContext } from "./context/StateContext";

function App() {
  return (
    <StateContext>
      <div className="App">
        {/* <Scrollbars
          style={{ height: "150vh" }}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={500}
        > */}
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
        {/* </Scrollbars> */}
      </div>
    </StateContext>
  );
}

export default App;
