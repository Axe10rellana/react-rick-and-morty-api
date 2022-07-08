//importaciones
import React, { useRef, useState } from "react";

//hooks
import { useInfinityScrollCharacters } from "../hooks/useInfinityScrollCharacters";

//componentes
import Characters from "../components/Characters";

//estilos css
import "../styles/Home.css";

const Home = () => {
  //variables de estado
  const [search, setSearch] = useState("");

  //referencias
  const elementToObserveRef = useRef();
  const charactersDataRef = useRef([]);

  //variables del hook
  const [state] = useInfinityScrollCharacters(
    elementToObserveRef,
    charactersDataRef
  );
  const { statusData, error } = state;

  return (
    <>
      <input
        type="search"
        placeholder="Buscar un personaje"
        className="home__input"
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
        autoComplete="off"
        required
      />
      <Characters
        status={statusData}
        charactersData={charactersDataRef.current}
        error={error}
        elementToObserveRef={elementToObserveRef}
        search={search}
      />
    </>
  );
};

export default Home;
