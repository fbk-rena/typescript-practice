function formatDate(date: Date): string;
function formatDate(isoString: string): string;
function formatDate(day: number, month: number, year: number): string;
function formatDate(
  dateOrIsoOrDay: Date | string | number,
  month?: number,
  year?: number
): string {
  let date: Date;
  
  if (typeof dateOrIsoOrDay === 'number') {
    date = new Date(year!, month!, dateOrIsoOrDay);
  } else if (typeof dateOrIsoOrDay === 'string') {
    date = new Date(dateOrIsoOrDay);
  } else {
    date = dateOrIsoOrDay;
  }
  
  return date.toLocaleDateString();
}

console.log(formatDate(new Date()));
console.log(formatDate("2023-05-15"));
console.log(formatDate(15, 5, 2023));