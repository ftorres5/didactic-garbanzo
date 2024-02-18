class Sentence {
  constructor(data) {
    this.data = data;
  }

  countWords() {
    const words = this.data.split(" ");
    return words.length;
  }

  hasLetter(letter) {
    if (this.data.includes(letter)) {
      return true;
    }
    return false;
  }

  frequencyOfLetter(letter) {
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === letter) {
        count++;
      }
    }
    return count;
  }

  // assumes all lowercase letters and no punctuation
  stats() {
    const map = {};
    const wordsArray = this.data.split(" ")

    for (let i = 0; i < wordsArray.length; i++) {
      if (map[wordsArray[i]]) {
        map[wordsArray[i]]++;
      } else {
        map[wordsArray[i]] = 1;
      }
    }
  }

}

const data = window.prompt("Enter a sentence!");

const sentence = new Sentence(data);
