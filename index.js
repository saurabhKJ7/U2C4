// write js code here corresponding to index.html
// You should add submit event on the form


var form=document.querySelector("form")

form.addEventListener("submit",myfuction)

var scheduleArr=JSON.parse(localStorage.getItem("schedule"))||[]
function myfuction(){
    event.preventDefault();
    var scheduleObj={
       matchNo:form.matchNum.value,
       teamA:form.teamA.value,
       teamB:form.teamB.value,
       date:form.date.value,
       venue:form.venue.value,  
    }
    scheduleArr.push(scheduleObj)
       localStorage.setItem("schedule",JSON.stringify(scheduleArr))
       console.log(scheduleArr)
}
