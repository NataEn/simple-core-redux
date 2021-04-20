const { createStore, combineReducers } = require("@reduxjs/toolkit");
const {
  humanResources,
  cashDepartment,
  repairEngineers,
} = require("./reducers");

//now lets create our company ==>
//first we will combine all departments to work as one:

const companyDepartments = combineReducers({
  humanResources,
  cashDepartment,
  repairEngineers,
});

//now with store our company can start working
//the store represent the entire redux application

const store = createStore(companyDepartments);

//now that our company is working, actions can be dispatched using this:

module.exports = store;
