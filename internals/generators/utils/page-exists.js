const fs = require('fs');
const path = require('path');


const pageComponents = (page) => fs.readdirSync(
  path.join(__dirname, `../../../client/src/app/components/${page}`),
);

const pageContainers = fs.readdirSync(
  path.join(__dirname, '../../../client/src/app/pages'),
);

function pageExists(value) {
  try{ 
    return pageComponents(value).concat(pageContainers).indexOf(value) >= 0
  }
  catch{}
};

module.exports = pageExists;
