const contains = (word, letter) => {
  let letters = word.split("");
  // TODO create a set with the above 'letters' array
  let letter_set = new Set(letters);
  // TODO return whether the set has the 'letter'
  return letter_set.has(letter);
};

let true_check = contains("west", "e");
let false_check = contains("north", "e");
