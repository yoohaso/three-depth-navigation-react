import { Navigation } from './Navigation';

interface NavigationBarProps {
  onSelect: (id: string) => void;
  selectedId: string | null;
  navigation: { id: string; title: string }[];
}

export function NavigationBar({ onSelect, selectedId, navigation }: NavigationBarProps) {
  return (
    <div style={{ display: 'flex' }}>
      {navigation.map(data => (
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
