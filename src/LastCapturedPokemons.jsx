import Pokemon from "./Pokemon";

const LastCapturedPokemons = ({pokemons}) => {

      const pokemonsSortedByDateCapture = pokemons.sort((a,b) => {
        return (b.capturedAt) - (a.capturedAt);
      })

      const threeLastPokemonsCaptured = pokemonsSortedByDateCapture.slice(-3);

    return (
        <section>
            <h2>Liste des 3 derniers pokemons capturés : </h2>
            {threeLastPokemonsCaptured.map((pokemon) => {
                return ( 
                  <>
                  <Pokemon pokemon = {pokemon}/>
                  </>
                )
            })}
        </section>
    )
}

export default LastCapturedPokemons;