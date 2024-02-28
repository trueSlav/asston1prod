const ListItem = ({ pokemon, value }) => {
  return (
    <div className="listItem">
      {value} {pokemon.name}
      {pokemon.title}
    </div>
  );
};

export default ListItem;
