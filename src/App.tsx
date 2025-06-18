import Card from "./components/Card";
import spongebob from "./card-picture.png";

const name = "Spongebob Squarepants";
const userHandle = "@likeasponge";
const text =
  "I'm ready! I'm ready! I'm ready! I'm ready! I'm ready to go to work! I'm ready! I'm ready! I'm ready";

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
