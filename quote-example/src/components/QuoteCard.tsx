import type {QuoteCardProps} from '../props/types';

function QuoteCard({ quote, onNew, onFavorite }: QuoteCardProps) {
  return (
      <div className="quote-card">
        <div className="quote-card-actions">
          <button onClick={onFavorite} className="quote-btn">♡ Add to Favorites</button>
          <button onClick={onNew} className="quote-btn">↻ New Quote</button>
        </div>
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">— {quote.author}</p>
      </div>
  );
}

export default QuoteCard;