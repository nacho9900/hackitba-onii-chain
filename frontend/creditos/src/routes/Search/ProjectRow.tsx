import { useNavigate } from "react-router-dom";
import { Project } from "src/types";




const ProjectRow = (project: Project) => {
  let navigate = useNavigate();

  const goToProyectPage = (projectId: number) => {
    navigate("/project/" + projectId, { replace: true });
  }

  return (
    <div className="row product" style={{ backgroundColor: 'white' }} onClick={(event) => { goToProyectPage(project.id) }}>
      <div className="col-md-2" >
        <img src={project.imageUrl} alt="Sample Image" height="150" width="180" />
      </div>
      <div className="col-md-4 product-detail" style={{ paddingLeft: '50px' }}>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </div>
      {
        project.quantity !== undefined && project.quantity > 0 ? 
        <div className="col-md-2 product-price">
          <p>Unidades</p>
          <span >{project.quantity}</span>
        </div>
        : null
      }
      <div className="col-md-2 product-price">
        <p>Invertido </p>
        <span >{project.invested}</span>
      </div>
      <div className="col-md-2 product-price">
        <p>Ganancia </p>
        <span >{project.earning}</span>
      </div>
    </div>
  );
}

export default ProjectRow;
