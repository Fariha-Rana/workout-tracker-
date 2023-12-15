'use client'
import Image from "next/image";
import { useWorkoutContext } from "@/utils/useWorkoutContext";
const workouts = [
  { id: 1, name: "Push-ups", reps: 25, image: "/pushup.png" },
  { id: 2, name: "Sqauts", reps: 30, image: "/squats.jpg" },
  { id: 3, name: "Sit-ups", reps: 30, image: "/situp.jpg" },
  { id: 4, name: "Plank", reps: 35, image: "/plank.jpg" },
  { id: 5, name: "Elbow-Plank", reps: 35, image: "/elbowPlank.jpg" },
  { id: 6, name: "Mountain Climber", reps: 35, image: "/mountain.jpg" },
  { id: 7, name: "Jumping Jacks", reps: 35, image: "/jumpingjacks.jpg" },
  { id: 8, name: "lunges", reps: 35, image: "/lunges.png" },
  { id: 9, name: "Burpees", reps: 35, image: "/burpees.jpg" },
  { id: 10, name: "Glute Bridge", reps: 35, image: "/bridges.jpg" },
];

const WorkoutList = () => {
  const { state, dispatch } = useWorkoutContext();

  const handleCheckboxChange = (workoutId) => {
    dispatch({ type: "TOGGLE_WORKOUT", payload: workoutId });
  };

  return (
    <div className="m-4 p-6 bg-purple-200 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-purple-800">
        Workout Plans
      </h2>
      <div className="flex flex-wrap">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4`}
            style={{
              filter: state.completedWorkouts.includes(workout.id)
                ? "blur(2px)"
                : "none",
              opacity: state.completedWorkouts.includes(workout.id) ? 0.7 : 1,
            }}
          >
            <Image
              priority
              width={400}
              height={400}
              src={workout.image}
              alt={workout.name}
              className="object-cover mb-2 rounded-md"
            />
           <div className="mt-2">
           <h3 className="text-lg font-italic">{workout.name}</h3>
            <p className="text-md font-italic">{`Reps: ${workout.reps}`}</p>
            <input
              type="checkbox"
              id={`workout-${workout.id}`}
              checked={state.completedWorkouts.includes(workout.id)}
              onChange={() => handleCheckboxChange(workout.id)}
              className="mr-2 bg-slate-400"
            />
            <label className="text-sm" htmlFor={`workout-${workout.id}`}>
              Mark as Done
            </label>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
