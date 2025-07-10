import CourseGoal from "./components/CourseGoal";
import CourseGoalList from "./components/CourseGoalList";
import "./App.css";
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header";
import { useState } from "react";

// Define the type for a course goal
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "learn React",
        description: "Learn it from the ground up",
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}> Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
      
    </main>
  );
}

export default App;
