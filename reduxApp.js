const store = require("./redux/store");
const {
  subscription,
  requestForRepair,
  repairExpense,
} = require("./redux/actionCreators");

//now lets get our company working and dispatch some actions:

const action = subscription({
  firstName: "Boby",
  lastName: "Brown",
  email: "boby.gmail.com",
});

store.dispatch(action);
console.log(store.getState());
