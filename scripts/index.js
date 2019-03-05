console.log(`There are ${characters.length} characters in the array.`);

// characters with "A" names
let aPeeps = characters.filter(char => {
    return char.name[0] === "A"
});
console.log(aPeeps);

// characters with "Z" names
let zPeeps = characters.filter(char => {
    return char.name[0] === "Z";
})
console.log(zPeeps);
