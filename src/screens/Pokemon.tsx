import { useState } from "react";

const POKEMONS = [
  "bulbasaur",
  "ivysaur",
  "venusaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "pidgeot",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
  "nidoran",
  "nidorina",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

export default function Pokemon() {
  const [hasWon, toggleWon] = useState(false);

  type Form = HTMLFormElement & {
    pokemon: HTMLInputElement;
  };

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();

    const { pokemon } = event.currentTarget;

    if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
      toggleWon(true);
      alert("You Won!");
    } else {
      alert("Wrong answer, try again");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        width={512}
        height={512}
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : "brightness(0) invert(1)",
        }}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        alt="pokemon"
      />
      {hasWon ? (
        <button onClick={() => location.reload()} style={{ width: "100%" }}>
          Play again
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input autoFocus type="text" name="pokemon" />
          <button type="submit" style={{ borderRadius: 8 }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
