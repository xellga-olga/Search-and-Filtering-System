import React from "react";
import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            className="card-img"
            alt="Shoe"
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIoG2bmgCUrG8achIHoHwMrU6on-P02F0ixHV4aXk-aED3Nj05"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-start" />{" "}
              <AiFillStar className="ratings-start" />{" "}
              <AiFillStar className="ratings-start" />{" "}
              <AiFillStar className="ratings-start" />
              <span className="total-reviews">22</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$300</del> $200
              </div>

              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default Products;
