import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const AddTaskForm = () => {
    const [task, setTask] = useState({
        name: '',
        projectId: ''
    });

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:4567/tasks', task);
            setTask({ name: '', projectId: '' });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h3>Adicionar Tarefa</h3>
                    <TextField
                        fullWidth
                        label="Nome"
                        name="name"
                        value={task.name}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="ID do Projeto"
                        name="projectId"
                        value={task.projectId}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit">
                        Adicionar
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default AddTaskForm;

