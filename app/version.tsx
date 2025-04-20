import {getPgVersion} from "@/lib/db";

export default async function PostgresVersion() {
  const version = await getPgVersion();
  return <p>{version}</p>;
}
