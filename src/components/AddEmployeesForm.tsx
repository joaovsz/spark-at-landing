import { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import axios from 'axios';

const AddEmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: '',
        departmentId: ''
    });

    const handleChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:4567/employees', employee);
            setEmployee({ name: '', departmentId: '' });
        } catch (error) {
            console.error(error);
        }
    };

    return (<>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h3>Adicionar Colaborador</h3>
                    <TextField
                        fullWidth
                        label="Nome"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="ID do Departamento"
                        name="departmentId"
                        value={employee.departmentId}
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

        {/* <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h3>Adicionar Colaborador</h3>
                    <TextField
                        fullWidth
                        label="Nome"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="ID do Departamento"
                        name="departmentId"
                        value={employee.departmentId}
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
        </form> */}
    </>

    );
};

export default AddEmployeeForm;
