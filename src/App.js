
import PostChangeByCDU from "./components/PostChangeByCDU";
import GetPostInCDM from "./components/GetPostInCDM"
import ShowPostFC from "./components/ShowPostFC";
import ShowPostCC from "./components/ShowPostCC";
import ShowPostWithComment from "./components/ShowPostWithComment";
const App = ()=> {
  return (
    <div >
      <PostChangeByCDU/>
      <GetPostInCDM/>
      <ShowPostWithComment/>
      <ShowPostFC/>
      <ShowPostCC/>
    </div>
  );
}

export default App;
