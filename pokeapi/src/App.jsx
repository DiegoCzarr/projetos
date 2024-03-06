import { useState } from "react";
import "./App.css";

function App() {
  const [inforPokemon, setInforPokemon] = useState('');
  const [namePokemon, setNamePokemon] = useState("Bulbasaur");
  const [imagePokemon, setImagePokemon] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
     
  );
  const [hpPokemon, setHpPokemon] = useState(45);
  const [attackPokemon, setAttackPokemon] = useState(49);
  const [defencePokemon, setDefencePokemon] = useState(49);
  const [idPokemon, setIdPokemon] = useState(1);
  const [speedPokemon, setSpeedPokemon] = useState(65);
  


    const buscar = async (e) => {
      e.preventDefault();

      fetch(`https://pokeapi.co/api/v2/pokemon/${inforPokemon}`)
        .then((data) => data.json())
        .then((result) => {
          setNamePokemon(result.name)
          setImagePokemon(result.sprites.other.dream_world.front_default)
          setHpPokemon(result.stats[0].base_stat)
          setAttackPokemon(result.stats[1].base_stat)
          setDefencePokemon(result.stats[2].base_stat)
          setSpeedPokemon(result.stats[3].base_stat)
          setIdPokemon(result.id)
        })
        .catch();
    };
  return (
    <main>
     <body>
      <div className="div_main">
        <form action="" className="form">
          <input className="search"
            type="text"
            value={inforPokemon}
            name="nome_id"
            placeholder="ID ou Nome"
            onChange={(e) => setInforPokemon(e.target.value)}
          />
          <button onClick={(e) => buscar(e)}>Buscar</button>
          
        </form>
        <div className="id_pokemon">ID: {idPokemon}</div>
        <img className="img_pokemon" src={imagePokemon} alt="imagem do pokemon" />
        <div className="nome">{namePokemon}</div>
        <div className="hp"><strong>HP:</strong> {hpPokemon}</div>
        <div className="atk"><strong>Atk:</strong> {attackPokemon}</div>
        <div className="def"><strong>Def:</strong> {defencePokemon}</div>
        <div className="spd"><strong>Speed:</strong> {speedPokemon}</div>
      </div>
      </body>
    </main>
  );
}

export default App;