'use client'
import React, { useState, useEffect } from "react";
import CircularProgressBar from "./CircularProgressBar";
import { useWorkoutContext } from "@/utils/useWorkoutContext"; 

const Dashboard = () => {
    const { state } = useWorkoutContext();
    const [caloriesTaken, setCaloriesTaken] = useState(2000);
    const [dailyCalorieGoal, setDailyCalorieGoal] = useState(2000);
    const [sleepHours, setSleepHours] = useState(6);

  const storedWorkoutsCompleted = state.completedWorkouts.length;

  const getLocalStorageItem = (key, defaultValue) => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? parseInt(storedValue) : defaultValue;
    }
    return defaultValue;
  };

  const caloriesLeft = dailyCalorieGoal - caloriesTaken;

  useEffect(() => {
   setCaloriesTaken( getLocalStorageItem("caloriesTaken", 2000));
   setDailyCalorieGoal(getLocalStorageItem("dailyCalorieGoal", 2000));
   setSleepHours(getLocalStorageItem("sleepHours", 6))
  }, [])
  

  useEffect(() => {
    window.localStorage.setItem("workoutsCompleted", storedWorkoutsCompleted.toString());
  }, [storedWorkoutsCompleted]);
  
  useEffect(() => {
    window.localStorage.setItem("caloriesTaken", caloriesTaken.toString());
  }, [caloriesTaken]);
  
  useEffect(() => {
    window.localStorage.setItem("dailyCalorieGoal", dailyCalorieGoal.toString());
  },[dailyCalorieGoal]);

  useEffect(() => {
    window.localStorage.setItem("sleepHours", sleepHours.toString());

  },[sleepHours]);
  
  return (
    <div className="flex flex-wrap justify-around items-stretch mt-4">
      <div className="flex-1 m-4 p-9 bg-purple-200 rounded-md shadow-md text-center">
        <h3 className="text-lg font-thick mb-2">{"Today's workout progress"}</h3>
        <CircularProgressBar percent={(storedWorkoutsCompleted / 10) * 100} />
        <p
          className={`text-md mt-4 items-center ${
            storedWorkoutsCompleted > 0 ? "text-green-500" : "text-orange-500"
          }`}
        >
          {(storedWorkoutsCompleted === 10 && "All workouts completed 🎉😎") || `${storedWorkoutsCompleted} completed`}
        </p>
      </div>

      <div className="flex-1 m-4 p-9 bg-purple-200 rounded-md shadow-md text-center">
        <h3 className="text-lg font-thick mb-2">
          Daily Calories Goal:{" "}
          <input
            type="number"
            value={dailyCalorieGoal}
            onChange={(e) => setDailyCalorieGoal(parseInt(e.target.value))}
            className="rounded-full w-20 text-center p-1 bg-gray-100"
          />{" "}
          cals💪
        </h3>
        <h3 className="text-lg pt-4 font-thick border-t border-black">Calories Taken 😋</h3>
        <input
          type="number"
          value={caloriesTaken}
          onChange={(e) => setCaloriesTaken(parseInt(e.target.value))}
          className={`text-2xl font-italic text-center rounded-full bg-gray-100 w-28 p-1 ${
            caloriesTaken > dailyCalorieGoal ? "text-red-500" : "text-green-500"
          }`}
        />
        <div className="mt-2 border-t border-black">
          <h3 className="text-lg font-thick mt-2">Calories left 🫠</h3>
          <p
            className={`text-2xl font-italic items-center ${
              caloriesLeft > 0 ? "text-orange-500" : "text-red-500"
            }`}
          >
            {`${caloriesLeft} cals`}
          </p>
        </div>
      </div>

      <div className="flex-1 m-4 p-9 bg-purple-200 rounded-md shadow-md text-center">
        <h3 className="text-lg font-thick p-6">Sleep Hours</h3>
        <input
          type="number"
          value={sleepHours}
          onChange={(e) => setSleepHours(parseInt(e.target.value))}
          className="text-center rounded-full bg-gray-100 w-16 p-1"
        />
        <div
          className={`m-4 text-center ${
            sleepHours < 4
              ? "text-red-500"
              : sleepHours < 6
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          {sleepHours < 4
            ? "Poor Sleep 👀"
            : sleepHours < 6
            ? "Average Sleep 🌟"
            : "Good Sleep ❤️"}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
