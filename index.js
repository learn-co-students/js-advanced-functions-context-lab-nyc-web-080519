import { type } from "os"

/* Your Code Here */


function createEmployeeRecord(userDetailsArr) { 
    return {
        firstName: userDetailsArr[0],
        familyName: userDetailsArr[1],
        title: userDetailsArr[2],
        payPerHour: userDetailsArr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployees(arrOfArrs) {
    let outputArr = []
    arrOfArrs.forEach ( function (empArr) {
        outputArr.push(createEmployeeRecord(empArr))
    })
    return outputArr
}


function  createTimeInEvent(timestamp) {
    this.timeInEvents.push( {
    type: "TimeIn",
    hour: parseInt(timestamp.split(" ")[1]),
    date: timestamp.split(" ")[0]
    })
    return this
}

function  createTimeOutEvent(timestamp) {
    this.timeOutEvents.push( {
    type: "TimeOut",
    hour: parseInt(timestamp.split(" ")[1]),
    date: timestamp.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(timestamp) {
    let timeIn = this.timeInEvents.find( function(timeHash) { return timeHash.date == timestamp} )
    let timeOut = this.timeOutEvents.find( function(timeHash) { return timeHash.date == timestamp} )
    return (parseInt(timeOut.hour) - parseInt(timeIn.hour)) * .01
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    let rate = this.payPerHour
    return hours * rate
}


function createEmployeeRecords(arrOfArrs) {
    let outputArr = []
    arrOfArrs.forEach( function(empArr) {
        outputArr.push(createEmployeeRecord(empArr))
    })
    return outputArr
}

// function allWagesFor() {
//     let totalWages = 0
//     let empDatesWorked = []
//     this.timeInEvents.each( function(event) { empDatesWorked.push(event.date) } )
//     empDatesWorked.each ( function(date) {
//         totalWages += wagesEarnedOnDate.call(this, date)
//     })
//     return totalWages
// }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function allWagesFor() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeebyFirstName(arr, firstName) {
    let output = arr.find( function(obj) { return obj.firstName == firstName} )
    return output
  }


function calculatePayroll(employees) {
    return employees.reduce(function(sum, employee) {
        return sum + allWagesFor.call(employee)
    }, 0)
}

