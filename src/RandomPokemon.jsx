import Pokemon from "./Pokemon";

const RandomPokemon = ({pokemons}) => {

      const pokemonRandomlyPicked = pokemons[Math.round(Math.random()*9)]
      console.log(pokemonRandomlyPicked)

      return (
        <section>
            <h2>Random Pokemon : </h2>
                    <>
                    <Pokemon pokemon = {pokemonRandomlyPicked}/>
                    </>
        </section>
    )
}

export default RandomPokemon;