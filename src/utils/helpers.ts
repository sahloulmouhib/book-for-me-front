export const jointPaths = (paths: string[]) => {
  return `/${paths.join("/")}`;
};

export const capitalizeFirstLetter = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
