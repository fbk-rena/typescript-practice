"use strict";
function formatDate(dateOrIsoOrDay, month, year) {
    let date;
    if (typeof dateOrIsoOrDay === 'number') {
        date = new Date(year, month, dateOrIsoOrDay);
    }
    else if (typeof dateOrIsoOrDay === 'string') {
        date = new Date(dateOrIsoOrDay);
    }
    else {
        date = dateOrIsoOrDay;
    }
    return date.toLocaleDateString();
}
console.log(formatDate(new Date()));
console.log(formatDate("2023-05-15"));
console.log(formatDate(15, 5, 2023));
