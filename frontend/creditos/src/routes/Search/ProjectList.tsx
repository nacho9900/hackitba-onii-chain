import { ListGroup } from "react-bootstrap";
import { Project, ProjectType } from "src/types";
import ProjectRow from "./ProjectRow";

const items: Project[] = [
    {
      id: 2,
      name: 'Hablalo',
      description: 'App',
      createdOn: new Date(),
      startOn: new Date(),
      invested: 0,
      earning: 0,
      quantity: 10,
      category: 'technology',
      type: ProjectType.Service,
      imageUrl: "https://pbs.twimg.com/profile_images/1128894758003232768/c4aW179f_400x400.png"
    },
    {
      id: 3,
      name: 'Hablalo2',
      description: 'App2',
      createdOn: new Date(),
      startOn: new Date(),
      invested: 0,
      earning: 0,
      quantity: 10,
      category: 'technology',
      type: ProjectType.Service,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU"
    },
    {
        id: 4,
        name: 'Hablalo2',
        description: 'App2',
        createdOn: new Date(),
        startOn: new Date(),
        invested: 0,
        earning: 0,
        quantity: 10,
        category: 'technology',
        type: ProjectType.Service,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU"
      },
      {
        id: 4,
        name: 'Hablalo2',
        description: 'App2',
        createdOn: new Date(),
        startOn: new Date(),
        invested: 0,
        earning: 0,
        quantity: 10,
        category: 'technology',
        type: ProjectType.Service,
        imageUrl: "https://pbs.twimg.com/profile_images/1128894758003232768/c4aW179f_400x400.png"
      },
      {
        id: 4,
        name: 'Hablalo2',
        description: 'App2',
        createdOn: new Date(),
        startOn: new Date(),
        invested: 0,
        earning: 0,
        category: 'technology',
        type: ProjectType.Service,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjIUv61WpvPinWqgTBzYokMrDQUOC80WWig&usqp=CAU"
      }
  ];

const ProjectList = () => {
    return (
        <ListGroup className="container main-content">
        { items.map( (item) => {
            return <ProjectRow {...item}> </ProjectRow>;
          })
        }
      </ListGroup>
      );
}

export default ProjectList;