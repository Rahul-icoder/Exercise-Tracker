import Axios from "axios";
import {Link} from "react-router-dom";
import "./style/list.css"
import React, { useEffect, useState } from "react";

const List = () => {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const results = await Axios.get(
      "http://localhost:5000/exercise/exercise_list"
    );
    console.log(results);
    setNote(results.data);
  };

  const delete_record = async(id)=>{
     await Axios.delete(`http://localhost:5000/exercise/delete/${id}`);
     loadUser();
  }
  return (
    <>
      <div className="showList">
      <h1>Welcome to List Page</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Description</th>
              <th>Control</th>
            </tr>
          </thead>
          {notes.map((note, index) => (
            <tbody>
              <tr>
                <td>{index+1}</td>
                <td>{note.username}</td>
                <td>{note.description}</td>
                <td><Link to={`/update/${note._id}` } className="nav_edit">Edit</Link>
                <Link onClick={() => delete_record(note._id)} className="nav_delete">Delete</Link></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default List;
