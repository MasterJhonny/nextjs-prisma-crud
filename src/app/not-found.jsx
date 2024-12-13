import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex h-[calc(100vh-5rem)] justify-center items-center">
      <div>
        <h2 className="text-2xl font-bold mb-3">Not Found</h2>
        <Link href="/">Volver al inicio</Link>
      </div>
    </section>
  );
};

export default NotFound;
