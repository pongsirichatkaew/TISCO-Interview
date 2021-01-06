function mixSentenceToBlock(num, sentence) {
  let wordArr = [];
  for (let i = 0; i < num; i++) {
    let word = "";
    for (let index = i; index < sentence.length; index += num) {
      const element = sentence[index];
      if (element) {
        word = word + element;
      }
    }
    if (wordArr[0]) {
      while (word.length !== wordArr[0].length) {
        word = word + "x";
      }
    }
    wordArr.push(word);
  }
  console.log(wordArr);
  return wordArr;
}

mixSentenceToBlock(3, "Is text important ?");
mixSentenceToBlock(5, "Pay_attention_to_space");
mixSentenceToBlock(1, "Une chocolatine !");
