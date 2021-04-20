//for our repair company

//first lets create the action creators:

const subscription = ({ firstName, lastName, email }) => {
  return {
    //this is the Action object==Form
    type: "SUBSCRIPTION",
    payload: {
      firstName,
      lastName,
      email,
    },
  };
};

const requestForRepair = ({ device, description }) => {
  return {
    //this is the Action object==Form
    type: "REPAIR",
    payload: {
      device,
      description,
    },
  };
};

const repairExpense = ({ amount, description }) => {
  return {
    //this is the Action object==Form
    type: "REPAIR_EXPENSE",
    payload: {
      amount,
      description,
    },
  };
};

//lets create the dispatcher--> actually this is where redux is coming in, no need to create it
// the dispatch function creates a copy of the action and passes it to the reducers

module.exports = {
  subscription,
  requestForRepair,
  repairExpense,
};
