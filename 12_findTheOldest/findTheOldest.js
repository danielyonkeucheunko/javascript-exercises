const findTheOldest = function (arr) {
    const sortedPeople = arr.sort((a, b) => {
        return (a.yearOfDeath | new Date()) - a.yearOfBirth <
            (b.yearOfDeath | new Date()) - b.yearOfBirth
            ? 1
            : -1;
    });
    console.table(sortedPeople);

    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
