interface NavigationProps {
  id: string;
  title: string;
  onHover: (id: string) => void;
}

export function Navigation({ id, title, onHover }: NavigationProps) {
  return (
    <div
      style={{
        width: '80px',
        height: '40px',
        border: '1px solid #ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        cursor: 'pointer',
        margin: '2px',
      }}
      onFocus={() => onHover(id)}
      onPointerMove={() => onHover(id)}
    >
      {title}
    </div>
  );
}
