# grunt-ember-i18n-include

This is a helper task for [Ember.I18n](https://github.com/jamesarosen/ember-i18n) that let you easily split your language files into several per language that are then combined using grunt. 

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ember-i18n-include --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ember-i18n-include');
```

## The "ember_i18n_include" task

### Overview
In your project's Gruntfile, add a section named `ember_i18n_include` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ember_i18n_include: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.makeItAwsome
Type: `Boolean`
Default value: false

Makes everything a tiny bit more awesome.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  ember_i18n_include: {
    files: {
      'dest/en.js': 'app/languages/en.js'
    },
  },
})
```

###Sample input/output

####en.js
```js
Em.I18n.translations = {
    'sidebar': '@@sidebar.js',
    'header': 'My header'
})
```

####en/sidebar.js
```js
{ 'included' : 'sidebar' }
```

####output/en.js
```js
Em.I18n.translations = {
    'sidebar': { 'included' : 'sidebar' },
    'header': 'My header'
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).