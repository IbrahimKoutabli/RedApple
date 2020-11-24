
const home = (lang?: string): string => {
  return lang ? `/?lang=${lang}` : `/`;
};
const toronto = (lang?: string): string => {
  return lang ? `/toronto/?lang=${lang}` : `/toronto/`;
};

const vancouver = (lang?: string): string => {
  return lang ? `/vancouver/?lang=${lang}` : `/vancouver/`;
};
const montreal = (lang?: string): string => {
  return lang ? `/montreal/?lang=${lang}` : `/montreal/`;
};
const appRoutes = {
home,
toronto,
vancouver,
montreal
};

export default appRoutes;
