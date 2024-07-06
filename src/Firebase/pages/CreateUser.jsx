import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../Firebase';
// import { uid } from "uid";
import { onValue, ref, remove, set, update } from 'firebase/database';
import { uid } from 'uid';
import { Link, useNavigate } from 'react-router-dom';

function CreateUser(props) {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempUuid, setTempUuid] = useState("");


    const handleTodoChange = (e) => {
        setTodo(e.target.value);
      };
      const writeToDatabase = () => {
        const uuid = uid();
        set(ref(db, uuid), {
          todo,
          uuid,
        });
    
        setTodo("");
  
      };
      useEffect(() => {
        onValue(ref(db), (snapshot) => {
          setTodos([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((todo) => {
              setTodos((oldArray) => [...oldArray, todo]);
            });
          }
        });
      }, []);


      const handleDelete = (todo) => {
        remove(ref(db, `/${todo.uuid}`));
      };

      const handleUpdate = (todo) => {
        setIsEdit(true);
        setTempUuid(todo.uuid);
        setTodo(todo.todo);
      };
    
      const handleSubmitChange = () => {
        update(ref(db, `/${tempUuid}`), {
          todo,
          uuid: tempUuid,
        });
    
        setTodo("");
        setIsEdit(false);
      };
    
    return (
        <>
           <div className="col-6 mx-auto shadow my-5 p-5">
        <input type="text" value={todo} onChange={handleTodoChange} className="form-control" placeholder="enter name" />
       
        {isEdit ? (
          <>
            <button onClick={handleSubmitChange} className="btn btn-warning mt-4">Update</button>
            <button className="btn btn-danger mt-4 ms-4"
              onClick={() => {
                setIsEdit(false);
                setTodo("");
              }}
            >
              X
            </button>
          </>
        ) : (
          <button className="btn btn-success mt-4" onClick={writeToDatabase}>submit</button>
        )
        }
    

      </div>
      <div className="container ">
                <table border={1} className='mx-auto table'>
                    <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>action </th>
                    </thead>

                    <tbody>
                        {
                            todos.map((todo , index)=>{
                                return (
                                    <tr>
                                    <td>{index + 1 }</td>  
                                    <td>{todo.todo}</td>
                                    
                                    <button onClick={() => handleDelete(todo)} className="btn btn-warning">delete</button>
                                    <button onClick={() => handleUpdate(todo)} className="btn btn-warning ms-5">Edit</button>
                                </tr>
                                )
                                        
                            })
                        }
                    </tbody>
                </table>
                </div>
        </>
    );
}

export default CreateUser;