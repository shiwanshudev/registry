import type { PackageSummary } from "../types/packageSummary";
interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
}

export default async function (term: string): Promise<PackageSummary[]> {
  const API_URL = `https://registry.npmjs.org/-/v1/search?text=${term}`;
  const res = await fetch(API_URL);
  const data: SearchResponse = await res.json();
  return data.objects.map(
    // Destructure syntax
    ({ package: { name, version, description, keywords } }) => {
      return {
        name,
        version,
        description,
        keywords,
      };
    }
  );
}
