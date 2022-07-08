//importaciones
import React from "react";

//react-router
import { Link } from "react-router-dom";

//estilos css
import "../styles/Character.css";

const Character = ({ character }) => {
  //variables
  let id = character?.id;

  return (
    <div>
      <li className="li">
        <Link to={`/character/${id}`} className="li__link">
          <img
            className="li__img"
            src={character?.image}
            alt={character?.name}
            title={character?.name}
          />
          <div className="li__information">
            <h2 className="li__title">Nombre: {character?.name}</h2>
            <p className="li__text">Origen: {character?.origin?.name}</p>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default Character;
