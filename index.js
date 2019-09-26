/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// let allWagesFor = function () {
//     let eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     let payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

// Your code here
function createEmployeeRecord(personArray) {
    const firstName = personArray[0]
    const lastName = personArray[1]
    const title = personArray[2]
    const pay = personArray[3]
    return {
        firstName: firstName,
        familyName: lastName,
        title: title,
        payPerHour: pay,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployees(employees) {
    return employees.map(function(employee) {
        return createEmployeeRecord(employee)
    })
}

function createTimeInEvent(date) {
    const dateArr = date.split(" ")
    const parsedDate = dateArr[0]
    const parsedHour = parseInt(dateArr[1])
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parsedHour,
        date: parsedDate,
    })
    return this
}

function createTimeOutEvent(date) {
    const dateArr = date.split(" ")
    const parsedDate = dateArr[0]
    const parsedHour = parseInt(dateArr[1])
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parsedHour,
        date: parsedDate,
    })
    return this
}

function hoursWorkedOnDate(date) {
    const enter = this.timeInEvents.find(function(timeInEvent) {
        return timeInEvent.date === date
    })
    const exit = this.timeOutEvents.find(function(timeOutEvent) {
        return timeOutEvent.date === date
    })
    return (exit.hour - enter.hour) / 100
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

function allWagesFor() {
    const dates = this.timeInEvents.map(function(timeInEvent) {
        return timeInEvent.date
    })
    return dates.reduce(function(sum, day) {
        return sum + wagesEarnedOnDate.call(this, day)
    }.bind(this), 0)
}

function createEmployeeRecords(employees) {
    return employees.map(function(employee) {
        return createEmployeeRecord(employee)
    })
}

function findEmployeebyFirstName(employees, name) {
    return employees.find(function(employee) {
        return employee.firstName === name
    })
}

function calculatePayroll(employees) {
    return employees.reduce(function(sum, employee) {
        return sum + allWagesFor.call(employee)
    }, 0)
}