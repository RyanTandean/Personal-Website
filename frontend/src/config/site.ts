const configuredSiteUrl =
  import.meta.env.VITE_SITE_URL ?? "https://ryantandean.com";

// Keep canonical URLs stable (no trailing slash duplication).
export const SITE_URL = configuredSiteUrl.replace(/\/+$/, "");
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
