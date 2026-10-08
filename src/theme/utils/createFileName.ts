const createFileName = (name: string): string => `${name
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/\s+/g, "-")}-CV`;

export default createFileName;
