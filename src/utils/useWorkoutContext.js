'use client'
import { useContext } from "react";
import { WorkoutContext } from "./WorkoutProvider";
export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext);
    if (!context) {
      throw new Error("useWorkoutContext must be used within a WorkoutProvider");
    }
    return context;
  };
  