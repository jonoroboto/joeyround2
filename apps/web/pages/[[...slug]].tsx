import dynamic from "next/dynamic";
import { getClient } from "../lib/sanity.server";
import { usePreviewSubscription } from "../lib/sanity";
import { groq } from "next-sanity";
import { getQueryFromSlug } from "../utils/getQueryFromSlug";

const PageSingle = dynamic(() => import("../components/layouts/pageSingle"));
const ArticleSingle = dynamic(
  () => import("../components/layouts/articleSingle")
);

const filterDataToSingleItem = (data: any, preview: any) => {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
};

export default function Page({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });

  const page = filterDataToSingleItem(previewData, preview);

  const { docType } = data;

  return (
    <div>
      {/* {console.log(data)} */}
      {docType === "homePage" && <PageSingle page={page} />}
      {docType === "page" && <PageSingle page={page} />}
      {docType === "article" && <ArticleSingle page={page} />}
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const client = await getClient(preview);

  // A helper function to work out what query we should run based on this slug
  const { query, queryParams, docType } = getQueryFromSlug(params.slug);

  // Get the initial data for this page, using the correct query
  const pageData = await client.fetch(query, queryParams);
  const page = filterDataToSingleItem(pageData, preview);

  return {
    props: {
      // Pass down if it's preview mode
      preview,
      // Pass down initial content and query
      data: { page, query, queryParams, docType },
    },
  };
}

export async function getStaticPaths() {
  const pageQueries = await getClient().fetch(
    groq`*[_type in ["page", "article"] && defined(slug.current)][].slug.current`
  ) || [];

  // Split the slug strings to arrays (as required by Next.js)
  const paths = [{ params: { slug: [] } }, ...pageQueries.map((slug) => ({
    params: { slug: slug.split("/").filter((p) => p) },
  }))];

  return { paths, fallback: false };
}
