import { createClient } from "@sanity/client";

const projectId = "q10qjbs8";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
