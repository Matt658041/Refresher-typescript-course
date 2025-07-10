import CourseGoal from "./components/CourseGoal";
import "./App.css";
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header";
import { useState } from "react";

type CourseGoal = {
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
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}> Add Goal</button>
      <ul>
          {goals.map((goal) => (
        <li className="goal-item">
            <CourseGoal key={goal.id} title={goal.title}>
              {goal.description}
            </CourseGoal>
        </li>
          ))}
      </ul>
      <CourseGoal title="Learn TypeScript">
        <p>Learn it from the ground up </p>
      </CourseGoal>
    </main>
  );
}

export default App;
