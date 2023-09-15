// function to generate 100 random numbers
const generateRandomId = () => Math.floor(Math.random() * 100);

// function to generate an array of
// 12 random id(numbers)
export function generateIdArray() {
  // Set cannot have duplicate values
  // hence using Set to ensure only
  // unique ids(numbers) are returned.
  const idArray = new Set<number>();
  // because duplicates are not added
  // to the set using a while loop to
  // continue adding id(number) to the
  // set.
  while (idArray.size < 12) {
    // the api returns an error if an id
    // of 0 is provided so ensuring 0 is
    // not added by adding 1 if returned
    // value from generateRandomId is
    // falsy
    idArray.add(generateRandomId() || 1);
  }
  return Array.from(idArray);
}

// function to capitalize(first letter
// uppercase) given string
export function capitalize(input: string) {
  return input[0].toUpperCase() + input.slice(1);
}
