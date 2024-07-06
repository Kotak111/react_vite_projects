import React, { useState } from 'react';

function EditUser(props) {
    const [todo, setTodo] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const handleUpdate = (todo) => {
        setIsEdit(true);
        setTempUuid(todo.uuid);
        setTodo(todo.todo);
      };
      const handleTodoChange = (e) => {
        setTodo(e.target.value);
      };
    return (
        <div>
            <div className="col-6 mx-auto shadow my-5 p-5">
        <input type="text" value={todo} onChange={handleTodoChange} className="form-control" placeholder="enter name" />
       
       
          <button className="btn btn-success mt-4" onClick={() => handleUpdate(todo)} >edit </button>
        </div>
        </div>
    );
}

export default EditUser;