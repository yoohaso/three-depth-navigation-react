import { useEffect, useState } from 'react';
import { fetchFlattenMenu } from '../api/menu';
import type { FlattenMenu } from '../api/type';
import { MenuList } from './MenuList';

interface MenuProps {
  id: string;
}

export function Menu({ id }: MenuProps) {
  const [menu, setMenu] = useState<FlattenMenu | null>(null);
  const rootIds = menu
    ? Object.entries(menu)
        .filter(([, item]) => item.depth === 0)
        .map(([, item]) => item.id)
    : null;

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchFlattenMenu();
        setMenu(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, [id]);

  if (menu) {
    return (
      <div style={{ display: 'flex' }}>
        {rootIds && <MenuList itemIds={rootIds} menuById={menu} />}
      </div>
    );
  }

  return <></>;
}
