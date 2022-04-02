import { Form } from "react-bootstrap";
import { FilterValue } from "src/types";

const FilterValueRow = ( value:  FilterValue ) => {
  return (
    <div style={{color: 'white'}}>
      <input type="checkbox" style={{marginRight: '4px'}}/>
       <span>{value.name}</span>
    </div>
  );
}

export default FilterValueRow;