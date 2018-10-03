module.exports = function longestConsecutiveLength(array) {
  
  let max = 0;
  let count = 1;
  let mas = array;
  if(mas.length == 0) return 0;
  if(mas.length == 1) return 1;
    mas.sort(function(a, b) {return a - b});
    for(let k = 1, leng = mas.length; k < leng; k++) {
        if(mas[k] - mas[k - 1] == 1) {
            count++;
        }
        
        if(mas[k] - mas[k - 1] > 1) {
            if(count > max) {
                max = count;
            }
            count = 1;
        }
           
        
    }
    return max;
}
