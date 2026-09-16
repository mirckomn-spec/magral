import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site py-24 text-center">
      <h1 className="text-4xl font-semibold text-navy">Página não encontrada</h1>
      <p className="mt-4 text-slate">O endereço não existe ou foi movido.</p>
      <Link href="/" className="mt-6 inline-block text-accent">
        Voltar ao início
      </Link>
    </section>
  );
}
