import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export const Listado = ({ todo, deleteItem, editarItem }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "65%",
          border: "1px solid black",
          borderRadius: "7px",
          padding: "2px",
          pl: "6px",
          background: "#e6dddc",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "90%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "540",
            }}
          >
            {todo.tarea}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: "1px",
          }}
        >
          <Box>
            <Button
              size="small"
              color="secondary"
              onClick={() => editarItem(todo.id)}
            >
              <ModeEditIcon />
            </Button>
          </Box>
          <Box>
            <IconButton onClick={() => deleteItem(todo.id)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
