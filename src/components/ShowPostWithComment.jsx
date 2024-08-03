import React, { Component } from "react";
import { FaRegCircleDown } from "react-icons/fa6";
import ford from "../assets/PostChangeImage/1967-Ford-Mustang.jpg";
import ferrari from "../assets/PostChangeImage/F40_Ferrari.jpg";
import lamborghini from "../assets/PostChangeImage/lamborghini.jpg";
import volvo from "../assets/PostChangeImage/Volvo XC90.jpg";

class ShowPostWithComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      loading: false,
    };
  }

  handleLinkClick = (content) => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ content, loading: false });
    }, 1000);
  };

  render() {
    const { content, loading } = this.state;

    const contentData = {
      link1: {
        image: ford,
        title: "Ford Mustang 1967",
        description:
          " For the first time since its mid-1964 introduction the Mustang was significantly changed. The styling was similar to the original in its theme, but everything was larger, not in wheelbase but in overall width. The grille featured a larger opening.",
        commentOne:
          "I’m not so sure the 1967 Mustang is more popular than any other muscle car. I can think of quite a number of others that would top that list.",
        commentTwo:
          "Mustangs were great. What's more they were the right car for the right time",
      },
      link2: {
        image: ferrari,
        title: "Ferrari F40",
        description:
          " A very fast berlinetta designed by Pininfarina, it was built mainly from composites. Its sophisticated high-performance, turbo-charged running gear combined with a first class chassis gave it the kind of great dynamic prowess that was close to that of a racing car.",
        commentOne:
          "Ferraris are not low quality cars by any objective standard.",
        commentTwo:
          "The F40 is powered by a 2.9-liter twin-turbocharged V8 engine producing around 471 horsepower",
      },
      link3: {
        image: lamborghini,
        title: "Lamborghini",
        description:
          " Responding to the need for sustainability and powerful performance, the Lamborghini Revuelto rewrites all paradigms and represents a technical masterpiece beyond anyone’s imagination.",
        commentOne:
          "Lamborghini has a rich history of producing high-performance sports cars that stand out for their unique design, powerful engines, and exclusivity.",
        commentTwo:
          "One of the key reasons people are drawn to Lamborghinis is their distinctive and aggressive design",
      },
      link4: {
        image: volvo,
        title: "Volvo XC90",
        description:
          "The first generation was introduced at the 2002 North American International Auto Show and used the Volvo P2 platform shared with the first generation Volvo S80 and other large Volvo cars. It was manufactured at Volvo's Torslandaverken.",
        commentOne:
          "The XC90's minimalist interior and exterior styling are appreciated for their attractiveness and elegance.",
        commentTwo:
          "Volvo's reputation for safety shines through in the XC90, with features like Auto Pilot being highly praised. ",
      },
    };

    return (
      <div className="flex flex-col items-center justify-center">
        <div className="p-4 flex flex-col items-center justify-center bg-gray-500 w-[90%] rounded-lg">
          <div className="flex flex-wrap justify-center items-center w-full h-auto bg-black rounded-lg mx-auto py-2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
            <button
              onClick={() => this.handleLinkClick(contentData.link1)}
              className="text-white flex items-center justify-center w-full sm:w-auto"
            >
              <FaRegCircleDown className="mr-2" />
              Ford Mustang
            </button>
            <button
              onClick={() => this.handleLinkClick(contentData.link2)}
              className="text-white flex items-center justify-center w-full sm:w-auto"
            >
              <FaRegCircleDown className="mr-2" />
              Ferrari F40
            </button>
            <button
              onClick={() => this.handleLinkClick(contentData.link3)}
              className="text-white flex items-center justify-center w-full sm:w-auto"
            >
              <FaRegCircleDown className="mr-2" />
              Lamborghini
            </button>
            <button
              onClick={() => this.handleLinkClick(contentData.link4)}
              className="text-white flex items-center justify-center w-full sm:w-auto"
            >
              <FaRegCircleDown className="mr-2" />
              Volvo XC90
            </button>
          </div>

          <div className="mt-4">
            {loading ? (
              <div className="text-white text-2xl">Loading...</div>
            ) : (
              content && (
                <div className="space-y-2 bg-gray-400 flex flex-col items-center justify-center rounded-xl">
                  <img
                    src={content.image}
                    alt={content.title}
                    className="h-[25%] mt-[2rem] w-[50%] rounded-2xl"
                  />
                  <h2 className="text-xl font-bold">{content.title}</h2>
                  <p className="w-[60%]">{content.description}</p>
                  <div>
                    <form className="mb-[1.2rem] mr-[0.5rem] ml-[0.5rem]">
                      <fieldset className="border border-solid border-gray-300 p-3 rounded-lg">
                        <legend className="text-sm font-semibold">
                          Comments:
                        </legend>{" "}
                        <div className="bg-gray-300 rounded-sm">
                          <p className="p-4">{content.commentOne}</p>
                        </div>
                        <div className="bg-gray-300 rounded-sm mt-[1rem]">
                          <p className="p-4">{content.commentTwo}</p>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowPostWithComment;
