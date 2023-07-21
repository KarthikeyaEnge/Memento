import "./App.css";
import Headsec from "./components/Headsec";
import Mainsec from "./components/Mainsec";
function App() {
  return (
    <main className="lg:min-h-screen h-auto w-screen flex flex-row flex-wrap lg:px-10 gap-2  back backdrop-blur-lg scroll-smooth">
      <Headsec />
      <Mainsec />
    </main>
  );
}

export default App;
