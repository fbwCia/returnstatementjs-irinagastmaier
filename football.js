
// Task 01:

// Create a function in football.js file that takes the number of wins, draws and losses and calculates & returns the number of points a football team has obtained so far.
// -Wins get 3 points
// -Draws get 1 point
// -Losses get 0 points
let result;
function footballPoints(wins, draws, losses) {
   result = (wins * 3 + draws * 1 + losses * 0);
   return result;
} 

console.log(footballPoints(3, 4, 2))// 13

console.log(footballPoints(5, 0, 2)) // 15

console.log(footballPoints(0, 0, 1)) // 0

