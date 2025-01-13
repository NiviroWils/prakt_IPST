function indexOf(stringexmp: string, substring: string): number {
    
    if (substring === '') return 0;

    
    const stringexmp_length = stringexmp.length;
    const substring_length = substring.length;

    for (let i = 0; i <= stringexmp_length - substring_length; i++) {

        let found_substr = true;
        for (let j = 0; j < substring_length; j++) {
            if (stringexmp[i + j] !== substring[j]) {
                found_substr = false;
                break;
            }
        }
  
        if (found_substr) return i;
    }

    return -1;
}

console.log(indexOf("hello world", "world")); // Вывод: 6
console.log(indexOf("abc", "d")); // Вывод: -1