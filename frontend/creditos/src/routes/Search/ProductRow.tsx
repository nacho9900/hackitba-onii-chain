import { Project } from "src/types";


const ProductRow = (project: Project) => {
    return (
        <div className="row product" style={{backgroundColor: 'white'}}>
          <div className="col-md-2">
            <img src={project.imageUrl} alt="Sample Image" height="150" />
          </div>
          <div className="col-md-8 product-detail">
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <p>{project.category}</p>
          </div>
          <div className="col-md-2 product-price">
            {project.earning}
            {project.invested}
          </div>
        </div>
      );
}

export default ProductRow;