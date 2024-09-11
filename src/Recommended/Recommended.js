import React from "react";
import "./Recommended.css";
import Buttons from "../components/Buttons";

function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons onClickHandler={handleClick} value="" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
          <Buttons
            onClickHandler={handleClick}
            value="Converse"
            title="Converse"
          />
          <Buttons
            onClickHandler={handleClick}
            value="New Balance"
            title="New Balance"
          />
        </div>
      </div>
    </>
  );
}

export default Recommended;
