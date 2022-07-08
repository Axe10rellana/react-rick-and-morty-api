//importaciones
import React, { useState, useEffect } from "react";

//react-router
import { useParams, Link } from "react-router-dom";

//componentes
import Loader from "../components/Loader";

//estilos css
import "../styles/CharacterId.css";

const CharacterId = () => {
  //variables de estado
  const [character, setCharacter] = useState({});

  //react-router
  const params = useParams();

  //useEffect
  useEffect(() => {
    const getCharacter = () => {
      fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then((data) => data.json())
        .then((json) => setCharacter(json));
    };

    getCharacter();
  }, [params.id]);

  if (!character?.image) return <Loader />;
  return (
    <>
      <article className="card">
        <img
          className="card__img"
          src={character?.image}
          alt={character?.name}
          title={character?.name}
        />
        <div className="card__information">
          <h1 className="card__title">Nombre: {character?.name}</h1>
          <h2 className="card__subtitle">Información</h2>
          <p className="card__text">Genero: {character?.gender}</p>
          <p className="card__text">Especie: {character?.species}</p>
          <p className="card__text">Estado: {character?.status}</p>
          <p className="card__text">Origen: {character?.origin.name}</p>
          <p className="card__text">Ubicación: {character?.location?.name}</p>
        </div>
      </article>
      <Link to="/" className="card__button">
        Volver
      </Link>
    </>
  );
};

export default CharacterId;
