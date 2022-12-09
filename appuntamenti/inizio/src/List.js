import React from "react";

const List = (props) => {
  console.log(props);
  return (
    <ul>
      {props.data.map((tipo) => {
        return (
          <li key={tipo.id}>
            <Person {...tipo} />
          </li>
        );
      })}
    </ul>
  );
};

const Person = ({ id, stato, nome, img }) => {
  return (
    <article>
      <img src={img} alt={nome} className="person-img" />
      <div>
        <h2>{nome}</h2>
        <button>Remove</button>
      </div>
      <p>{stato}</p>
    </article>
  );
};

export default List;
