console.log('hello world');

function createCard(thumbnail, title,cName ,views,monthsAgo,duration,){
    let newViews ;
    if(views <1000000){
        newViews = views/1000+'K'
    }
    else{
        newViews = views/1000000+'M'
    }
let html = `<div class = "card">
<div class="image"><img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div></div>
        <div class="right">
        <h1>${title}  </h1>
        <p> ${cName} . ${newViews} views . ${monthsAgo} months ago</p>
    </div>
    </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML+html;

}
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA","Introduction to Backend || Sigma Web Dev Video #1","CodeWithHarry","737000","6","33:23")
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA","Introduction to DOM || Sigma Web Dev Video #2","CodeWithHarry","1370000","4","28:19")
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA","Introduction to NodeJS || Sigma Web Dev Video #3","CodeWithHarry","137000","4","20:59")
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA","Introduction to API || Sigma Web Dev Video #4","CodeWithHarry","370000","3","28:19")
createCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA","Introduction to ExpressJS || Sigma Web Dev Video #5","CodeWithHarry","1370000","2","21:10")