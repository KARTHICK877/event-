
function time(callback){
    console.log(`work it going on whera are u `);

setTimeout(function(){
    console.log(`on the way bro`)
    callback();
},5000);
}

function work(){
    console.log(`iam in working place bro `);
}

time(work);