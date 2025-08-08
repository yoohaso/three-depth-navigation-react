export interface MenuItem {
  id: string;
  title: string;
  children?: MenuItem[];
}

export type FlattenMenu = Record<string, FlattenMenuItem>;

export interface FlattenMenuItem {
  id: string;
  title: string;
  children: string[];
  depth: number;
}
