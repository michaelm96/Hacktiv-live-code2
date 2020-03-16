/*
 * Implementasikan fixArray, yang menerima input berupa array dan mengembalikan output berupa array yang sudah dibetulkan. 
 * Berikut ini rules untuk memperbaiki array.
 * - Jika elemen merupakan angka, maka biarkan saja di dalam array
 * - Jika elemen merupakan huruf kecil / lowercase, biarkan saja di dalam array
 * - Jika elemen merupakan huruf besar, maka hilangkan dari array
 * 
 * Input tidak akan berisi karakter selain huruf dan angka!
 * 
 * RULES
 *  Tuliskan Pseudocode!!!
 *  Built-in function yang diperbolehkan hanya .toLowerCase(), .toUpperCase() dan .push()
 *  
 */

/**
 * Tuliskan Pseudocode disini!
 *  SET newArr
 *  GET hurufBesar with value A-Z
 *  FOR loop array length
 *    SET check to TRUE
 *    FOR loop hurufBesar length
 *      IF array[i] equal to hurufBesar[j] then
 *        SET check to false
 *      ENDIF
 *    ENDFOR
 *    IF check equal to TRUE then
 *      PUSH array[i] to newARR
 *    ENDIF
 *  ENDFOR
 * DISPLAY newARR
 */

function fixArray(array) {
  //implementasikan function disini
  let newArr = []
  let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUWVXYZ"
  for (let i = 0; i < array.length; i++) {
    let check = true
    for (let j = 0; j < hurufBesar.length; j++) {
      if(array[i] == hurufBesar[j]){
        check = false
      }
    }
    if(check){
      newArr.push(array[i])
    }
    
  }

  return newArr
}

console.log(fixArray([1, 2, 3, 'a', 'b', 'B', 'C', 30, 70])) // [ 1, 2,  3,  'a', 'b', 30, 70 ]

console.log(fixArray([1, 'b', 3, 'a', 'b', 'C', 100000])) // [ 1, 'b', 3, 'a', 'b', 100000 ]