import type {QuoteCardProps} from '../props/types';

function QuoteCard({ quote, onNew, onFavorite }: QuoteCardProps) {
  return (
    <div className="quote-card">
      <div className="actions">
        <button onClick={onFavorite}>♡ Add to Favorites</button>
        <button onClick={onNew}>↻ New Quote</button>
      </div>
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">— {quote.author}</p>
    </div>
  );
}

export default QuoteCard;