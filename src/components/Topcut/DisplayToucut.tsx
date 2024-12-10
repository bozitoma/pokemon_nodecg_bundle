import { useEffect, useRef } from 'react';
import Sortable from 'sortablejs';
import { useReplicant } from '../../hooks/useReplicant';

const SortableList = () => {
  // const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [topcut, setTopcut] = useReplicant('Topcut');
  const listRef = useRef(null);

  useEffect(() => {
    if (!topcut) return;
      const sortable = new Sortable(listRef.current, {
        animation: 150,
        onEnd: (event) => {
          const updatedItems = [...topcut];
          const [movedItem] = updatedItems.splice(event.oldIndex, 1);
          updatedItems.splice(event.newIndex, 0, movedItem);
          setTopcut(updatedItems);
        },
      });

    return () => sortable.destroy();
  }, [topcut]);

  return (
    <ul ref={listRef} style={{ listStyle: 'none', padding: 0 }}>
      {topcut
        ? topcut.map((player, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                margin: '5px 0',
                border: '1px solid #ccc',
                backgroundColor: '#f9f9f9',
                textAlign: 'left'
              }}
            >
              {index}.{player}
            </li>
          ))
        : []}
    </ul>
  );
};

export default SortableList;
