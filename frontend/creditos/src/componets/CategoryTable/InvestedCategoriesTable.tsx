import { InvestedCategory } from "../../types";
import { FC } from "react";
import { Table } from "react-bootstrap";

type InvestedCategoriesTable = {
  investedCategories: InvestedCategory[];
};

export const InvestedCategoriesTable: FC<InvestedCategoriesTable> = ({
  investedCategories,
}) => {
  return (
    <Table striped bordered>
      <thead>
        <th>Categoria</th>
        <th>Comienzo de la Inversion</th>
        <th>Invertido</th>
        <th>Ganancias</th>
      </thead>
      <tbody>
        {investedCategories.map((investedCategory) => (
          <tr>
            <td>{investedCategory.name}</td>
            <td>{investedCategory.investedOn.toISOString()}</td>
            <td className="text-end">${investedCategory.invested}</td>
            <td className="text-end">${investedCategory.earnings}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
