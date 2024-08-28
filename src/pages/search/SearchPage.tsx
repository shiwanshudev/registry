import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";

export default function SearchPage() {
  const data = useLoaderData() as SearchLoaderResult;
  console.log(data.searchResults);

  return <div>SearchPage</div>;
}
