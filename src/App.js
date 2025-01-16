import "./App.css";
import Counter from "./Counter";
import { Route, Routes } from "react-router-dom";

import Tailwindtest from "./Tailwindtest";
import Colorpanel from "./Colorpanel";
import Passwordgen from "./components/Passwordgen";
import Accordion from "./components/Accordionn";
import Divrender from "./Divrender";
import Accordionn from "./components/Accordionn";
import List from "./components/List";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/Accordionn" element={<Accordionn />} />
        <Route path="/Passwordgen" element={<Passwordgen />} />
        <Route path="/Colorpanel" element={<Colorpanel />} />
        <Route path="/Tailwindtest" element={<Tailwindtest />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
