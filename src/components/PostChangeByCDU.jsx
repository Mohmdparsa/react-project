import React, { Component } from "react";
import ford from "../assets/PostChangeImage/1967-Ford-Mustang.jpg";
import ferrari from "../assets/PostChangeImage/F40_Ferrari.jpg";
import lamborghini from "../assets/PostChangeImage/lamborghini.jpg";
import volvo from "../assets/PostChangeImage/Volvo XC90.jpg";

class PostChangeByCDU extends Component {
  state = {
    activeLink: "link1",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeLink !== this.state.activeLink) {
      console.log(`Active link changed to: ${this.state.activeLink}`);
    }
  }

  handleLinkClick = (link) => {
    this.setState({ activeLink: link });
  };

  renderContent = () => {
    switch (this.state.activeLink) {
      case "link1":
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden mx-auto md:max-w-2xl">
              <img
                className="w-full h-64 object-cover"
                src={ford}
                alt="Ford Mustang 1967"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Ford Mustang 1967</h2>
                <p className="mt-2 text-gray-600 text-sm md:text-base">
                  For the first time since its mid-1964 introduction the Mustang was significantly changed. The styling was similar to the original in its theme, but everything was larger, not in wheelbase but in overall width. The grille featured a larger opening.
                </p>
                <button className="bg-gray-400 rounded-lg w-full md:w-[10rem] h-[2rem] mt-2 md:mt-[1rem]">
                  <a href="https://over-drive-magazine.com/2023/05/31/1967-ford-mustang-fact-sheet/#:~:text=1967%20Ford%20Mustang%20Facts%20%E2%80%93%20Models%20Offered&text=The%20fastback%20came%20with%20wheel%20covers%2C%20special%20emblems%2C%20and%20rocker,Shift%20Cruise%2DO%2DMatic.">
                    more information...
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      case "link2":
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden mx-auto md:max-w-2xl">
              <img
                className="w-full h-64 object-cover"
                src={ferrari}
                alt="Ferrari F40"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Ferrari F40</h2>
                <p className="mt-2 text-gray-600 text-sm md:text-base">
                  The F40 was built to celebrate Ferrari’s 40th anniversary. A very fast berlinetta designed by Pininfarina, it was built mainly from composites. Its sophisticated high-performance, turbo-charged running gear combined with a first class chassis gave it the kind of great dynamic prowess that was close to that of a racing car.
                </p>
                <button className="bg-gray-400 rounded-lg w-full md:w-[10rem] h-[2rem] mt-2 md:mt-[1rem]">
                  <a href="https://www.ferrari.com/en-EN/auto/f40">
                    more information...
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      case "link3":
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden mx-auto md:max-w-2xl">
              <img
                className="w-full h-64 object-cover"
                src={lamborghini}
                alt="Lamborghini"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Lamborghini</h2>
                <p className="mt-2 text-gray-600 text-sm md:text-base">
                  Responding to the need for sustainability and powerful performance, the Lamborghini Revuelto rewrites all paradigms and represents a technical masterpiece beyond anyone’s imagination.
                </p>
                <button className="bg-gray-400 rounded-lg w-full md:w-[10rem] h-[2rem] mt-2 md:mt-[1rem]">
                  <a href="https://www.lamborghini.com/en-en/models">
                    more information...
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      case "link4":
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden mx-auto md:max-w-2xl">
              <img
                className="w-full h-64 object-cover"
                src={volvo}
                alt="Volvo XC90"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Volvo XC90</h2>
                <p className="mt-2 text-gray-600 text-sm md:text-base">
                  The first generation was introduced at the 2002 North American International Auto Show and used the Volvo P2 platform shared with the first generation Volvo S80 and other large Volvo cars. It was manufactured at Volvo's Torslandaverken. Volvo moved production equipment of the first generation to China and ended Swedish production at the end of 2014, renaming the car as the Volvo XC Classic (or Volvo XC90 Classic).
                </p>
                <button className="bg-gray-400 rounded-lg w-full md:w-[10rem] h-[2rem] mt-2 md:mt-[1rem]">
                  <a href="https://www.volvocars.com/us/cars/xc90/specifications/">
                    more information...
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 md:p-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl">
          <div className="flex flex-wrap justify-between mb-4">
            <button
              className={`px-4 py-2 mb-2 md:mb-0 rounded ${
                this.state.activeLink === "link1"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => this.handleLinkClick("link1")}
            >
              Link 1
            </button>
            <button
              className={`px-4 py-2 mb-2 md:mb-0 rounded ${
                this.state.activeLink === "link2"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => this.handleLinkClick("link2")}
            >
              Link 2
            </button>
            <button
              className={`px-4 py-2 mb-2 md:mb-0 rounded ${
                this.state.activeLink === "link3"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => this.handleLinkClick("link3")}
            >
              Link 3
            </button>
            <button
              className={`px-4 py-2 mb-2 md:mb-0 rounded ${
                this.state.activeLink === "link4"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => this.handleLinkClick("link4")}
            >
              Link 4
            </button>
          </div>
          <div className="mt-4">{this.renderContent()}</div>
        </div>
      </div>
    );
  }
}

export default PostChangeByCDU;
