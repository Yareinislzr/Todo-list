import { useState } from "react";
import { Listado } from "./componentes/Listado";
import { Formulario } from "./componentes/Formulario";
import { Box } from "@mui/material";
import { lista } from "./componentes/data";

function App() {
  const [todos, setTodos] = useState(lista);
  const [input, setInput] = useState("");
  const [editar, setEditar] = useState();

  const deleteItem = (id) => {
    console.log(id);
    return setTodos([...todos].filter((item) => item.id != id));
  };

  const addTodo = (newItem) => {
    if (editar) {
      setTodos(
        todos.map((item) => {
          if (item.id === editar) {
            item.tarea = newItem;
          }
          return item;
        })
      );
      setEditar("");
    } else {
      let newTodo = { id: +new Date(), tarea: newItem };
      setTodos([newTodo, ...todos]);
    }
  };

  const editarItem = (id) => {
    const cambio = todos.find((item) => item.id == id);
    setInput(cambio.tarea);
    setEditar(id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        pt: "80px",
        width: "100%",
      }}
    >
      <Formulario
        addTodo={addTodo}
        input={input}
        setInput={setInput}
        setEditar={setEditar}
        editar={editar}
      />
      {todos.map((item) => (
        <Listado
          key={item.id}
          todo={item}
          deleteItem={deleteItem}
          editarItem={editarItem}
        />
      ))}
    </Box>
  );
}

export default App;
