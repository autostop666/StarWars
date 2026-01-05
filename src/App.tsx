import { MainPage } from "./pages/MainPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApplicationPage } from "./pages/ApplicationPage/ui";
import Header from "./widgets/Header/Header";
import HumanId from "./pages/HumanId/ui/HumanId";
// import Footer from "./widgets/Footer/Footer";

function App() {
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/applications" element={<ApplicationPage/>} />
          <Route path="/human" element={<HumanId/>} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App;

