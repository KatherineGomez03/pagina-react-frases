import type { FiltersProps } from '../props/types';

function Filters({ selected, setSelected }: FiltersProps) {
  const categories = ["All", "Motivation", "Success", "Life", "Wisdom"];
  
  return (
    <div className="filters">
      {categories.map(id => (
        <button 
          key={id}
          className={selected === id ? "active" : ""}
          onClick={() => setSelected(id)}
        >
          {id}
        </button>
      ))}
    </div>
  );
}

export default Filters;