'use client'
import Dashboard from "@/component/Dashboard";
import WorkoutList from "@/component/WorkoutList";
export default function Home() {
  if (typeof window == 'undefined') return null;
  return (
    <main className="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-zinc-400 to-purple-500">
      <h1 className="text-center font-semibold text-2xl pt-8">
        <span className="text-center font-semibold text-2xl pt-8 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
        {"Hii, there! Have a nice Fit Day "}
        </span>
        <span
          role="img"
          aria-label="Smiling Emoji"
          className="inline-block"
        >
          😊
        </span>
      </h1>

      <Dashboard />
      <WorkoutList />
    </main>
  );
}
