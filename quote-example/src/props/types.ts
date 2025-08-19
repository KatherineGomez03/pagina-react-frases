export interface Quote {
  text: string;
  author: string;
  category: string;
}

export interface FiltersProps {
  selected: string;
  setSelected: (category: string) => void;
}

export interface QuoteCardProps {
  quote: Quote;
  onNew: () => void;
  onFavorite: () => void;
}

export interface SidebarProps {
  quotesCount: number;
  favorites: Quote[];
}