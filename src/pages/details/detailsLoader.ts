import { getPackage } from "../../api/queries/getPackage";
import type { Params } from "react-router-dom";
import { PackageDetails } from "../../api/types/packageDetails";

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader({
  params,
}: {
  params: Params;
}): Promise<DetailsLoaderResult> {
  const name = params.name;
  if (!name) throw new Error("The package you requested is empty!");
  const details = await getPackage(name);
  return {
    details,
  };
}
