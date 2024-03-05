import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>
        Hola mundo&nbsp;
      </p>
      <div>
        <Link href="/users">Ver usuarios</Link>
      </div>
    </main>
  );
}
