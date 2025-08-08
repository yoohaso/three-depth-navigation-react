import { Navigation } from './Navigation';
import { v4 as uuid4 } from 'uuid';

const navigationData = [
  { id: uuid4(), title: 'A' },
  { id: uuid4(), title: 'B' },
];

export function NavigationBar() {
  return (
    <div style={{ display: 'flex' }}>
      {navigationData.map(data => (
        <Navigation key={data.id} title={data.title} />
      ))}
    </div>
  );
}
