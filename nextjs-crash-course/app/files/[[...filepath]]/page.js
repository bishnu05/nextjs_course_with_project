export default async function File({ params }) {
  const { filepath } = await params;
  console.log("await params==>", await params);
  return <div>File url = /{filepath?.join("/")}</div>;
}
