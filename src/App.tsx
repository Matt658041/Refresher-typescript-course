import CourseGoal from "./components/CourseGoal";
import "./App.css";
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals" }} >
        <h1>Course Goals</h1>
       
      </Header>
      <CourseGoal title="Learn TypeScript">
        <p>Learn it from the ground up </p>
        
        </CourseGoal>
    </main>
  );
}

export default App;
