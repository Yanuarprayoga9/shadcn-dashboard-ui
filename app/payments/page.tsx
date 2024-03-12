import { Payment, columns } from "./components/columns";
import { DataTable } from "./components//data-table";
import { payments } from "@/data/table";
import { PageWrapper } from "@/components/page-wrapper";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [...payments];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <PageWrapper headerTitle="Payments">
      <div className="container mx-auto py-10 bg-white">
        <DataTable columns={columns} data={data} />
      </div>
    </PageWrapper>
  );
}
