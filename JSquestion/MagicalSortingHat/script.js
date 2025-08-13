let students = ["Abhishek", "Sonakshi","VenketeshIyer" ,"Kaustabh", "Jennifer", "Aman", "Riya"," RakulPreetsingh"]
let houses = []
for (const e of students) {
    if(e.length<6){
        houses.push("Griffindor")
    }
    else if(e.length<8){
        houses.push("Hufflepuff");
    }
    else if(e.length<12){
        houses.push("Ravenclaw");
    }
    else{
        houses.push("Slytherine");
    }
} 
console.log(houses)