
import CourseGoal from './CourseGoal'
import { type CourseGoal as CGoal } from '../App';
import InfoBox from './InfoBox';
import { type ReactNode } from 'react';


type CourseGoalListProps = {

    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
 if (goals.length === 0) {

  return (
    <InfoBox mode='hint' >
      No goals found. Try adding one!
    </InfoBox>
  )
 }
  
  let warningBox: ReactNode
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity='high' >
        You have more than 4 goals! Consider focusing on fewer goals at a time.
      </InfoBox>
    );
  } else {
    warningBox = null;
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id} className="goal-item">
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              {goal.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGoalList