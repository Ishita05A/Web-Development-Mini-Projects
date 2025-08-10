let num = Math.random()
let fw, sw, tw
if(num < 0.33)
    fw = "Crazy"
else if (num>0.33 && num <0.66) fw = "Amazing"
else fw = "Fire"

num = Math.random()
if(num < 0.3)
    sw = "Engine"
else if (num>0.3 && num <0.66) sw = "Foods"
else sw = "Garments"

num = Math.random()
if(num < 0.3)
    tw = "Bros"
else if (num>0.3 && num <0.66) tw = "Limited"
else tw = "Hub"

alert(`${ `${fw} ${sw} ${tw}`}`)