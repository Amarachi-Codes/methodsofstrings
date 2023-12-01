function newMonthGreeting(day,name){
    if(day === 1 && typeof(name)=== "string"){
        return `Happy new month ${name}`
    }return `Goodmorning ${name}` 
}console.log(newMonthGreeting(1,"ijeoma"))