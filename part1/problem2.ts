console.log("Problem 2 - Atbash Cipher")
function atbashCipher(text: string): string{
    const plain: string = "abcdefghijklmnopqrstuvwxyz"
    const cipher: string = "zyxwvutsrqponmlkjihgfedcba"
    let result: string = ""

    for(const char of text){
        const index: any = plain.indexOf(char.toLowerCase())
        if (index !== -1) {
            const cipherChar = cipher[index]
            result += char === char.toLowerCase() ? cipherChar : cipherChar.toUpperCase()
        }else{
            result += char
        }
    }
    return result
}

console.log(atbashCipher("Olivn rkhfn wioli hrg znvg"))