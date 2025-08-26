export const fetchMenu = async () => {
  const response = await fetch('https://menu-mock-api.vercel.app/api/menu');
  const data = await response.json();
  return data.data;
};
