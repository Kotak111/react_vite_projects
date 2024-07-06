import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../Firebase';

function ViewUser(props) {
  const [todos, setTodos] = useState([]);
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
    return (
       <>
            <div className="container">
                <table border={1}>
                    <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>action </th>
                    </thead>

                    <tbody>
                        {
                            todos.map((todo , index)=>{
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{todo.todo}</td>
                                            <Link onClick={() => handleUpdate(todo)} className="btn btn-warning">Edit</Link>
                                            <button onClick={() => handleDelete(todo)} className="btn btn-danger">delete</button>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
       </>
    );
}

export default ViewUser;