import Card from "./components/Card";
import spongebob from "../public/card-picture.png";

const name = "Spongebob Squarepants";
const userHandle = "@likeasponge";
const text = "The krusty krab pizza is the pizza for you and me";

function App() {
  return (
    <>
      <Card
        imageSrc={spongebob}
        name={name}
        userHandle={userHandle}
        text={text}
      />
    </>
  );
}

export default App;
