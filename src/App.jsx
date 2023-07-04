import React from "react";

import InputTodo from "./component/InputTodo";

const App = () => {
  return (
    <div className="h-screen w-full bg-blue-600">
      <h1 className="text-white font-poppins text-center font-bold text-xl md:text-3xl lg:text-4xl pt-12">
        {" "}
        TASK BOOK
      </h1>
      <InputTodo />
    </div>
  );
};

export default App;
