import type {QuoteCardProps} from '../props/types';

function QuoteCard({ quote, onNew, onFavorite }: QuoteCardProps) {
  return (
    <div className="bg-white p-8 my-8 mx-auto rounded-xl max-w-xl shadow">
      <div className="flex justify-end gap-2 mb-4">
        <button onClick={onFavorite} className="bg-orange-800 text-white rounded px-3 py-1 hover:bg-orange-700 transition">♡ Add to Favorites</button>
        <button onClick={onNew} className="bg-orange-800 text-white rounded px-3 py-1 hover:bg-orange-700 transition">↻ New Quote</button>
      </div>
      <p className="text-xl italic text-gray-800 mb-2">"{quote.text}"</p>
      <p className="text-right text-gray-600">— {quote.author}</p>
    </div>
  );
}

export default QuoteCard;