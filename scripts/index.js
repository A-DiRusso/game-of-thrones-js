console.log(`There are ${characters.length} characters in the array.`);

// characters with "A" names
let aPeeps = characters.filter(char => {
    return char.name[0] === "A"
});
console.log(aPeeps);

// characters with "Z" names
let zPeeps = characters.filter(char => {
    return char.name[0] === "Z";
});
console.log(zPeeps);





function bringOutYourDead(characters, item) {
    count = 2124;
    let allTheInfo = Object.keys(characters);
    allTheInfo.forEach(function(findDead) {
        let dead = characters[findDead][item];
        if (dead == false) {
            count -= 1;
        }
        console.log(count);
        // filter(dead);
        //console.log(dead);
    });
}

bringOutYourDead(characters, 'died');

// function filter(dead) {
//     let deadCount = 0;
//     if (dead !== " ") {
//         deadCount += 1;
//     }
//     deadIsCount(deadCount);
// }

// function deadIsCount(deadCount) {
//     console.log(deadCount);
// }
