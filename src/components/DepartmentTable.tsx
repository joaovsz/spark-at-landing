import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { useDepartments } from '../Hooks';





const DepartmentsTable = () => {
    const { data: departments } = useDepartments();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="departments table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Nome</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {departments && departments.map((department) => (
                        <TableRow key={department.id}>
                            <TableCell component="th" scope="row">{department.id}</TableCell>
                            <TableCell align="left">{department.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DepartmentsTable;
