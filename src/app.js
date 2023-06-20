/* eslint-disable */

//data source
let pronoun = ["the", "your", "our"];
let adjective = ["Testing", "Coding", "Amazing"];
let noun = ["Website", "Spot", "Place"];
let extension = [".com", ".net", ".dev"];

//loop that creates the domain
for (let pronouns of pronoun) {
  for (let adjectives of adjective) {
    for (let nouns of noun) {
      for (let extensions of extension) {
        let newDomain = pronouns + adjectives + nouns + extensions;
        console.log(newDomain);
      }
    }
  }
}
