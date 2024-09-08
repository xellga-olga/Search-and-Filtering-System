import React from "react";
import "./Sidebar.css";

import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'

import { GiShoppingCart } from "react-icons/gi";

function Sidebar({ handleChange }) {
  console.log(handleChange)
  return (
    <section className="sidebar">
      <div className="logo-container" >
        <h1><GiShoppingCart/></h1>
      </div>

      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>
    </section>
  );
}

export default Sidebar;
