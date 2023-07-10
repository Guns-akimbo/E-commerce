
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "../Context/Theme"
import { useContext } from "react"



const Header = ({ Logo }) => {

    const {theme,darkmode,lightmode,state} = useContext(ThemeContext)
    console.log("from headerstate",state)
    const headerStyle={
        backgroundColor: theme === "light"? " #2B4865" :"black",
        // color: theme === "light" ? "black" : "white"   
    }

    return (

        <>
         <div className="bigheader" >
            <div className="header" style={headerStyle} >
                <p>FREE WORLD-WIDE SHOPPING AS USUAL  </p>
                {
                     theme === "light" ? <button onClick={()=>darkmode()} >Darkmode</button> : <button onClick={()=>lightmode( )}  >Lightmode</button>
                }
                

            </div>
            <div className="header2">
                <div className="header2wrap">
                    <div className="logowrap">
                        <img src={Logo} alt="logo" />
                        <p>  Alo <br /> Market</p>
                    </div>
                    <div className="aboutwrap">

                        <NavLink to="/home" style={{ textDecoration: "none", }}>
                            <h3>Home</h3>
                        </NavLink>
                        <NavLink to="/features" style={{ textDecoration: "none", color: "black" }}>
                            <h3>Features</h3>
                        </NavLink>
                        <NavLink to="/about" style={{ textDecoration: "none", color: "black" }}>
                            <h3>About</h3>
                        </NavLink>
                        <NavLink to="/pricing" style={{ textDecoration: "none", color: "black" }}>
                            <h3>Pricing </h3>
                        </NavLink>
                        <NavLink to="/resources" style={{ textDecoration: "none", color: "black" }}>
                            <h3>Resources</h3>
                        </NavLink>
                    </div>
                    <div className="ini"></div>
                    <div className="buttonwrap">
                        <button className="login">Login</button>
                        <button className="signup">SignUp</button>
                    </div>
                </div>
            </div>
            <div className="thirdhead">
                <div className="thirdheadwrap">
                    <p>FREE SHOPPING ON ALL ORDERS:NO MINIMUM PURCHASE</p>
                </div>
            </div>
            <div className="cartdiv">
                <div className="cartdivwrap">
                    <div className="cartleft">
                        <h3>MEN</h3>
                        <h3>WOMEN</h3>
                        <h3>KIDS</h3>
                    </div>
                    <Link to="/shopcart" style={{textDecoration:"none", color:"black"}} className="cartright" >
                        <h3>Shopping Cart({state.length})</h3>
                        
                    </Link>
                </div>
            </div>
            <div className="categorydiv">
                <div className="categorywrap">
                    <h3>All Categories</h3>
                    <h3> New Additions </h3>
                    <h3> Trending</h3>
                    <h3> Seasonal Collections </h3>
                    <input type="text" className="inputcategory" placeholder="Search products and categories" />
                    <button className="search"> Search</button>
                </div>
            </div>
  </div>
        </>

    )
}

export default Header