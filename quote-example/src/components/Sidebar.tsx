import type {SidebarProps} from '../props/types';

function Sidebar({ quotesCount, favorites }: SidebarProps) {
  return (
    <>
  <div className="fixed top-4 left-4 bg-orange-800 text-white px-4 py-2 rounded-lg shadow">Quotes: {quotesCount}</div>
  <div className="fixed top-4 right-4 bg-orange-800 text-white px-4 py-2 rounded-lg shadow">♡ Favorites ({favorites.length}/5)</div>
    </>
  );
}

export default Sidebar;