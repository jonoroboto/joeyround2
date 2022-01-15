import { groq } from "next-sanity";

let docType = undefined;

export function getQueryFromSlug(slugArray = []) {
  const docQuery = {
    home: groq`*[_type == "homePage"][0]`,
    article: groq`*[_type == "article" && slug.current == $slug][0]`,
    page: groq`*[_type == "page" && slug.current == $slug][0]`,
    project: groq`*[_type == "project" && slug.current == $slug][0]`,
  };

  if (slugArray.length === 0) {
    return {
      docType: "homePage",
      queryParams: {},
      query: docQuery.home,
    };
  }

  const [slugStart] = slugArray;

  // We now have to re-combine the slug array to match our slug in Sanity.
  let queryParams = { slug: `/${slugArray.join("/")}` };

  // Keep extending this section to match the slug against the docQuery object keys
  if (docQuery.hasOwnProperty(slugStart)) {
    docType = slugStart;
  } else {
    docType = `page`;
  }

  return {
    docType,
    queryParams,
    query: docQuery[docType],
  };
}
