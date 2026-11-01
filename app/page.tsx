import Praca from "../components/Praca";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F1EFE8] px-4 py-10 text-[#2C2C2A]">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold">Explica, Brasil</h1>
        <p className="mb-6 mt-2 text-[#5F5E5A]">
          Toque nos prédios para entender quem manda em quê.
        </p>
        <Praca />
      </div>
    </main>
  );
}
