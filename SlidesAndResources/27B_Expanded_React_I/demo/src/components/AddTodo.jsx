import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);
  // 👉 STEP 13: Create a dispatch using useDispatch


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://todo-api-ur6k.onrender.com/api/todos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({task: todo}),
        }
      );

      const json = await response.json();
      
      if(!response.ok){
        setError(json.errors[0].message);
        return
      }
      // 👉 STEP 14:  dispatch addTodo with json response

    } catch (err) {
      setError(err);
    }

    //reset form
    setTodo("");
  };

  return (
    <section>
      <h2>Add a ToDo</h2>
       {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          To Do:
          <input
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default AddTodo;
