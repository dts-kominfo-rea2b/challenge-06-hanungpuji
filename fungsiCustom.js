// TODO: import module bila dibutuhkan di sini
const fs = require('fs')

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
let isiArrayFile = [];

const loopingObject = (dataObject) => {
  let lengthData = dataObject.length;
  if (lengthData == undefined) {
    lengthData = 0;
  }

  for (let i = 0; i <= lengthData; i++) {
    if (typeof(dataObject) === 'object' && lengthData == 0) {
      return dataObject[Object.keys(dataObject)]
    }else if(typeof(dataObject) === 'object' && lengthData > 0){
      let dataObject2 = dataObject[Object.keys(dataObject)]
      if (dataObject2.length === 0) {
        let objectKey = Object.keys(dataObject2);
        return dataObject2[objectKey];
      }else{
        dataObject2 = dataObject2[Object.keys(dataObject2)]
        if(typeof(dataObject2) === 'object' && lengthData > 0){
          lengthData = dataObject2.length || 0
          for (let i = 0; i <= lengthData; i++) {
            objectKey = Object.keys(dataObject2);
            return dataObject2[objectKey];
          }
        }else{
          return dataObject2;
        }
        
      }
    }
  
  }
  
}

const parseData = (isiText) => {
  const data = JSON.parse(isiText);
  const resultLoop = loopingObject(data)
  return splitData(resultLoop)
}

const splitData = (isiData) => {
  const hasil = isiData.split(' ');
  return hasil[1];
}

const bacaFile = (file, index, array) => {
  fs.readFile(file, 'utf8', function(err, data){
    if (err) {
      console.log('error:' + err)
    }else{
      const hasilParse = parseData(data);
    }  
  });
}

const bacaData = (fnCallback) => {  
  const arrayFile = [file1,file2,file3];
  arrayFile.forEach((file, index, array) => { 
    fs.readFile(file, 'utf8', function(err, data){
      if (err) {
        console.log('error'+ err);
      }else{
        const hasilParse = parseData(data);
        // array[index] = hasilParse
        isiArrayFile.push(hasilParse);
        if (index == (arrayFile.length-1)) {
          fnCallback(err,isiArrayFile);
        }
      }  
    })
  })
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
