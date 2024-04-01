// useEmployees.tsx
import { useQuery } from 'react-query';

interface Employee {
    id: number;
    name: string;
    departmentId: string;
}

const fetchEmployees = async (): Promise<Employee[]> => {
    const response = await fetch('http://localhost:4567/employees');
    console.log(response.body)
    if (!response.ok) {
        throw new Error('Failed to fetch employees');
    }
    return JSON.parse(JSON.stringify(await response.json()));
};

export const useEmployees = () => {

    return useQuery<Employee[]>('employees', fetchEmployees);
};

interface Project {
    id: number;
    name: string;
    departmentId: string;
}

const fetchProjects = async (): Promise<Project[]> => {
    const response = await fetch('/projects');
    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }
    return response.json();
};

export const useProjects = () => {
    return useQuery<Project[]>('projects', fetchProjects);
};
interface Task {
    id: number;
    name: string;
    projectId: string;
}

const fetchTasks = async (): Promise<Task[]> => {
    const response = await fetch('http://localhost:4567/tasks');
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return JSON.parse(JSON.stringify(await response.json()))
        ;
};

export const useTasks = () => {
    return useQuery<Task[]>('tasks', fetchTasks);
};


interface Department {
    id: number;
    name: string;
    location: string;
}

const fetchDepartments = async (): Promise<Department[]> => {
    const response = await fetch('http://localhost:4567/departments');
    if (!response.ok) {
        throw new Error('Failed to fetch departments');
    }
    return JSON.parse(JSON.stringify(await response.json()));
};

export const useDepartments = () => {
    return useQuery<Department[]>('departments', fetchDepartments);
};