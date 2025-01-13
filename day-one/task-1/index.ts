function identicalLetters(string_1: string, string_2: string): string {

    const charset1 = new Set(string_1); 
    const charset2 = new Set(string_2);

    const common_chars: string[] = []; 

   
    for (const char of charset1) {
        if (charset2.has(char)) {
            common_chars.push(char);
        }
    }

    
    return common_chars.join(''); 
}

console.log(identicalLetters("one", "town")); 
