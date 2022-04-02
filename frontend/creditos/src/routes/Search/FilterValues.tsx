import { FilterValue } from "src/types";
import FilterValueRow from "./FilterValueRow";

const FilterValues = ( {values}: {values: FilterValue[] }) => {
  return (
    <div>
        {
          values.map((value) => {
            return <FilterValueRow {...value} ></FilterValueRow>;
          })
        }
    </div>
  );
}

export default FilterValues;