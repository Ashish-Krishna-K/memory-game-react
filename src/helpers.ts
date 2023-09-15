const generateRandomId = () => Math.floor(Math.random() * 100);

export function generateIdArray() {
  const idArray = new Set<number>();
  while (idArray.size < 12) {
    idArray.add(generateRandomId() || 1);
  }
  return Array.from(idArray);
}

export function capitalize(input: string) {
  return input[0].toUpperCase() + input.slice(1);
}
