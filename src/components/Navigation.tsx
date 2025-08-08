interface NavigationProps {
  title: string;
}

export function Navigation({ title }: NavigationProps) {
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
    >
      {title}
    </div>
  );
}
