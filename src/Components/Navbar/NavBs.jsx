import CartWidget  from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./style.scss"
import {useEffect, useState } from "react";
import { getCategories } from "../../products";
import { NavDropdown } from "react-bootstrap";



const NavBS = () => {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    getCategories().then(res => setCategories(res))
   
  }, [categories])


  return (

      <nav className="navbar sticky-lg-top navbar-expand-lg">

          <div className="logo"><a className="navbar-brand" href="/#">LOGO </a></div>

          <div className="collapse navbar-collapse main_list" id="navbarNavDropdown">
            <NavLink to="/" > Inicio </NavLink>
            {/* <NavLink to="/category"> Categorías </NavLink>
            { categories.map((category) => <NavLink to={"/category/"+category.id}>{categories.name}</NavLink> ) } 
             */}
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              { categories.map((category) => <NavLink to={"/category/"+category.id}>{category.description}</NavLink> ) }
            </NavDropdown>
            <CartWidget />
          </div>

          
      </nav>

  );
};

export default NavBS;