import { Project } from "../../types";
import { FC } from "react";
import { Table } from "react-bootstrap";
import { NavigateFunction } from "react-router/lib/hooks";
import { useNavigate } from "react-router-dom";

type ProjectTableProps = {
  projects: Project[];
};

export const ProjectsTable: FC<ProjectTableProps> = ({ projects }) => {
  const navigate = useNavigate();

  const handleOnRowClick = () => {
    navigate("project");
  };

  return (
    <Table striped bordered hover>
      <thead>
        <th>Nombre</th>
        <th>Categoria</th>
        <th>Creado En</th>
        <th>Comenzo En</th>
        <th># Productos</th>
        <th>Inversion</th>
        <th>Ganancia</th>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr onClick={handleOnRowClick} style={{ cursor: "pointer" }}>
            <td>{project.name}</td>
            <td>{project.category}</td>
            <td>{project.createdOn.toISOString()}</td>
            <td>{project.startOn.toISOString()}</td>
            <td>{project.quantity !== undefined ? project.quantity : "-"}</td>
            <td className="text-end">${project.invested}</td>
            <td className="text-end">${project.earning}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
