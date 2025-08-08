import { useEffect, useState } from 'react';
import { fetchFlattenMenu } from '../api/menu';
import type { FlattenMenu } from '../api/type';
import { MenuList } from './MenuList';

// 선택된 네비게이션에 따른 메뉴 정보 보여주기
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

  return (
    <div style={{ display: 'flex' }}>
      {rootIds && menu && <MenuList itemIds={rootIds} menuById={menu} />}
    </div>
  );
}
