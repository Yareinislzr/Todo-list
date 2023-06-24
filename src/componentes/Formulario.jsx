import { FormControl, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

export const Formulario = ({ addTodo, input, setInput, setEditar, editar }) => {
  const modificar = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando");
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: "65%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <FormControl fullWidth sx={{ width: "100%" }}>
            <TextField
              fullWidth
              label="Agregar Tarea"
              id="fullWidth"
              type="text"
              value={input}
              onChange={modificar}
              size="small"
            />
          </FormControl>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              type="submit"
              sx={{
                color: "white",
                fontWeight: "600",
                fontFamily: "sans-serif",
              }}
            >
              {editar ? "Actualizar" : "Agregar"}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
