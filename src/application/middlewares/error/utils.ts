export const parseError = (error: unknown) => {
  const err = error as Error;
  return {
    name: err.name
  };
};
