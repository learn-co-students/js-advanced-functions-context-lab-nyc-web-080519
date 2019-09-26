/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

//---------------------------------------- 1 --------------------------------------------------
// Essentially the same as previous code. In the first example, we placed each value into a variable. 

 let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

//---------------------------------------- 2 --------------------------------------------------
// Same as previous code. 

let createEmployees = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

//---------------------------------------- 3 --------------------------------------------------
// We reduced the number of arguements by removing the employee. 
// Employee was only used to reference a specific employee. Employee is not represented by this. 

let createTimeInEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

//---------------------------------------- 4 --------------------------------------------------
// We reduced the number of arguements by removing the employee. 
// Employee was only used to reference a specific employee. Employee is not represented by this. 

let createTimeOutEvent = function(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

//---------------------------------------- 5 --------------------------------------------------
// We reduced the number of arguements by removing the employee. 
// Employee was only used to reference a specific employee. Employee is not represented by this. 

let hoursWorkedOnDate = function(soughtDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

//---------------------------------------- 6 --------------------------------------------------


let wagesEarnedOnDate = function(dateSought){
    let rawWage = hoursWorkedOnDate.call(this, dateSought)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

//---------------------------------------- 7 --------------------------------------------------


let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

//---------------------------------------- 8 --------------------------------------------------


let createEmployeeRecords = function(src) {
  return src.map(function(row){
    return createEmployeeRecord(row)
  })
}

//---------------------------------------- 9 --------------------------------------------------


let findEmployeebyFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

//---------------------------------------- 10 --------------------------------------------------


let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

//---------------------------------------- Purpose --------------------------------------------------
// The purpose of this lab was to show how we can use "this" to clean up our code (reduce the number of arguements).
// Execution context (this) is determined by the object that is invoking a function. 
