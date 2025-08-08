import { useState } from 'react';
import type { FlattenMenu } from '../api/type';
import { MenuItem } from './MenuItem';

interface MenuListProps {
  itemIds: string[];
  menuById: FlattenMenu;
}

export function MenuList({ itemIds, menuById }: MenuListProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const childIds = selectedId ? menuById[selectedId].children : [];

  return (
    <div style={{ display: 'flex' }}>
      <ul
        style={{
          border: '1px solid #ffffff',
          width: '200px',
          height: '200px',
          padding: '0 20px',
          boxSizing: 'border-box',
        }}
      >
        {itemIds &&
          itemIds.map(id => (
            <MenuItem
              key={id}
              id={id}
              title={menuById[id].title}
              onHover={id => setSelectedId(id)}
            />
          ))}
      </ul>
      {selectedId && childIds.length > 0 && <MenuList itemIds={childIds} menuById={menuById} />}
    </div>
  );
}
