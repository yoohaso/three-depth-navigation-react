import { useState } from 'react';
import './App.css';
import { Menu } from './components/Menu';
import { NavigationBar } from './components/NavigationBar';

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div onMouseLeave={() => setSelectedId(null)}>
      <NavigationBar onSelect={id => setSelectedId(id)} selectedId={selectedId} />
      {selectedId && <Menu id={selectedId} />}
    </div>
  );
}

export default App;
