function superbowlWin(record) {
    const win = record.find(element => element.result === "W")
    if (win) {
     return win.year
    }else return undefined
}

//function takes a record array
//element of key & value of year and result 
//uses .find to test each object (element.find.record.year)
//