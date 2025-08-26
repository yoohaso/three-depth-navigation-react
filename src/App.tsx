import { useEffect, useState } from 'react';
import './App.css';
import { Menu } from './components/Menu';
import { NavigationBar } from './components/NavigationBar';
import type { MenuItem } from './api/type';
import { fetchMenu } from './api/menu';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [menu, setMenu] = useState<MenuItem[] | null>(null);
  const subMenu = menu?.find(data => data.id === selectedId)?.children || [];

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchMenu();
        setMenu(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, []);

  return (
    <div onMouseLeave={() => setSelectedId(null)}>
      {menu && (
        <NavigationBar
          onSelect={id => setSelectedId(id)}
          selectedId={selectedId}
          navigation={menu}
        />
      )}
      {selectedId && subMenu.length > 0 && <Menu menu={subMenu} />}
    </div>
  );
}

export default App;
