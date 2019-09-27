/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let createEmployeeRecord = function (employeeRecord) {
    const obj = {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
 }

 let createEmployeeRecords = function (employeeRecords) {
     const myArr = []
     employeeRecords.forEach( function(employeeRecord) {
         myArr.push(createEmployeeRecord(employeeRecord))
     })
     return myArr
 }

 let createTimeInEvent = function(dateStamp) {
     const obj = {
         type: "TimeIn",
         hour: parseInt(dateStamp.split(" ")[1]),
         date: dateStamp.split(" ")[0]
     }
     this.timeInEvents.push(obj)
     return this
 }

 let createTimeOutEvent = function(dateStamp) {
     const obj = {
         type: "TimeOut",
         hour: parseInt(dateStamp.split(" ")[1]),
         date: dateStamp.split(" ")[0]
     }
     this.timeOutEvents.push(obj)
     return this
 }

 let hoursWorkedOnDate = function(date) {
     let timeIn = this.timeInEvents.filter(timeInEvent => timeInEvent.date === date)[0].hour
     let timeOut = this.timeOutEvents.filter(timeOutEvent => timeOutEvent.date === date)[0].hour
     return Math.abs((timeIn - timeOut) / 100)
 }

 let wagesEarnedOnDate = function(date) {
     const hours = hoursWorkedOnDate.call(this, date)
     return hours * parseInt(this.payPerHour)
 }

 let findEmployeebyFirstName = function(srcArray, firstName) {
    let match = undefined
    srcArray.forEach(function(employee) {
        if (employee.firstName === firstName) {
        match = employee
        }
    })
    return match
 }

 let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
 
 let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}