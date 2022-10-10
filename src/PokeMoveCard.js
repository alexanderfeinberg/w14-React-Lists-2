import "./PokeMoveCard.css";

function PokeMoveCard(props) {
  let { id, type, move, level } = props;
  return (
    <li className="poke-move-cars">
      <h3>Move {id}</h3>
      <h4 style={{ padding: 10 }}>{move.toUpperCase()}</h4>
      <p>Type: {type}</p>
      <p>Level: {level}</p>
    </li>
  );
}

export default PokeMoveCard;
