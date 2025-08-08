interface MenuItemProps {
  id: string;
  title: string;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export function MenuItem({ id, title, onSelect, isSelected }: MenuItemProps) {
  return (
    <li
      onClick={() => onSelect(id)}
      style={{ cursor: 'pointer', color: isSelected ? 'skyblue' : 'white' }}
    >
      {title}
    </li>
  );
}
