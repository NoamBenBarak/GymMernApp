import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'

export default function WorkoutDetails({workout}) {
  const {dispatch} = useWorkoutsContext()

  const hanldeClick = async () => {
    const repsonse = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
    })
    const json = await repsonse.json()
    if(repsonse.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg):</strong>{workout.load}</p>
        <p><strong>Reps:</strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span className="material-symbols-outlined" onClick={hanldeClick}>delete</span>
    </div>
  )
}
