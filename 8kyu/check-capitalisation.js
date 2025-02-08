function hello(name) {
  if (name != "" && typeof name !== "undefined") {
    let firstLetter = name.charAt(0)
    let remainingLetters = name.substring(1)
    let firstLetterCap = firstLetter.toUpperCase()
    let remainingLettersSmall = remainingLetters.toLowerCase()
    name = firstLetterCap + remainingLettersSmall  
  } else {
    name = "World"
  }
    
  return `Hello, ${name}!`;
}
