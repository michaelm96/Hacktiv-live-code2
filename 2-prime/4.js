/*
===================
FISH FARM SIMULATOR
===================

[INSTRUCTION]
Buatlah suatu aplikasi untuk mensimulasikan perubahan populasi ikan di tiga peternakan ikan milik Taufiq, Ayu, dan Audrick.

Aplikasi ini menerima input berupa perubahan yang terjadi pada populasi peternakan ikan tersebut. Perubahan ini disimpan di dalam suatu array 'changes' yang mencatat perubahan 
perubahan yang terjadi. Perubahan ini berbentuk string dan memiliki format:
'[Nama peternak][operator][persentase perubahan]'

Contoh perubahan:
-'Ayu+1%' -> Berarti, di peternakan milik Ayu terjadi penambahan populasi ikan sebanyak 1 persen. 
-'Hanif-10%' -> Berarti, di peternakan milik Hanif terjadi pengurangan populasi ikan sebanyak 10 persen.

Di dalam soal sudah disediakan ARRAY OF OBJECTS yang berisi populasi ikan untuk masing-masing peternakan (lihat function di dalam soal).

Tugas kalian adalah mencari tahu berapa jumlah populasi peternakan ikan dari ketiga peternak tersebut setelah melalui perubahan perubahan yang tertera di array 'changes'.

Sebagai output, tampilkan lagi ARRAY OF OBJECTS berisi nama peternak dan populasinya yang baru, sesuai perubahan yang tertera di array 'changes'.

[RULES]
- Tidak ada larangan dalam pengunaan built-in function

*/


function populationSim(changes) {
  var farms = [
    { owner: 'Taufiq', population: 100000 },
    { owner: 'Ayu', population: 230000 },
    { owner: 'Audrick', population: 250000 }
  ]
  // implementasikan function ini
  let mainArr = []
  let newObj = {}
  let tempArr = []
  let population = []
  for (let i = 0; i < changes.length; i++) {
    let newArr = []
    let temp = ""
    for (let j = 0; j < changes[i].length; j++) {
      if (changes[i][j] == "+" || changes[i][j] == "-") {
        newArr.push(temp)
        temp = ""
        temp += changes[i][j]
        newArr.push(temp)
        temp = ""
      } else if (changes[i][j] == "%") {
        newArr.push(temp)
      } else {
        temp += changes[i][j]
      }
    }
    tempArr.push(newArr)
  }
  for (let k = 0; k < tempArr.length; k++) {
    for (let l = 0; l < tempArr[k].length; l++) {
      for (let m = 0; m < farms.length; m++) {
        if (farms[m].owner == tempArr[m][0]) {
          if (tempArr[m][1] == "+") {
            population.push(farms[m].population + (farms[m].population * (Number(tempArr[m][2]) / 100)))
          } else if (tempArr[m][1] == "-") {
            population.push(farms[m].population - (farms[m].population * (Number(tempArr[m][2]) / 100)))
          }
        }

      }

    }
  }

  for (let n = 0; n < farms.length; n++) {
    newObj = {
      owner: farms[n].owner,
      population: population
    }
    mainArr.push(newObj)
  }
  return mainArr
}

console.log(populationSim(['Ayu+5%', 'Audrick+10%', 'Taufiq-3%']))
/**
[
  { owner: 'Taufiq', population: 97000 },
  { owner: 'Ayu', population: 241500 },
  { owner: 'Audrick', population: 275000 }
]
**/

console.log(populationSim(['Taufiq+50%', 'Audrick-50%', 'Ayu-50%']))
/**
[
  { owner: 'Taufiq', population: 150000 },
  { owner: 'Ayu', population: 115000 },
  { owner: 'Audrick', population: 125000 }
]
**/
