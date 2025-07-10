
import CourseGoal from './CourseGoal'
import { type CourseGoal as CGoal } from '../App';


type CourseGoalListProps = {

    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id} className="goal-item">
          <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  )
}

export default CourseGoalList