const Pokemon = ({pokemon}) => {
    return (
        <>
        <h3>Nom : {pokemon.name}</h3>
        <h3>Type : {pokemon.type}</h3>
        <h3>Date de capture : {pokemon.capturedAt}</h3>
        <img src={pokemon.image} alt={pokemon.name} />
        </>
    );
}

export default Pokemon;