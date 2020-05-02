/* Your Code Here */

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


// Your code here

function createEmployeeRecord(empArray) {
    return {
        firstName: empArray[0],
        familyName: empArray[1],
        title: empArray[2],
        payPerHour: empArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    // this.firstName = empArray[0],
    // this.familyName = empArray[1],
    // this.title = empArray[2],
    // this.payPerHour = empArray[3],
    // this.timeInEvents = [],
    // this.timeOutEvents = []
}

function createEmployees(arrays) {
    return arrays.map(employee => {
        return createEmployeeRecord(employee)
    })
}

function createTimeInEvent(time) {
    const [date, hour] = time.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function createTimeOutEvent(time) {
    const [d, h] = time.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(h, 10),
        date: d
    })
    return this
}

function hoursWorkedOnDate(givenDate) {
    const timeIn = this.timeInEvents.find(time => {
        return time.date === givenDate
    })
    const timeOut = this.timeOutEvents.find(time => {
        return time.date === givenDate
    })
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

// you can call .reduce(addUp) on an array of numbers to recieve the total
function addUp(total, num) {
    return total + num;
}





function calculatePayroll(employees) {
    const earnings = employees.map(employee => {
        return allWagesFor.call(employee)
    })
    return earnings.reduce(addUp)
}





function createEmployeeRecords(data) {
    return data.map(row => createEmployeeRecord(row))
}


// function findEmployeeByFirstName(employees, first) {
let findEmployeebyFirstName = function (employees, first) {
    return employees.find(e => {
        return e.firstName === first
    })
}