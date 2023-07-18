console.log("Problem 1 - Acronym")
function acronym(phrase: string): string{
    const words = phrase.split(' ')
    let acronym = ' ';

    for (const word of words) {
        if (word !== '') {
            acronym += word[0].toUpperCase()
        }
    }
    return acronym
}

// console.log(acronym("Portable Network Graphics"))
console.log(acronym("portable disk file"))