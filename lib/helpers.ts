export const getAllItems = (): void => {
  const items = Object.keys(localStorage);
  console.log(items);
};