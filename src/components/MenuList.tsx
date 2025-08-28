import { useState } from 'react';
import type { MenuItem as MenuItemType } from '../api/type';
import { MenuItem } from './MenuItem';

interface MenuListProps {
  menu: MenuItemType[];
}

export function MenuList({ menu }: MenuListProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const subMenu = menu.find(data => data.id === selectedId)?.children || [];

  return (
    <div style={{ display: 'flex' }} onMouseLeave={() => setSelectedId(null)}>
      <ul
        style={{
          borderRight: '1px solid #ffffff',
          width: '200px',
          height: 'auto',
          padding: '0 20px',
          boxSizing: 'border-box',
        }}
      >
        {menu.map(item => (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            onSelect={id => setSelectedId(id)}
            isSelected={item.id === selectedId}
          />
        ))}
      </ul>
      {selectedId && subMenu.length > 0 && <MenuList menu={subMenu} />}
    </div>
  );
}
