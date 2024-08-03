import React, { Component } from "react";
import ford from "../assets/PostChangeImage/1967-Ford-Mustang.jpg";
import ferrari from "../assets/PostChangeImage/F40_Ferrari.jpg";
import lamborghini from "../assets/PostChangeImage/lamborghini.jpg";
import volvo from "../assets/PostChangeImage/Volvo XC90.jpg";

class Card extends Component {
  render() {
    const { image, title, description } = this.props;
    return (
        
      <div className=" shadow-md rounded-md p-4 mb-4 md:w-[20rem] lg:w-[17rem] h-[32rem] mt-[4rem] bg-gray-200 mr-[0.7rem] ml-[0.7rem] ">
        <img
          src={image}
          alt={title}
          className="w-full object-cover rounded-md mb-4 h-[15rem] lg:h-[9rem]"
        />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
}

class GetPostInCDM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cardsData: [
        {
          image: ford,
          title: "Ford Mustang 1967",
          description:
            " For the first time since its mid-1964 introduction the Mustang was significantly changed. The styling was similar to the original in its theme, but everything was larger, not in wheelbase but in overall width. The grille featured a larger opening.",
        },
        {
          image: ferrari,
          title: "Ferrari F40",
          description:
            " A very fast berlinetta designed by Pininfarina, it was built mainly from composites. Its sophisticated high-performance, turbo-charged running gear combined with a first class chassis gave it the kind of great dynamic prowess that was close to that of a racing car.",
        },
        {
          image: lamborghini,
          title: "Lamborghini",
          description:
            " Responding to the need for sustainability and powerful performance, the Lamborghini Revuelto rewrites all paradigms and represents a technical masterpiece beyond anyone’s imagination.",
        },
        {
          image: volvo,
          title: "Volvo XC90",
          description:
            "The first generation was introduced at the 2002 North American International Auto Show and used the Volvo P2 platform shared with the first generation Volvo S80 and other large Volvo cars. It was manufactured at Volvo's Torslandaverken.",
        },
      ],
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { loading, cardsData } = this.state;

    return (
      <div className="flex justify-center items-center min-h-screen">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default GetPostInCDM;
