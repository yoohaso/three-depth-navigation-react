import type { MenuItem } from '../api/type';
import { MenuList } from './MenuList';

interface MenuProps {
  menu: MenuItem[];
}

export function Menu({ menu }: MenuProps) {
  if (menu) {
    return (
      <div style={{ display: 'flex', width: '100%', height: '200px', border: '1px solid #ffffff' }}>
        <MenuList menu={menu} />
      </div>
    );
  }

  return <></>;
}
