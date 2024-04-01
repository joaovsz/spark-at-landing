import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { useTasks } from '../Hooks';

const TasksTable = () => {
    const { data: tasks } = useTasks();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="tasks table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Id da Tarefa</TableCell>
                        <TableCell align="left">DP Responsável</TableCell>
                        <TableCell align="left">Descrição</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks && tasks.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell component="th" scope="row">{task.id}</TableCell>
                            <TableCell align="left">{task.projectId}</TableCell>
                            <TableCell align="left">{task.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TasksTable;
