/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = function (arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = employeeData => {
    return employeeData.map(arr => createEmployeeRecord(arr))
}

let createTimeInEvent = function(dateTime) {
    const [date, hour] = dateTime.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour), 
        date
    })
    return this
}


let createTimeOutEvent = function(dateTime){
    const [date, hour] = dateTime.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date 
    })

    return this
}

let hoursWorkedOnDate = function(date){
    let inEvent = this.timeInEvents.find(timeStamp => timeStamp.date == date
    )

    let outEvent = this.timeOutEvents.find(timeStamp => timeStamp.date === date)

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(date) {
    let wagesEarned = hoursWorkedOnDate.call(this, date) * this.payPerHour //needs the .call in order to bind that current this to hoursWorkedOnDate
    return wagesEarned
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

let findEmployeebyFirstName = function(collection, firstNameString){
    return collection.find(employee => employee.firstName === firstNameString) 
}

let calculatePayroll = arrayOfEmployeeRecords => {
    return arrayOfEmployeeRecords.reduce((acc, rec) => acc + allWagesFor.call(rec)
        , 0)
}