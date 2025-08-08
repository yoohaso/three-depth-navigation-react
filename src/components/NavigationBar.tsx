import { Navigation } from './Navigation';
import { v4 as uuid4 } from 'uuid';

const navigationData = [
  { id: uuid4(), title: 'A' },
  { id: uuid4(), title: 'B' },
];

interface NavigationBarProps {
  onSelect: (id: string) => void;
  selectedId: string | null;
}

export function NavigationBar({ onSelect, selectedId }: NavigationBarProps) {
  return (
    <div style={{ display: 'flex' }}>
      {navigationData.map(data => (
        <Navigation
          key={data.id}
          id={data.id}
          title={data.title}
          onSelect={onSelect}
          isSelected={data.id === selectedId}
        />
      ))}
    </div>
  );
}
