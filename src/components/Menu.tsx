import type { MenuItem } from '../api/type';
import { MenuList } from './MenuList';

interface MenuProps {
  menu: MenuItem[];
}

export function Menu({ menu }: MenuProps) {
  if (menu) {
    return (
      <div style={{ display: 'flex' }}>
        <MenuList menu={menu} />
      </div>
    );
  }

  return <></>;
}
