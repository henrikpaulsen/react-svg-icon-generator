React SVG Icon Generator
========================

Generate React Icon Component from SVG icons to show, resize and recolor them.

We have prepared live demo for you at [React SVG Icon Live Generator](https://react-svg-icon-live-generator.herokuapp.com)

## Fastest way to get your svg converted to React Component

```
yarn global add react-svg-icon-generator
yarn react-svg-icon-generator -- --svgDir ./icons --destination ./Icon.tsx
```

for detailed options run just `yarn react-svg-icon-generator`

## Preview of Generated Component

![Preview](https://raw.githubusercontent.com/blueberryapps/react-svg-icon-generator/master/examples/previews.png)

[source directory with SVG](https://github.com/blueberryapps/react-svg-icon-generator/tree/master/examples/simple/icons) and [this is output component from gulp task](https://github.com/blueberryapps/react-svg-icon-generator/blob/master/examples/simple/components/Icon.js) so in production you are without any dependencies at all.

## Instalation

you need to add this just to development, because it will generate self contained react component directly to your codebase
```bash
npm install --save-dev react-svg-icon-generator
```

## Setup gulp task simple


```js
const configureSvgIcon = require('react-svg-icon-generator').default;

configureSvgIcon({
  destination: path.join(__dirname, 'components', 'Icon.js'),
  svgDir: './icons',
});
```

- **svgDir** (required) - path to your directory with svg files. Can be relative path but it is better to use `path.join(__dirname, 'icons')` absolute path so it will work in any directory of project
- **destination** (required) -  path.join(__dirname, 'components', 'Icon.js')

run it by `gulp svg-icon`

## Setup gulp task full

```js
const configureSvgIcon = require('react-svg-icon-generator').default;

configureSvgIcon({
  comment: 'Generated by gulp svg-icon, if you add new icon run gulp svg-icon',
  componentName: 'Icon',
  destination: path.join(__dirname, 'components', 'Icon.js'),
  keepFillColor: false,
  native: false,
  radium: true,
  reactPureRender: true,
  svgDir: path.join(__dirname, 'icons'),
  template: path.join(__dirname, 'template', 'icon.nunjucks'),
});
```


- **comment** (optional) - it will be added to generated component, so other developer will know what to do
- **componentName** (optional) - it will change the name of the component, default to 'Icon'
- **keepFillColor** (optional) - it will keep the original fill color from imported SVG in case you want to use multiple colors in your icon, therefore you will not be able to use `color` prop
- **native** (optional) - it will generate component that can be used in React Native projects, this functionality depends on [react-native-svg](https://github.com/react-native-community/react-native-svg) library, you can easily overwrite [default native template](https://github.com/blueberryapps/react-svg-icon-generator/blob/master/template/icon_native.nunjucks) using *template* option
- **reactPureRender** (optional) - it will use `import {PureComponent} from 'react';` instead of `import {Component} from 'react';`. If you use this, make sure you use React >= v15.3.0. 
- **radium** (optional) - it will import radium and wrap Icon component with Radium wrapper
- **template** (optional) - provide path to your custom template, you can look at example at [Icon.template](https://github.com/blueberryapps/react-svg-icon-generator/blob/master/template/icon.nunjucks)


run it by `gulp svg-icon`

## Setup gulp task own name

```js
const {configureGenerator} = require('react-svg-icon-generator').default;

const config = {
  comment: 'Generated by gulp svg-icon, if you add new icon run gulp svg-icon-whatever',
  destination: path.join(__dirname, 'components', 'Icon.js'),
  reactPureRender: true,
  svgDir: path.join(__dirname, 'icons'),
  template: path.join(__dirname, 'template', 'icon.nunjucks'),
}

gulp.task('svg-icon-whatever', configureGenerator(config));
```


same as previous + your own task name


## Use generate Icon component

```js
import React, {Component} from 'react';
import Icon from './Icon';

export default class App extends Component {
  render() {
    return (
      <div>
        Simple possible usage
        <Icon kind='clock' />

        Setup color and bounding width and height
        <Icon kind='close' color='#748' width={500} height={100} />

        Setup color and bounding width and height to size (square)
        <Icon kind='close' color='red' size={600} />

        Setup onClick behavior
        <Icon kind='close' onClick={() => alert('clicked on icon')} />

        Show all icons at once with description (for finding right icon)
        <Icon preview />
      </div>
    );
  }
}
```

## Development

```bash
git clone git@github.com:blueberryapps/react-svg-icon-generator.git
cd react-svg-icon
npm i
npm link
cd examples/simple
npm link react-svg-icon-generator
npm i
gulp svg-icon
npm start
open http://127.0.0.1:3000
```

## Thanks
This package was build upon [Library Boilerplate](https://github.com/gaearon/library-boilerplate) from [Dan Abramov](https://github.com/gaearon)
