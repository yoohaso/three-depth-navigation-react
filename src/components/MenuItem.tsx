interface MenuItemProps {
  title: string;
}

export function MenuItem({ title }: MenuItemProps) {
  return <li style={{ cursor: 'pointer' }}>{title}</li>;
}
