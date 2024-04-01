import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { useEmployees } from '../Hooks';




const EmployeesTable = () => {
    const { data: employees } = useEmployees();


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="employees table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Nome</TableCell>
                        <TableCell align="left">Departmento</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees && employees.map((employee) => (
                        <TableRow key={employee.id}>
                            <TableCell component="th" scope="row">{employee.id}</TableCell>
                            <TableCell align="left">{employee.name}</TableCell>
                            <TableCell align="left">{employee.departmentId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeesTable;
