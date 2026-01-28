import { websiteName } from "@/app/config";
import KfsDocuments from "./KfsDocuments";

export const metadata = {
  title: `Key Facts Statements | Transparent Banking${websiteName}`,
  description:
    "Access MyMonty's essential key facts statements. Find transparent information about our digital banking products & services in Lebanon. View details.",
};

export default function Page() {
  return <KfsDocuments />;
}