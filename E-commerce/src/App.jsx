import "./App.css"
import Landingpage from "./Components/Landingpage"
import Logo from "./assets/Logo.jpg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import About from "./Pages/About"
import Resources from "./Pages/Resources"
import Pricing from "./Pages/Pricing"
import Features from "./Pages/Features"
import Home from "./Pages/Home"
import Detail from "./Pages/Detail"
import Footer from "./Components/Footer"
import ShoppingCart from "./Pages/ShoppingCart"
import { Menuitems } from "./Components/Menuitems"
import { useContext } from "react"
import { ThemeContext } from "./Context/Theme"
import LoginPage from "./Login/LoginPage"
// import Forminput from "./Form/Forminput"


const App = () => {


  const {showMenu}=useContext(ThemeContext)

  return (
    <>
      <Router>
        <Header Logo={Logo} />

      {
          showMenu && <Menuitems/>
        }
       
        <div className="container">
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/shopcart" element={<ShoppingCart />} />

          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  )
}

export default App