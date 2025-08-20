import type { Quote } from '../props/types';

interface QuoteCardProps {
  quote: Quote;
  onNew: () => void;
  onFavorite: () => void;
  isFavorite: boolean;
}

function QuoteCard({ quote, onNew, onFavorite, isFavorite }: QuoteCardProps) {
  return (
    <div className="quote-card">
      <div className="quote-card-actions">
        <button onClick={onFavorite} className="quote-btn">
          {isFavorite ? '✓ Remove from Favorites' : '♡ Add to Favorites'}
        </button>
        <button onClick={onNew} className="quote-btn">↻ New Quote</button>
      </div>
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">— {quote.author}</p>
    </div>
  );
}

export default QuoteCard;