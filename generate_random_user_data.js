const fs = require('fs');

function getRandomName() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const nameLength = Math.floor(Math.random() * (7 - 3 + 1)) + 3; // 隨機生成 3 - 7 個字母長度組合當作姓名
  let name = '';
  for (let i = 0; i < nameLength; i++) {
    name += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return name;
}

function getRandomHeight() {
  const height = (Math.random() * (200 - 50) + 50).toFixed(Math.floor(Math.random() * 3)); // 身高取 50 - 200 之間的隨機數字，並且有 0 - 2 位的小數點
  return parseFloat(height); // 將字串轉成數字
}

function getRandomAge() {
  return Math.floor(Math.random() * (100 + 1)); // 年齡取 0 -100 之間的隨機數字
}

function getRandomZipCode() {
  const zipCodeCount = Math.floor(Math.random() * 3) + 1; // 隨機生成 1 到 3 個 zipcode
  const zipCodes = [];

  for (let i = 0; i < zipCodeCount; i++) {
    let zipCode = '';
    for (let j = 0; j < 5; j++) {
      zipCode += Math.floor(Math.random() * 10); // 每個 zipcode 的值為隨機的 5 位數字
    }
    zipCodes.push(zipCode); // 將生成的 zipcode 加入到陣列中
  }

  return zipCodes;
}

function generateData(count) {
  let result = '';
  for (let i = 0; i < count; i++) {
    const item = {
      name: getRandomName(),
      height: getRandomHeight(),
      age: getRandomAge(),
      zipCode: getRandomZipCode()
    };
    result += `('${JSON.stringify(item)}')`; // 將每個物件轉成 JSON 格式後包在()中

    if (i < count - 1) {
      result += ','; // 在每個物件之間加上逗號，除了最後一個
    }
  }
  return result;
}

// 生成 1 萬筆資料
const singleLineData = generateData(10000);

// 寫入到 txt 檔
fs.writeFile('generated_data.txt', singleLineData, (err) => {
  if (err) {
    console.error('寫入檔案失敗:', err);
  } else {
    console.log('檔案成功寫入: generated_data.txt');
  }
});
