import { NavigateFunction, useNavigate } from "react-router-dom";
import { Project } from "src/types";


const goToProyectPage = (navigate: NavigateFunction, projectId: number) => {
  navigate("/proyect", { replace: true });
}


const ProjectRow = (project: Project) => {
  let navigate = useNavigate();

    return (
        <div className="row product" style={{backgroundColor: 'white'}} onClick={(event) => {goToProyectPage(navigate, project.id)}}>
          <div className="col-md-2">
            <img src={project.imageUrl} alt="Sample Image" height="150" />
          </div>
          <div className="col-md-4 product-detail">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p>{project.category}</p>
          </div>
          <div className="col-md-2 product-price">
            <p>Unidades</p>
            <span >{project.quantity}</span>
          </div>
          <div className="col-md-2 product-price">
            <p>Invertido </p>
            <span >{project.earning}</span>
          </div>
          <div className="col-md-2 product-price">
            <p>Ganancia </p>
            <span >{project.invested}</span>
          </div>
        </div>
      );
}

export default ProjectRow;