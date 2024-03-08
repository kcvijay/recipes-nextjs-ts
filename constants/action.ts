export async function getAllRecipies() {
  const res = await fetch('https://dummyjson.com/recipes?limit=0&skip=0');
  const data = await res.json();
  return data;
}

export async function getRecipeById(id: string) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();
  return data;
}
