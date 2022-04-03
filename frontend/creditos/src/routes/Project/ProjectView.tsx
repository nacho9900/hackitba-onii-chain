import { Profile, Project, ProjectType } from "src/types";
import { Profile as ProfileComponent } from "../../componets/Profile/Profile";
import "./ProjectView.scss";

const project: Project = {
  id: 3,
  name: 'Artesanías',
  description: "Un juego de tres en raya, calendario de escritorio y bloques ABC de madera hechos a mano sin acabados artificiales y desperdicio “0”. Solo 100 piezas disponibles.",
  createdOn: new Date(),
  startOn: new Date(),
  invested: 0,
  earning: 0,
  quantity: 100,
  category: 'Artesanía',
  type: ProjectType.Product,
  imageUrl: "https://ksr-ugc.imgix.net/assets/015/224/684/620baaa681d2c1841ab3fe0993c6915a_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1485368631&auto=format&frame=1&q=92&s=d0f2c993c02b6367a4dd7ccdb0b8af44"
};

const PROFILE: Profile = {
  name: "Leonel Messi",
  bio: "Jugador de futbol 🇦🇷 amateur en Colegiales. Papa de 3 hijos y un perro.",
  imageUrl:
    "https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1",
  scoring: 7,
  location: "Paris, Francia 🇫🇷",
};

const ProjectView = () => {

  return (
    <div className="row">
      <div className="col-md-3" style={{marginLeft:'100px', marginRight: '100px'}}>
        <ProfileComponent {...PROFILE} clickable={true}></ProfileComponent>
      </div>
      <div className="app col-md-7">
        <div className="details" key={project.id}>
          <div className="big-img">
            <img src={project.imageUrl} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{project.name}</h2>
              <span>${project.earning}</span>
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