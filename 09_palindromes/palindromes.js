const palindromes = function (string) {
    string = string.replace(/[!.,?:;\/() _-]/g, "");
    return (
        string.toLowerCase() ===
        string.split("").reverse().join("").toLowerCase()
    );
};

// Do not edit below this line
module.exports = palindromes;
