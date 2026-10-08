import { getLinkHost, isHostVisible } from "./getLinkHost";

describe("getLinkHost", () => {
  it("drops the protocol, www and path", () => {
    expect(getLinkHost("https://www.caplin.com/solutions/post-trade")).toBe("caplin.com");
  });

  it("keeps subdomains", () => {
    expect(getLinkHost("https://kudos.mullenlowegroup.com/")).toBe("kudos.mullenlowegroup.com");
  });

  it("can keep the path without a trailing slash", () => {
    expect(getLinkHost("https://www.linkedin.com/in/someone/", true)).toBe("linkedin.com/in/someone");
  });
});

describe("isHostVisible", () => {
  it("detects links that already show their address", () => {
    expect(isHostVisible("seneca-control.com", "seneca-control.com")).toBe(true);
    expect(isHostVisible("Kudos", "kudos.mullenlowegroup.com")).toBe(false);
  });
});
