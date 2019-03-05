console.log(`There are ${characters.length} characters in the array.`);

let aPeeps = characters.filter(char => {
    return char.name[0] === "A"
});
console.log(aPeeps);

