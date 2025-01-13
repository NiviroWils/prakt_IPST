function longestWord(sentence: string): string {
 
    const words = sentence.split(' '); 

    let longest_word = ''; 

    for (const word of words) {
        if (word.length > longest_word.length) {
            longest_word = word;
        }
    }

    return longest_word;
}

console.log(longestWord("You fell asleep in my car I drove the whole time"));

