console.log("Problem 4 - Pangram")
function isPangram(sentence: string): boolean {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz"
    const lowerCaseSentence = sentence.toLowerCase()

    for (const char of alphabet){
        if (!lowerCaseSentence.includes(char)){
            return false
        }
    }

    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))