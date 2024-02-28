const ListItem = ({ pokemon, value }) => {
  return (
    <div className="listItem">
      {value} {pokemon.name}
    </div>
  );
};

export default ListItem;
