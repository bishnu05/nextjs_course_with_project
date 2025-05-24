import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blogID } = await params;
  let NewblogID = typeof(blogID)
  console.log("hi",NewblogID)
  // if (NewblogID == "string") {
  //   return notFound();
  // }
  if (!/^\d+$/.test(blogID)) {
  return notFound();
}

  return {
    title: `Blog ${blogID}`,
  };
}

export default async function Blog({ params }) {
  const { blogID } = await params;
  return <div>Blog {blogID}</div>;
}
