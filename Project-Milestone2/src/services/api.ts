export const fetchProducts = async () => {
  const response = await fetch('https://api.platzi.com/products');
  const data = await response.json();
  return data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch('https://api.platzi.com/users', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.ok;
};
