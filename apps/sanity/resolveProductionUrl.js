// Any random string, must match SANITY_PREVIEW_SECRET in the Next.js .env.local file
const previewSecret = "6fa7ad39c2b79b2399e047e52df62fa1bcaf562a";

// Replace with your deployed studio when you go live
const remoteUrl = `https://rbto-joeypt2-121f37ff87.vercel.app`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const previewUrl = new URL(baseUrl);

  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);

  let slug = doc?.slug?.current;
  if (!slug || slug === "") {
    slug = '/';
  }

  previewUrl.searchParams.append(`slug`, slug);

  const isHomePage = doc?.slug?.current?.length === 1;
  const stringyUrl = previewUrl.toString();

  // We need to remove the initial slash from the slug in the generation otherwise the preview breaks
  // If it's the homepage, we can just use the slash
  return isHomePage ? stringyUrl : stringyUrl.replace("%2F", "");
}
