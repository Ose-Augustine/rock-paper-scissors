function computerPlay(){
    let possibleReturns=['Rock','Paper','Scissors'];
    const random=Math.floor(Math.random()*possibleReturns.length);
    return (random,possibleReturns[random]);
}
console.log("hello world")