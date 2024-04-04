import Pokemon from "./Pokemon";

const FirePokemons = ({pokemons}) => {
      
      const firePokemons = pokemons.filter((pokemon) => {
        return pokemon.type === "Fire";
    });

    return (
        <>
        <h2>Liste de tous les pokemons de type Feu : </h2>
        {firePokemons.map((pokemon) => {
          return (
            <>
            <Pokemon pokemon = {pokemon}/>
            </>
          )
        })}
        </>
    )
}

export default FirePokemons;