import { useState } from "react";
import Header from  './components/Header';
import Filters from './components/Filter';
import QuoteCard from './components/QuoteCard';
import Sidebar from './components/Sidebar';

import type { Quote } from "./props/types";
const quotes = [
{ text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Motivation" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett", category: "Success" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "Life" },
  { text: "The unexamined life is not worth living.", author: "Socrates", category: "Wisdom" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt", category: "Motivation" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle", category: "Wisdom" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Wisdom" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar", category: "Wisdom" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair", category: "Success" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", category: "Motivation" },
  { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis", category: "Motivation" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs", category: "Life" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela", category: "Wisdom" },
];

import { useEffect } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);

  // Cambia la nota al cambiar la categoría
  useEffect(() => {
    const filtered = selectedCategory === "All"
      ? quotes
      : quotes.filter(q => q.category === selectedCategory);
    if (filtered.length > 0) {
      setCurrentQuote(filtered[Math.floor(Math.random() * filtered.length)]);
    }
  }, [selectedCategory]);

  const handleNewQuote = () => {
    const filtered = selectedCategory === "All"
      ? quotes
      : quotes.filter(q => q.category === selectedCategory);
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    setCurrentQuote(random);
  };

  const isFavorite = favorites.some(fav => fav.text === currentQuote.text && fav.author === currentQuote.author);

  const handleRemoveFavorite = (quote: Quote) => {
    setFavorites(favorites.filter(fav => fav.text !== quote.text || fav.author !== quote.author));
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.text !== currentQuote.text || fav.author !== currentQuote.author));
    } else {
      if (favorites.length < 5) {
        setFavorites([...favorites, currentQuote]);
      }
    }
  };

  return (
    <div className="app-bg">
      <Sidebar 
        quotesCount={quotes.length} 
        favorites={favorites} 
        onShowFavorites={() => setShowSidebar(true)}
      />
      <main className="app-main">
        <Header />
        <Filters selected={selectedCategory} setSelected={setSelectedCategory} />
        <QuoteCard 
          quote={currentQuote} 
          onNew={handleNewQuote} 
          onFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      </main>
      {showSidebar && (
        <div className="favorites-panel-bg" onClick={() => setShowSidebar(false)} />
      )}
      <aside className={`favorites-panel${showSidebar ? ' open' : ''}`}>
        <div className="favorites-panel-header">
          <span>Favoritos ({favorites.length}/5)</span>
          <button className="close-btn" onClick={() => setShowSidebar(false)}>&times;</button>
        </div>
        <div className="favorites-list">
          {favorites.length === 0 ? (
            <p className="favorites-empty">No favorites yet.</p>
          ) : (
            favorites.map((fav, idx) => (
              <div className="favorite-item" key={fav.text + fav.author + idx}>
                <div>
                  <span className="favorite-quote">"{fav.text}"</span>
                  <span className="favorite-author">— {fav.author}</span>
                </div>
                <button className="remove-fav-btn" onClick={() => handleRemoveFavorite(fav)} title="Remove from favorites">&times;</button>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  );
}

export default App;