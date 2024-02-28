const ListItem = ({ pokemon, value }) => {
  return (
    <div className="listItem">
      <b>{value}. </b>
      {pokemon.name}
      {pokemon.title}
    </div>
  );
};

export default ListItem;
