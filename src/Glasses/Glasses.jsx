import React, { Component } from "react";
import data from "./dataGlasses.json";
import "./style.css";

export default class Glasses extends Component {
  state = {
    isShow: false,
    glass: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  changeGlass = (id) => {
    alert(id);
  };
  render() {
    return (
      <div className="page">
        <div className="header">
          <h1>TRY GLASSES APP ONLINE</h1>
        </div>
        <div className="container">
          <div className="glasses_content row">
            <div className="col-6 glasses_model">
              <img src="./glassesImage/v8.png" alt="..." />
              <div className="glasses_info">
                <h3>FENDI F8500</h3>
                <p>
                  Light pink square lenses define these sunglasses, ending with
                  amother of pearl effect tip.
                </p>
              </div>
            </div>
            <div className="col-6 glasses_model" id="avata">
              <img
                src={this.state.glass.url}
                alt={this.state.glass.name}
                style={{ display: this.state.isShow ? "block" : "none" }}
              />
              <div
                className="glasses_info"
                style={{ display: this.state.isShow ? "block" : "none" }}
              >
                <h3>{this.state.glass.name}</h3>
                <span>{this.state.glass.price}$</span>
                <p>{this.state.glass.desc}</p>
              </div>
            </div>
          </div>
          <div className="buttons" id="btn-glasses">
            <div className="buttons_glasses row">
              {data.map((glass) => {
                return (
                  <button
                    key={glass.url}
                    className="col-2"
                    onClick={() => {
                      this.setState({
                        glass: glass,
                        isShow: true,
                      });
                    }}
                  >
                    <img src={glass.url} alt={glass.name} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
