import React from "react";

const Ninjas = (props) => {
  const { ninjas, deleteNinja } = props;

  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 19 ? (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete
        </button>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
