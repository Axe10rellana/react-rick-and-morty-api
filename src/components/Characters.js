//importaciones
import React from "react";

//hooks
import { LOADING, ERROR } from "../hooks/useDataProvider";

//estilos css
import "../styles/Characters.css";

//componentes
import Character from "./Character";
import Loader from "./Loader";

const Characters = ({
  status,
  charactersData,
  error,
  elementToObserveRef,
  search,
}) => {
  const filteredCharacters = charactersData.filter(
    (character) =>
      character?.name.toLowerCase().includes(search.toLowerCase()) ||
      character?.origin?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ul className="list">
        {charactersData &&
          filteredCharacters?.map((character) => (
            <Character key={character?.id} character={character} />
          ))}
      </ul>
      <ul ref={elementToObserveRef}>
        {status === LOADING && <Loader />}
        {status === ERROR && <p>{error.message}</p>}
      </ul>
    </>
  );
};

export default Characters;
