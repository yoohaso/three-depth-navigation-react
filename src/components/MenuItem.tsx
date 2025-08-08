interface MenuItemProps {
  id: string;
  title: string;
  onHover: (id: string) => void;
}

export function MenuItem({ id, title, onHover }: MenuItemProps) {
  return (
    <li onFocus={() => onHover(id)} onPointerMove={() => onHover(id)} style={{ cursor: 'pointer' }}>
      {title}
    </li>
  );
}
