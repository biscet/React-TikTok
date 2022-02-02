const fs = require('fs');
const path = require('path');

const pageComponents = (page, name) => fs.readdirSync(
  path.join(__dirname, `../../../client/src/app/components/${page}/${name}`),
);

const pageContainers = fs.readdirSync(
  path.join(__dirname, '../../../client/src/app/pages'),
);

function componentExists(value, propName) {
  try{ 
    return pageComponents(value, propName).concat(pageContainers).indexOf(value) >= 0
  }
  catch{}
};

module.exports = componentExists;
