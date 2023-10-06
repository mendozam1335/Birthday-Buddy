import React from "react";

const Person = ({ id, name, age, image }) => {
  return (
    <div className="person">
      <img src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Person;
