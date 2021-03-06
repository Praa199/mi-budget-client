import React from "react";
import { removeSingleBudget } from "../../services/data.input";
import { Button } from "react-bootstrap";

// import { removeSingleMonth } from "../../pages/ProtectedTable";

function removeBudget(id) {
  removeSingleBudget(id);
}

function DeleteInfo({
  singleMonthId,
  handleDelete,
  tableToggle,
  setBudgetArray,
  budgetArray,
}) {
  // const [editedBudgetArray, setEditedBudgetArray] = React.useState([]);

  function filterParentState() {
    const obj = budgetArray.filter(
      (singMonth) => singMonth._id !== singleMonthId
    );
    setBudgetArray(obj);
    console.log(obj);
    // return obj;
  }

  function deletion() {
    console.log(tableToggle);
    removeBudget({ singleMonthId });
    filterParentState();
    tableToggle();
    // setEditedBudgetArray(budgetArray);
  }
  return (
    <>
      <Button variant="outline-danger" onClick={() => deletion()}>
        Remove
      </Button>
    </>
  );
}

export default DeleteInfo;
