import { sanityFetch } from "@/sanity/lib/client";
import { CENTER_QUERY } from "@/sanity/lib/queries";

export default async function getHotline() {
  const centerInfor = await sanityFetch({ query: CENTER_QUERY });
  return centerInfor.tel
}