import List, { Person } from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  //console.log(people);
  return (
    <div>
      <h2>INCONTRI</h2>
      <List data={people} />
      <div className="btn-group">
        <button>Reload</button>
        <button>Delete All</button>
      </div>
    </div>
  );
}

export default App;
