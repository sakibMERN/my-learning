// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person';

function reverseEachWord(sentence){
    const sentenceArray = sentence.split("");
    const reverseLetter = sentenceArray.reverse();
    const reverseSentence = reverseLetter.join("");

    return reverseSentence;
}
console.log(reverseEachWord(statement));