import "./App.css";
import { Epic } from "./components/Epic";

function App() {
  return (
    <div className="App">
      <h1>Prop validation</h1>

      <div>
        <h2>With valid props</h2>
        <Epic
          // @ts-ignore
          articleCount={42}
          sendComponentEvent={() => console.log("event!")}
        />
      </div>

      <div>
        <h2>With invalid props</h2>
        <Epic
          // @ts-ignore
          articleCount={{ num: 42, durationInMonths: 6 }}
          sendComponentEvent={() => console.log("event!")}
        />
      </div>
    </div>
  );
}

export default App;
