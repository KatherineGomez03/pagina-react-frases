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
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
    const [favorites, setFavorites] = useState<Quote[]>([]);

  const handleNewQuote = () => {
    const filtered = selectedCategory === "All"
      ? quotes
      : quotes.filter(q => q.category === selectedCategory);
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    setCurrentQuote(random);
  };

  const handleAddFavorite = () => {
    if (favorites.length < 5 && !favorites.includes(currentQuote)) {
      setFavorites([...favorites, currentQuote]);
    }
  };

  return (
    <div className="flex min-h-screen bg-orange-50">
      <Sidebar quotesCount={quotes.length} favorites={favorites} />
      <main className="flex-1 flex flex-col items-center justify-center">
        <Header />
        <Filters selected={selectedCategory} setSelected={setSelectedCategory} />
        <QuoteCard 
          quote={currentQuote} 
          onNew={handleNewQuote} 
          onFavorite={handleAddFavorite} 
        />
      </main>
    </div>
  );
}

export default App;