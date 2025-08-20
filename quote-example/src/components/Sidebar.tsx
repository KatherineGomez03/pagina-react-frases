import type {SidebarProps} from '../props/types';

function Sidebar({ quotesCount, favorites }: SidebarProps) {
  return (
    <>
  <div className="sidebar-box sidebar-left">Quotes: {quotesCount}</div>
  <div className="sidebar-box sidebar-right">♡ Favorites ({favorites.length}/5)</div>
    </>
  );
}

export default Sidebar;