const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const results = document.getElementById("results")

const enterName = prompt("enter first name");
const enterSecondName = prompt("enter second name")

firstName.innerText = enterName;
secondName.innerText = enterSecondName;

const matchPercent = Math.floor(Math.random()*100) + 1;

if(enterName && enterSecondName){
    results.innerHTML = `<div class="results">${enterName} matches ${enterSecondName}  ${matchPercent}%</div>`;
}else{
    results.innerHTML = "<h3 class='results'>Please provide all names</h3>";

}

