// write js code here corresponding to matches.htmlvar form=document.querySelector("form")


var scheduleArr=JSON.parse(localStorage.getItem("schedule"))||[]

    function filter(){
        var filterMatch=document.getElementById("filterVenue").value;
        var match=scheduleArr.filter(function(elem){
            return elem.venue==filterMatch;
        });
        displaydata(match)
    }
displaydata(scheduleArr)
function displaydata(data){
    data.forEach(function(elem){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchNo

        var td2=document.createElement("td");
        td2.innerText=elem.teamA

        var td3=document.createElement("td");
        td3.innerText=elem.teamB
        var td4=document.createElement("td");
        td4.innerText=elem.matchNo

        var td5=document.createElement("td");
        td5.innerText=elem.venue
        var td6=document.createElement("td");
        td6.innerText="Add as Favourite"
        td6.style.color="blue"
        td6.addEventListener("click",function(){
            addfav(elem)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        console.log(tr)
        document.querySelector("tbody").append(tr)

        
    })
}

    var favouriteArr=JSON.parse(localStorage.getItem("favourites"))||[]
    function addfav(elem){
        favouriteArr.push(elem)
        localStorage.setItem("favourites",JSON.stringify(favouriteArr))
    }

    
        
    
    


