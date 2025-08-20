import type { FiltersProps } from '../props/types';

function Filters({ selected, setSelected }: FiltersProps) {
  // Las categorías deben coincidir con las categorías reales de las citas
  const categories = [
    { label: "All", category: "All" },
    { label: "Motivation", category: "Motivation" },
    { label: "Success", category: "Success" },
    { label: "Life", category: "Life" },
    { label: "Wisdom", category: "Wisdom" },
  ];

  return (
    <div className="filters-container">
      {categories.map(cat => (
        <button
          key={cat.category}
          className={`filter-btn${selected === cat.category ? ' filter-btn-active' : ''}`}
          onClick={() => setSelected(cat.category)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default Filters;