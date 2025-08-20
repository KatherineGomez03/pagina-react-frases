import type { FiltersProps } from '../props/types';

function Filters({ selected, setSelected }: FiltersProps) {
  const categories = ["All", "Motivation", "Success", "Life", "Wisdom"];
  
  return (
    <div className="mb-6 flex flex-wrap justify-center gap-2">
      {categories.map(id => (
        <button 
          key={id}
          className={
            (selected === id
              ? "bg-orange-800 text-white "
              : "bg-white text-orange-800 border border-orange-800 ") +
            "rounded px-4 py-2 transition font-medium hover:bg-orange-700 hover:text-white"
          }
          onClick={() => setSelected(id)}
        >
          {id}
        </button>
      ))}
    </div>
  );
}

export default Filters;