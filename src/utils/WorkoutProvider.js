'use client'
import React, { createContext, useReducer, useEffect } from "react";

export const WorkoutContext = createContext();

const initialState = {
  completedWorkouts: JSON.parse(localStorage.getItem("completedWorkouts")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_WORKOUT":
      if (state.completedWorkouts.includes(action.payload)) {
        return { completedWorkouts: state.completedWorkouts.filter((id) => id !== action.payload) };
      } else {
        return { completedWorkouts: [...state.completedWorkouts, action.payload] };
      }
    default:
      return state;
  }
};

export const WorkoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem("completedWorkouts", JSON.stringify(state.completedWorkouts));
    }
  }, [state.completedWorkouts]);

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};

