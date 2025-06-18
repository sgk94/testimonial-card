import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex justify-center m-8">
        <Card
          imageSrc="test"
          name="bob"
          userHandle="@bobstuff"
          description="hello im so cool"
        />
      </div>
    </>
  );
}

export default App;
