import React, { useState } from "react";
import "./css/add.css";
import { Link } from "react-router-dom";

const Add = () => {
  const [cardata, SetCarData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://cars-website.onrender.com/carData", {
      method: "POST",
      body: JSON.stringify(cardata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.text();
    console.log(data);
  };

  const handleChange = (e) => {

    SetCarData({
      ...cardata,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <center>
        <Link to="/">
          <button
            style={{
              marginLeft: "90%",
              marginTop: "15px",
              marginBottom: "15px",
            }}
            className="button-29"
          >
            Go Back
          </button>
        </Link>
        <section id="contact">
          <div className="contact-box">
            <div className="contact-links">
              <h2 className="h22">ADD DATA</h2>
              <div className="links">
                <div className="link">
                  <a
                    href="https://www.linkedin.com/in/ayush-kaithwas-aa62171ba/"
                    target="blank"
                  >
                    <img
                      className="contactImage"
                      src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                </div>
                <div className="link">
                  <a href="https://github.com/Ayush-kaithwas" target="blank">
                    <img
                      className="contactImage"
                      src="https://i.postimg.cc/YCV2QBJg/github.png"
                      alt="github"
                    />
                  </a>
                </div>
                <div className="link">
                  <a href="https://www.instagram.com/omni_fic/" target="blank">
                    <img
                      className="contactImage"
                      src="https://i.postimg.cc/W4Znvrry/instagram.png"
                      alt="instagram"
                    />
                  </a>
                </div>
                <div className="link">
                  <a href="https://0mnific.blogspot.com" target="blank">
                    <img
                      className="contactImage"
                      src="https://i.postimg.cc/NjLfyjPB/email.png"
                      alt="email"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="form-item">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                  <label className="conLabel">Name:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="engine"
                    onChange={handleChange}
                    required
                  />
                  <label className="conLabel">engine:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="Price"
                    onChange={handleChange}
                    required
                  />
                  <label className="conLabel">Price:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="mileage"
                    onChange={handleChange}
                    required
                  />
                  <label className="conLabel">mileage:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="maxSpeed"
                    onChange={handleChange}
                    required
                  />
                  <label className="conLabel">maxSpeed:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="time"
                    onChange={handleChange}
                    required
                  />
                  <label className="conLabel">time:</label>
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    name="img"
                    onChange={handleChange}
                    required
                  />
                  <label className="conLabel">img:</label>
                </div>
                
                <div className="form-item">
                  {/* <input
                    type="text"
                    name="category"
                    onChange={handleChange}
                    required
                  /> */}
                  <label className="conLabel"></label>
                  <select onChange={handleChange} name="category" id="cars">
                    <option value="Sedan">Sedan</option>
                    <option value="Audi">Audi</option>
                    <option value="bmw">bmw</option>
                    <option value="mercedes">mercedes</option>
                    <option value="SUV">SUV</option>
                    <option value="Sports">Sports</option>
                    <option value="luxury">luxury</option>
                  </select>
                </div>

                <button className="submit-btn">ADD</button>
              </form>
            </div>
          </div>
        </section>
      </center>
    </>
  );
};

export default Add;
