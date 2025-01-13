function runLengthEncoding(input: string): string {

    let encoded_sttring = '';
    let count = 1;

    for (let i = 1; i <= input.length; i++) {
        if (i === input.length || input[i] !== input[i - 1]) {
            encoded_sttring += input[i - 1] + count.toString();
            count = 1;
        } else {
            count++;
        }
    }

    return encoded_sttring;
}

function runLengthDecoding(input: string): string {

    let decoded_string = '';
    let count_string = '';

    for (let char of input) {
        if (isNaN(parseInt(char, 10))) {
            decoded_string += char.repeat(parseInt(count_string, 10) || 1);
            count_string = ''; 
        } else {
            count_string += char;
        }
    }

    return decoded_string;
}

console.log(runLengthEncoding("AAABBBCCC")); 
console.log(runLengthDecoding("A3B3C3")); 

