// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
    // Remove any non-alphabet characters and convert to lowercase
    const cleanString = (str) => str.replace(/[^\w]/g, '').toLowerCase();

    const sortedStr1 = cleanString(str1).split('').sort().join('');
    const sortedStr2 = cleanString(str2).split('').sort().join('');

    // Compare the sorted versions of the cleaned strings
    return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";

if (areAnagrams(string1, string2)) {
    console.log(`"${string1}" and "${string2}" are anagrams.`);
} else {
    console.log(`"${string1}" and "${string2}" are not anagrams.`);
}
