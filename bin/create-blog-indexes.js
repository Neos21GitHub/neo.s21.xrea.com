const fs = require('fs');
const path = require('path');

const constants = require('../lib/constants');
const listDirectories = require('../lib/list-directories');
const isExist = require('../lib/is-exist');

/*!
 * Blog の index.md がなければ作る
 */

const templateYearIndex  = fs.readFileSync('./src/templates/blog-year-index.md' , 'utf-8');
const templateMonthIndex = fs.readFileSync('./src/templates/blog-month-index.md', 'utf-8');

listDirectories(`${constants.pages.src}/blog`).forEach(directoryPath => {
  if(directoryPath.match((/([0-9]{4})$/u))) {  // 年
    const yearIndexFilePath = path.resolve(directoryPath, './index.md');
    if(!isExist(yearIndexFilePath)) {
      const match = directoryPath.match((/([0-9]{4})$/u));
      const year = match[1];
      const output = templateYearIndex.replace((/YYYY/gu), year);
      fs.writeFileSync(yearIndexFilePath, output, 'utf-8');
      console.log(`Write Year [${yearIndexFilePath}]`);
    }
    return;
  }
  
  if(directoryPath.match((/([0-9]{4})\/([0-9]{2})$/u))) {  // 月
    const monthIndexFilePath = path.resolve(directoryPath, './index.md');
    if(!isExist(monthIndexFilePath)) {
      const match = directoryPath.match((/([0-9]{4})\/([0-9]{2})$/u));
      const year = match[1];
      const month = match[2];
      const output = templateMonthIndex.replace((/YYYY/gu), year).replace((/MM/gu), month);
      fs.writeFileSync(monthIndexFilePath, output, 'utf-8');
      console.log(`Write Month [${monthIndexFilePath}]`);
    }
    return;
  }
  
  console.log(`Unknown Path [${directoryPath}]`);
});

console.log('Create Blog Indexes : Succeeded');