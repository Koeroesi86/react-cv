/** Address to print next to a link: the host, optionally with the path, without protocol and `www.`. */
export const getLinkHost = (url: string, withPath: boolean = false): string => {
  const { hostname, pathname } = new URL(url);
  const path = withPath ? pathname.replace(/\/$/, "") : "";

  return `${hostname.replace(/^www\./, "")}${path}`;
};

/** Links whose text already is the address do not need it repeated. */
export const isHostVisible = (label: string, host: string): boolean => label.includes(host);
