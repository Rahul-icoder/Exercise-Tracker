import Axios from "axios";
import './style/exercise.css'
import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";

const Update = () => {
    const {id} = useParams();
    const [exercise, setExercise] = useState({
      username: "",
      description: ""
    });
      
     
     useEffect(() => {
      loadUser();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const setInput = (e) =>{
      setExercise({...exercise,[e.target.name]:e.target.value})
    }

    const onSubmit = async(e) => {
      e.preventDefault();
      await Axios.post(`http://localhost:5000/exercise/exercise_list/${id}`,exercise);
      
    };

    const loadUser = async () => {
        const results = await Axios.get(
          `http://localhost:5000/exercise/exercise_list/${id}`
        );
        setExercise(results.data);
      };

  console.log(exercise);
  return (
    <div className="wrapper">
      <h1>Welcome to Update Page</h1>
      <form onSubmit={(e)=>onSubmit(e)} className="add_user">
        <div>
          <input type="text" value={exercise.username} name="username" placeholder="username" onChange={(e) =>setInput(e)} />
        </div>
        <div>
          <input type="text" value={exercise.description} name="description" placeholder="Description" onChange={(e) =>setInput(e)} />
        </div>
        <button className="btn">Add Exercise</button>
      </form>
    </div>
  );
};

export default Update;
