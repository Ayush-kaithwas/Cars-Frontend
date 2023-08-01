import React from "react";
import './css/navbar.css'

function navbar({filterItem}) {
  return (
    <div className="pt-table desktop-768">
          <div className="pt-tablecell page-home relative" >
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                  <div className="page-title  home text-center">
                    <center><span className="heading-page"> Omnific Cars
                    </span></center>
                    <center><p className="mt20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></center>
                  </div>
      
                  <div className="hexagon-menu clear">
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a href="#Sedan" className="hex-content" onClick={() => filterItem("Sedan")}>
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-universal-access"></i>
                          </span>
                          <span className="title">Sedan</span>
                        </span>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a href="#Audi" className="hex-content" onClick={() => filterItem("Audi")} >
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-bullseye"></i>
                          </span>
                          <span className="title">Audi</span>
                        </span>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a href="#bmw" className="hex-content" onClick={() => filterItem("bmw")} >
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-braille"></i>
                          </span>
                          <span className="title">bmw</span>
                        </span>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a href="#mercedes" className="hex-content" onClick={() => filterItem("mercedes")} >
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-id-badge"></i>
                          </span>
                          <span className="title">mercedes</span>
                        </span>
                      </a>
                    </div>
                    
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a href="#SUV" className="hex-content" onClick={() => filterItem("SUV")} >
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-life-ring"></i>
                          </span>
                          <span className="title">SUV</span>
                        </span>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a href="#Sports" className="hex-content" onClick={() => filterItem("Sports")} >
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-clipboard"></i>
                          </span>
                          <span className="title">Sports car</span>
                        </span>
                      </a>
                    </div>
                    <div className="hexagon-item">
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <div className="hex-item">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <a href="#luxury" className="hex-content" onClick={() => filterItem("luxury")} >
                        <span className="hex-content-inner">
                          <span className="icon">
                            <i className="fa fa-map-signs"></i>
                          </span>
                          <span className="title">Luxury</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default navbar;
