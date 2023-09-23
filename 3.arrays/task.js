function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every(function (element, index) {
        return element === arr2[index];
    });
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
        return 0;
    };
    let filteredUsers = users.filter(user => user.gender === gender);
    let userAges = filteredUsers.map(user => user.age);
    let totalAge = userAges.reduce((acc, age) => acc + age, 0);
    if (filteredUsers.length === 0) {
        return 0;
    } else {
        return totalAge / filteredUsers.length;
    };
}