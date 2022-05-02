// write js code here corresponding to favourites.html

var favouriteArr=JSON.parse(localStorage.getItem("favourites"))||[]
displaydata(favouriteArr)
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
        td6.innerText="Delete"
        td6.style.color="blue"
        td6.addEventListener("click",function(){
            deletefav(elem)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        console.log(tr)
        document.querySelector("tbody").append(tr)
        
    })
    
    function deletefav(elem,index){
        favouriteArr.splice(index,1);
        localStorage.setItem("favourites",JSON.stringify(favouriteArr));
        window.location.reload();
    }
    
}