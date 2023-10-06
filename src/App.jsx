import { useState } from "react";
import Title from "./components/Title";
import List from "./components/List";
import data from "./data";
import Clear from "./components/Clear";

const App = () => {
  const [people, setPeople] = useState(data);
  const clearList = () => {
    console.log("Clear List");
    setPeople([]);
  };
  return (
    <main>
      <div className="container">
        <Title count={people.length} />
        <List people={people} />
        <Clear clear={clearList} />
      </div>
    </main>
  );
};
export default App;
