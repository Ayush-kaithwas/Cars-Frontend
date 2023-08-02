import React from "react";
import "./css/footer.css";
import { Link } from "react-router-dom";

function footer() {
  return (
    <html>
      <body>
        <div className="foot">
          <footer className="footer">
            <div className="waves">
              <div className="wave" id="wave1"></div>
              <div className="wave" id="wave2"></div>
              <div className="wave" id="wave3"></div>
              <div className="wave" id="wave4"></div>
            </div>
            <ul className="menu">
              <li className="menu__item">
                <a
                  className="menu__link"
                  href="https://www.instagram.com/omni_fic/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="https://0mnific.blogspot.com" target="_blank">
                  Website
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__link"
                  href="https://github.com/Ayush-kaithwas"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li className="menu__item">
                <a
                  className="menu__link"
                  href="https://www.linkedin.com/in/ayush-kaithwas-aa62171ba/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
              <li className="menu__item">
                <Link to="/add">
                  <a className="menu__link" href="#home">
                    Add
                  </a>
                </Link>
              </li>
            </ul>
            <p>&copy;2023 Omnific Cars | All Rights Reserved</p>
          </footer>
        </div>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </html>
  );
}

export default footer;
