/* Your Code Here */

function createEmployeeRecord (row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployees (employeeRowData) {
    return employeeRowData.map(row => {
        return createEmployeeRecord(row)
    })
}

function createTimeInEvent (dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function createTimeOutEvent (dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function hoursWorkedOnDate (date) {
    let inEvent = this.timeInEvents.find(e => {
        return e.date === date
    })
    let outEvent = this.timeOutEvents.find(e => {
        return e.date === date
    })
    return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function createEmployeeRecords (src) {
  return src.map(row => {
    return createEmployeeRecord(row)
  })
}

function findEmployeebyFirstName (srcArray, firstName) {
  return srcArray.find(rec => {
    return rec.firstName === firstName
  })
}

function calculatePayroll (arrayOfEmployeeRecords) {
    return arrayOfEmployeeRecords.reduce((memo, rec) => {
        return memo + allWagesFor.call(rec)
    }, 0)
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}