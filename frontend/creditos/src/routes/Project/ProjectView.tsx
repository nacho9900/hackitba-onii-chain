import { Profile, Project, ProjectType } from "src/types";
import { Profile as ProfileComponent } from "../../componets/Profile/Profile";
import "./ProjectView.scss";
import { MOCKED_PROFILES, MOCKED_PROJECTS } from "src/mocks/mocks";
import { useParams } from "react-router-dom";


const ProjectView = () => {

  let { projectId } = useParams();

  if (!projectId){
    return <div>Proyecto no encontrado</div>
  }

  const project = MOCKED_PROJECTS[projectId];
  const profile = MOCKED_PROFILES[project.profileId];

  return (
    <div className="row">
      <div className="col-md-3" style={{marginLeft:'100px', marginRight: '100px'}}>
        <ProfileComponent {...profile} clickable={true} profileId={profile.id}></ProfileComponent>
      </div>
      <div className="app col-md-7">
        <div className="details" key={project.id}>
          <div className="big-img">
            <img src={project.imageUrl} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{project.name}</h2>
              <span>Ganancias ${project.earning}</span>
              <span>Inversión ${project.invested}</span>
            </div>

            <p>{project.description}</p>

            {(project.quantity !== undefined && project.quantity > 0) ? <button className="actionButton">Pre-ordenar</button> : null}
            <button className="actionButton">Invertir</button>

          </div>
        </div>
      </div>
    </div>

  );
}

export default ProjectView;