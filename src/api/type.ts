export interface MenuItem {
  id: string;
  title: string;
  children?: MenuItem[];
}

export interface FlattenMenu {
  [id: string]: FlattenMenuItem;
}

export interface FlattenMenuItem {
  id: string;
  title: string;
  children: string[];
  depth: number;
}
