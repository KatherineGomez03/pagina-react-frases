import type { SidebarProps } from '../props/types';

interface SidebarExtendedProps extends SidebarProps {
  onShowFavorites: () => void;
}

function Sidebar({ quotesCount, favorites, onShowFavorites }: SidebarExtendedProps) {
  return (
    <>
      <div className="sidebar-box sidebar-left">Quotes: {quotesCount}</div>
      <button className="sidebar-box sidebar-right" onClick={onShowFavorites}>
        ♡ Favorites ({favorites.length}/5)
      </button>
    </>
  );
}

export default Sidebar;