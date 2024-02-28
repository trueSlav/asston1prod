import ListItem from '../ListItem/ListItem';
import '../../App.css';

const List = ({ posts }) => {
  return (
    <div>
      <div className="list">
        {posts.map((pokemon, index) => (
          <ListItem value={index + 1} pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
