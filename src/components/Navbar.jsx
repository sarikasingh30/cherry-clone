import React from 'react'
import "../App.css"
import logo from "../assets/logo.svg"
const navbarOptions=[
    {
        id:1,
        iconName:"person_outline",
        label:"Sign In"
    },
    {
        id:2,
        iconName:"shopping_bag",
        label:"Cart"
    },
    {
        id:3,
        iconName:"support",
        label:"Help"
    },
    {
        id:4,
        iconName:"search",
        label:"Search"
    }
]
const Navbar = (props) => {
  return (
    <div>
       <section className="navbar">
        <div className="container">
            <img className="logo" src={logo} alt="logo"/>
            <div className="location">
                <span className="city">{props.city}</span>
                <span className="state">{props.state}, {props.country}</span>
            </div>
            <div className="navbar-options">
                {navbarOptions.map((navbarOption)=>
                    <div key={navbarOption.id} className="navbar-option">
                    <span className="material-icons">{navbarOption.iconName}</span>{navbarOption.label}
                </div>
                )}
                
            </div>
        </div>
       
    </section>
    </div>
  )
}

export default Navbar
