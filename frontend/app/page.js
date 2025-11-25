import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4">
        <div className="max-w-lg text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Fullstack Demo Dashboard
          </h1>
          <p className="text-slate-300">
            Register or login to manage your tasks and view your profile.
          </p>
        </div>
      </main>
    </>
  );
}
