import React from "react";
import "./css/template.css";

const Tempelate = ({ carData }) => {
  return (
    <>
      <div className="grid-container">
        {carData.map((curr) => {
          return (
            <>
              <div className="cta">
                <img className="image" src={curr.img} alt="" />
                <div className="text">
                  <h2 className="white h2">{curr.name}</h2>
                  <p className="spooky">
                    <strong> Engine :</strong> {curr.engine}
                  </p>
                  <p className="spooky">
                    <strong> Mileage :</strong> {curr.mileage}
                  </p>
                  <p className="spooky">
                    <strong> MaxSpeed :</strong> {curr.maxSpeed}
                  </p>
                  <p className="spooky">
                    <strong> Price :</strong> {curr.Price}
                  </p>
                  <p className="spooky">
                    <strong> 0-to-100 :</strong> {curr.time}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Tempelate;
