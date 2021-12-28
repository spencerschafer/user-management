export const getAllUsers = (): any => {
  try {
    const items = Object.keys(localStorage);
    console.log(items);
    return items;
  } catch (err) {
    return [];
  }
};
