import React from 'react'
import { ListItem, ListItemText, Checkbox, IconButton, Typography, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoveUp from '@mui/icons-material/MoveUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ToDoItem = ({ id, content, changeStatus, isCompleted, deleteToDo, moveTop, moveDown }) => {
    const markAsDone = () => changeStatus(id);
    const markDoneDesign = isCompleted ? {
        textDecoration: "line-through"
    } : {
        textDecoration: "none"
    }
    const deleteItem = () => deleteToDo(id);

    return (
        <Container>
            <ListItem
                variant="outlined"
                style={{
                    marginTop: 20, backgroundColor: "#ccccb3", color: "white"
                }}>
                <Checkbox onClick={markAsDone}
                    style={{ color: "#636a75", marginRight: 8 }} />
                <ListItemText>
                    <Typography variant="body1" color="#636a75" style={markDoneDesign}>
                        {content}
                    </Typography>
                </ListItemText>

                <IconButton onClick={() => moveTop(id)}>
                    <MoveUp style={{ color: "#636a75" }} />
                </IconButton>
                <IconButton onClick={() => moveDown(id)}>
                    <ArrowDownwardIcon style={{ color: "#636a75" }} />
                </IconButton>

                <IconButton onClick={deleteItem}>
                    <DeleteIcon style={{ color: "#636a75" }} />
                </IconButton>
            </ListItem>
        </Container >
    )
}

export default ToDoItem
