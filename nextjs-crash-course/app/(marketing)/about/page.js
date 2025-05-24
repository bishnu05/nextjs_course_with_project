import Link from "next/link";
export const metadata = {
  title: "About",
  description: "Technical Agency Details",
};
export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <Link href="/">Home</Link>
    </>
  );
}