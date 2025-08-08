import type { FlattenMenu, MenuItem } from './type';

export function flattenMenu(menu: MenuItem[]) {
  const flattenMenu: FlattenMenu = {};

  function processItem(item: MenuItem, depth = 0) {
    const childrenIds = item.children ? item.children.map(child => child.id) : [];

    flattenMenu[item.id] = {
      id: item.id,
      title: item.title,
      children: childrenIds,
      depth,
    };

    if (item.children && item.children.length > 0) {
      item.children.forEach(item => processItem(item, depth + 1));
    }
  }

  menu.forEach(item => processItem(item));
  return flattenMenu;
}
