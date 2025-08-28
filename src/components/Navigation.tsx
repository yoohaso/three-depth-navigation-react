interface NavigationProps {
  id: string;
  title: string;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export function Navigation({ id, title, onSelect, isSelected }: NavigationProps) {
  return (
    <div
      style={{
        width: 'auto',
        height: '40px',
        border: `1px solid ${isSelected ? 'skyblue' : '#ffffff'}`,
        color: isSelected ? 'skyblue' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        cursor: 'pointer',
        margin: '2px',
        padding: '0 8px',
      }}
      onClick={() => onSelect(id)}
    >
      {title}
    </div>
  );
}
