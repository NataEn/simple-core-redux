//Reducers--> each reducer models a different department in our repair company
//each reducer if new modification is needed than ALWAYS returns a NEW state = a NEW array
// otherwise returns the current state
// the first time the reducer is called the first state is undefined--> we cannot work with that so we will default that to an empty array

//first the HR department updates the company database with the new customer
const humanResources = (oldListOfCustomers = [], action) => {
  if (action.type === "SUBSCRIPTION") {
    return [...oldListOfCustomers, action.payload];
  }
  return oldListOfCustomers;
};
//here the value of the state is a primitive type, so we only need to set the default value
// for the first time the reducer is called
const cashDepartment = (oldAvailableCash = 100, action) => {
  if (action.type === "REPAIR_EXPENSE") {
    return oldAvailableCash - action.payload.amount;
  }
  return oldAvailableCash;
};

//in repair engineers department we need to set the current repair case
//we will not use filter function since it will remove the rest of the repair cases
const repairEngineers = (oldListOfRepairs = [], action) => {
  if (action.type === "MARK_CURRENT_REPAIR") {
    return oldListOfRepairs.map((repairCase) => {
      if (repairCase.device === action.payload.device) {
        repairCase.isCurrent = true;
      } else {
        repairCase.isCurrent = false;
      }
      return repairCase;
    });
  }
  return oldListOfRepairs;
};

module.exports = {
  humanResources,
  cashDepartment,
  repairEngineers,
};
