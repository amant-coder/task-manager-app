import Navbar from "@/components/Navbar";
import ClickSpark from "@/components/ClickSpark";
import SplashCursor from "@/components/SplashCursor";

export default function HomePage() {
  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <SplashCursor />
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
    </ClickSpark>
  );
}
