import { Form } from "react-bootstrap";
import { FilterValue } from "src/types";

const FilterValueRow = ( value:  FilterValue ) => {
  return (
    <div >
      <input type="checkbox" style={{marginRight: '2px'}}/>
       <span>{value.name}</span>
    </div>
  );
}

export default FilterValueRow;