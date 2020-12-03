import Axios from "axios";
import './style/exercise.css'
import React,{useState} from "react";

const Exercise = () => {
    const [exercise, setExercise] = useState({
      username: "",
      description: ""
    });
     const {uname,desc,dur} = exercise;
    const setInput = (e) =>{
      setExercise({...exercise,[e.target.name]:e.target.value})
    }

    const onSubmit = async(e) => {
      e.preventDefault();
      await Axios.post("http://localhost:5000/exercise/create_exercise",exercise);
      
    };
  return (
    <div className="wrapper">
      <h1>Welcome to Exercise Page</h1>
      <form onSubmit={(e)=>onSubmit(e)} className="add_user">
        <div>
          <input type="text" value={uname} name="username" placeholder="username" onChange={(e) =>setInput(e)} />
        </div>
        <div>
          <input type="text" value={desc} name="description" placeholder="Description" onChange={(e) =>setInput(e)} />
        </div>
        <button className="btn">Add User</button>
      </form>
    </div>
  );
};

export default Exercise;
