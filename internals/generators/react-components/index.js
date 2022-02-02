'use strict'

const pageExists = require('../utils/page-exists');
const componentExists = require('../utils/component-exists');

module.exports = {
	description: 'Add an unconnected component',
	prompts: [
		{
      type: 'input',
      name: 'namePage',
      message: 'The name of the page to add your component:',
      default: 'main',
      validate: value => {
        if (/.+/.test(value)) {
          return pageExists(value)
            ? true
            : 'This page does not exist any';
        };

        return 'Please write correct page';
      },
    },
    {
      type: 'input',
      name: 'nameComponent',
      message: 'Component name:',
      default: 'button',
      validate: (value,{ namePage }) => {
        if (/.+/.test(namePage, value)) {
          return componentExists(namePage, value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'scss',
      default: false,
      message: 'Add .scss file?',
    }
	],
	actions: (data) => {
		const actions = [
			{
        type: 'add',
        path: '../../client/src/app/components/{{kebabCase namePage}}/{{kebabCase nameComponent}}/{{kebabCase nameComponent}}.jsx',
        templateFile: './react-components/component.jsx.hbs',
        abortOnFail: true,
      },
      {
        path: '../../client/src/app/components/{{kebabCase namePage}}/index.jsx',
        pattern: /(\/\/ PLOP IMPORTS)/g,
        template: 'export { default as {{properCase nameComponent}} } from \'./{{kebabCase nameComponent}}/{{kebabCase nameComponent}}.jsx\'\n$1',
        type: 'modify',
      },
		]

    if (data.scss) {
      actions.push({
        type: 'add',
        path: '../../client/src/app/components/{{kebabCase namePage}}/{{kebabCase nameComponent}}/{{kebabCase nameComponent}}.scss',
        templateFile: './react-components/component.scss.hbs',
        abortOnFail: true,
      })
    }

		return actions
	},
}
