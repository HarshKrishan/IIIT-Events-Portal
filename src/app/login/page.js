import { redirect } from "next/navigation";
import Form from "./Form";
import { getServerSession } from "next-auth";

export async function Page() {
   const session = await getServerSession();

   if(session){
      redirect("/dashboardAdmin");
   }
  return (
    <>
      <Form/>
    </>
  );
}

export default Page