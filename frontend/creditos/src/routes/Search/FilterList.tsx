import { ListGroup } from "react-bootstrap";
import { Filter } from "src/types";
import FilterValues from "./FilterValues";

const filters: Filter[] = [
  {
    name: 'Categorías',
    values: [
      {
        name: 'Tecnología',
        checked: false
      }, 
      {
        name: 'Calzado',
        checked: false
      }, 
      {
        name: 'Servicios',
        checked: false
      }, 
      {
        name: 'Streaming',
        checked: false
      }, 
  ]
  },
  {
    name: 'Países',
    values: [
      {
        name: 'Argentina',
        checked: false
      }, 
      {
        name: 'Brasil',
        checked: false
      }, 
      {
        name: 'Internacional',
        checked: false
      }, 
  ]
  }
];

const FilterList = () => {
  return (
    <div style={{color: 'white'}}>
      <h1>Filtros</h1>
      <ListGroup className="container main-content" >
        {filters.map((filter: Filter) => {
          return (
            <div style={{marginBottom: '20px'}}>
              <h4> {filter.name} </h4>
              <FilterValues values={filter.values} />
            </div>
          )
        })}
      </ListGroup>
    </div>
  );
}

export default FilterList;