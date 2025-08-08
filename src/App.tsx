import { useState } from 'react';
import './App.css';
import { Menu } from './components/Menu';
import { NavigationBar } from './components/NavigationBar';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <NavigationBar onHover={id => setSelectedId(id)} />
      {selectedId && <Menu id={selectedId} />}
    </>
  );
}

export default App;
