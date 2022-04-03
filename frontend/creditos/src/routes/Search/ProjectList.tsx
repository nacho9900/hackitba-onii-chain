import { ListGroup } from "react-bootstrap";
import { MOCKED_PROJECTS } from "src/mocks/mocks";
import ProjectRow from "./ProjectRow";

const ProjectList = () => {
    return (
        <ListGroup className="container main-content">
        { Object.keys(MOCKED_PROJECTS).map( (key) => {
            return <ProjectRow {...MOCKED_PROJECTS[key]}> </ProjectRow>;
          })
        }
      </ListGroup>
      );
}

export default ProjectList;