const button=document.getElementById("run");

button.addEventListener("click",function (){
    let dobYear=document.getElementById("dob-year");
    let dobMonth=document.getElementById("dob-month");
    let dobDate=document.getElementById("dob-day");

    let currentTime=new Date();
    let currentYear=currentTime.getFullYear();
    let currentMonth=currentTime.getMonth();
    let currentDate=currentTime.getDate();


    console.log(dobYear);




})


