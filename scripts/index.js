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




//dead count
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

//most titles
let titleYo = characters.sort(function(a, b) {
    return a.titles - b.titles;
});



console.log(titleYo[0]);
console.log(titleYo[1]);