import { Box, BottomNavigation, BottomNavigationAction, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { Home, AddCircle, ListAltOutlined } from '@mui/icons-material';
import EmployeesTable from "./components/EmployeesTable";
import DepartmentsTable from "./components/DepartmentTable";
import AddEmployeesForm from "./components/AddEmployeesForm";
import TasksTable from "./components/TasksTable";
import AddTask from "./components/AddTask";



function App() {
  const [value, setValue] = useState<string>('home');

  const handleChange = (event: SyntheticEvent<Element, Event>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100vw', position: 'fixed', top: "0", background: "#f6f6f6" }}>
        <BottomNavigation style={{ margin: 'auto', width: '20vw', background: "#f6f6f6" }} value={value} onChange={handleChange} showLabels >
          <BottomNavigationAction label="Home" value="home" icon={<Home />} />
          <BottomNavigationAction label="Tabelas" value="tables" icon={<ListAltOutlined />} />
          <BottomNavigationAction label="Adicionar" value="add" icon={<AddCircle />} />
          {/* <BottomNavigationAction label="Search" value="search" icon={<Search />} /> */}
          {/* <BottomNavigationAction label="Edit" value="edit" icon={<Edit />} /> */}
          {/* <BottomNavigationAction label="Delete" value="delete" icon={<Delete />} /> */}
        </BottomNavigation>
      </Box>
      {value === "home" && (
        <div style={{ width: "100vw" }}>
          <div style={{
            marginTop: '40px',
            color: "black", width: "80vw", margin: "auto", display: 'flex', flexDirection: "column", alignItems
              : 'center', justifyContent: "center"
          }}>
            <Typography variant="h4" align="center" gutterBottom>
              Bem-vindo Projeto de Assessment de Java com Spark
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Este projeto tem como objetivo mostrar a implementação de uma aplicação(CRUD) back-end utilizando Spark Java.
              Com ele, você poderá adicionar, editar, ver e excluir funcionários e departamentos de forma eficiente e organizada.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              No front-end foi utilizado React, Vite e MaterialUI para fornecer uma experiência de usuário intuitiva e de alto desempenho.
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Sobre mim!
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Olá, meu nome é João Vitor Pereira de Souza e tenho 21 anos.
              Sou aluno do curso de Engenharia de Software do Instituto Infnet <br />
              <b> Professor Reponsável: Elberth Moraes</b>
            </Typography>
            <ul>
              <a target="_blank" href="https://github.com/joaovsz/spark-at">
                <li> Repositório Back-end</li>
              </a>
              <a target="_blank" href="https://github.com/joaovsz/spark-at-landing">
                <li> Repositório Front-end</li>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/joao-vitorsouza/">
                <li>Linkedin</li>
              </a>
              <a target="_blank" href="https://joaovsz.netlify.app">
                <li>Portfolio</li>
              </a>
            </ul>
          </div>

        </div>

      )
      }
      {value === "tables" && <div className="main" style={{ textAlign: "center", width: "calc(50vw - 2rem)", display: "flex", flexDirection: "column", justifyContent: "left", padding: "1rem", margin: 'auto' }}>
        <h3 style={{ color: "black" }}>Colaboradores Cadastrados</h3>
        <EmployeesTable />
        <h3 style={{ color: "black" }}>Departamentos</h3>
        <DepartmentsTable />
        <h3 style={{ color: "black" }}>Tarefas em Andamento</h3>
        <TasksTable />
      </div>}

      {value === "add" &&
        (<div style={{ width: "100vw" }}>
          <div style={{
            marginTop: '40px',
            color: "black", width: "80vw", margin: "auto", display: 'flex', flexDirection: "column", alignItems
              : 'center', justifyContent: "center"
          }}><AddEmployeesForm />
            <AddTask /></div>
        </div>
        )
      }

      {/* <div className="main" style={{ width: "40vw", display: "flex", flexDirection: "column", justifyContent: "left", padding: "1rem" }}>
        
      </div> */}
    </>
  )
}

export default App
