import type { FlattenMenuItem } from '../api/type';
import { MenuItem } from './MenuItem';

interface MenuListProps {
  menu: FlattenMenuItem[];
}

export function MenuList({ menu }: MenuListProps) {
  return (
    <ul
      style={{
        border: '1px solid #ffffff',
        width: '200px',
        height: '200px',
        padding: '0 20px',
        boxSizing: 'border-box',
      }}
    >
      {menu.map(item => (
        <MenuItem key={item.id} title={item.title} />
      ))}
    </ul>
  );
}
