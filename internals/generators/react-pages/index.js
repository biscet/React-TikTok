'use strict'

const pageExists = require('../utils/page-exists');

module.exports = {
	description: 'Add an unconnected page',
	prompts: [
		{
      type: 'input',
      name: 'namePage',
      message: 'The name of the page:',
      default: 'my page',
      validate: value => {
        if (/.+/.test(value)) {
          return pageExists(value)
            ? 'This page does exist'
            : true;
        };
      },
    },
    {
      type: 'input',
      name: 'nameComponent',
      message: 'The name of the component:',
      default: 'stack',
    },
    {
      type: 'confirm',
      name: 'lazyPage',
      message: 'Make a lazy page load?',
      default: true,
    },
	],
	actions: (data) => {
		const actions = [
			{
        type: 'add',
        path: '../../client/src/app/pages/{{kebabCase namePage}}/index.jsx',
        templateFile: './react-pages/page.jsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../client/src/app/pages/{{kebabCase namePage}}/{{kebabCase namePage}}.scss',
        templateFile: './react-pages/page.scss.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../client/src/app/components/{{kebabCase namePage}}/{{kebabCase nameComponent}}/{{kebabCase nameComponent}}.jsx',
        templateFile: './react-components/component.jsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../client/src/app/components/{{kebabCase namePage}}/index.jsx',
        templateFile: './react-pages/index.jsx.hbs',
        abortOnFail: true,
      },
		]

    if (data.lazyPage) {
      actions.push({     
        path: '../../client/src/app/app.jsx',
        pattern: /(\/\/ PLOP IMPORTS)/g,
        template: 'const {{properCase namePage}} = lazy(() => import(\'@pages/{{kebabCase namePage}}\'))\n$1',
        type: 'modify',      
      })
    }else{
      actions.push({     
        path: '../../client/src/app/app.jsx',
        pattern: /(\/\/ PLOP IMPORTS)/g,
        template: 'import {{properCase namePage}} from \'@pages/{{kebabCase namePage}}\'\n$1',
        type: 'modify',      
      })
    }

		return actions
	},
}
