// Create a function that checks if a given string is a palindrome

function isPalindrome(str) {
  // Convert the string to lowercase and remove all non-alphanumeric characters
  const cleanedString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let charCount = 0;

  // Check if the cleaned string is empty or has only one character
  if (cleanedString.length === "") {
    console.log("Empty String!");
    return false;
  }

  // Check if the length of the string is even or odd
  if (cleanedString.length % 2 === 0) {
    charCount = cleanedString.length / 2;
  }
  else {
        // If the length of the string is 1 then it becomes a palindrome
        if (cleanedString.length === 1) {
        console.log("Entry is a palindrome.");
        return true;
        } else {
        // If the length of the string is odd ignore middle character
            charCount = (cleanedString.length - 1) / 2;
        }
  }

  // Start comparing characters from the beginning and  end of the string
  for (let i = 0; i < charCount; i++) {
    // Compare characters and drop them if they do not match
    if (cleanedString[i] !== cleanedString.slice(-1 - i)[0]) {
      console.log(`${str} is Not Palindrome`);
      return false;
    }
  }

  // If all characters match, the string is a palindrome
  console.log(`${str} is a palindrome`);
  return true;
}

isPalindrome("madam");
isPalindrome("rahul");
isPalindrome('84322348');
