export const getAllUsers = (): any => {
  try {
    return Object.keys(localStorage);
  } catch (err) {
    return [];
  }
};
