import ListItem from '../ListItem/ListItem';
import '../../App.css';

const List = () => {
  const data = [
    { id: '0', name: 'Pika', description: '11111111111' },
    { id: '1', name: 'Pika2', description: '22222222222' },
    { id: '2', name: 'Pika3', description: '333' },
  ];
  return (
    <div>
      <div className="list">
        {data.map((pokemon, index) => (
          <ListItem value={index + 1} pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};
// List.propTypes = {
//   data: PropTypes.araay.isRequired,
// };
export default List;
