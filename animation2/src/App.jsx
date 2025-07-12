import React from "react";
import BoxContainer from "./components/BoxContainer";

const App = () => {
  return (
    <div>
      <header className="py-12 text-left pl-10">
        <h1 className="text-2xl  mb-4">Your SkillShikshya Journey</h1>
        <p className="text-3xl font-bold ">
          <span className="font-bold text-green-600"> Step </span> In.
          <span className="font-bold text-green-600">Skill</span> Up.
          <span className="font-bold text-green-600">Stand </span> Out. 🚀
        </p>
      </header>
      <BoxContainer />
    </div>
  );
};

export default App;
