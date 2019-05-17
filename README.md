### Webpack Notes
- started with the advent of Single Page Apps
    - SPAs have a much larger amount of JS code that needs to be compiled
    - Problems inherent in SPAs
        - javascript modules were created to get away from having files thousands of lines long
            - this separated files into many small files
                - load order, the order in which files are loaded becomes important since some code depends on others
            - having many JS files and loading them over HTTPS slows down the page, especially for mobile
    - Webpack takes the collection of JS modules and merges them into a large, single file
    - Webpack uses a config file to configure how we create the output file `bundle.js`
    
### Webpack Config Properties
- **Entry Property**
    - typically the entry point of the application is the `index.js` file
    - however, the entry point is typically the point where the other code is being imported into, and
    is not dependent on the other code
    - `entry` property is the path of the entry point file relative to the root project directory
- **Output Property**
    - `output` property tells Webpack where to build the app. It has two properties:
        - `path` - is where the file should be saved, *must* be an absolute file reference
        - `publicPath` - prepends the string of the folder you wish to expose public assets to 
        - `filename` is the name of the bundle, it can be anything
    - `module` - this is the system that is used to define which module loaders (known as `rules`) are used  on which files
        - `rules` - rules are the name for the loaders that are used on each file that is passed through webpack
            - `use` - property in the `rules` object that identifies the loader to be used by npm name
                - the order of the loaders given does matter such as: `use: ['style-loader', 'css-loader']`, the `style-loader`
                must come before the `css-loader`
                - `options` - inside the object sometimes used for `use`, this is where you pass in the paramemters needed
                by the module/loader
            - `test` - property that is a regex expression to define which files will be passed into the loader
            
    
        
    
### Module Systems
- rules and syntax that are used that link together files
    - 3 common ones:
        1. CommonJS
            - recommended and used by Node JS
                - uses `require`
                - uses `module.exports`
        2. AMD - Asynchronous Module Definition
            - used on the front end primarily in code that can be loaded up asynchronously
            - uses `define`
            - uses `require`
        3. ES2015 - Ecmascript standard
            - uses `export`
            - uses `import`
### Module Loaders
- Webpack can be used to handle all types of different files and transpile them into the `bundle.js`
- Each loader tends to be specific towards certain files. Therefore, within the config, you need to specify which files
are handled by which loaders
    - Common Loaders
        - **Babel** - Babel is used to transpile ES 6/7/8 code into ES5 code so it is readable by older browsers
            - babel-loader - connects babel to webpack
            - babel-core - takes in the code, passes it through babel and outputs the ES5 files
            - babel-preset-env - ruleset that tells babel exactly what pieces of ES 6/7/8 syntax to look for and how
            to turn it into ES5 code
            - **Babel will require a `.babelrc` file to tell Babel what to do with our JS files**
        - **CSS**
            - css-loader - knows how to deal with CSS imports
            - style-loader - takes the CSS imports and adds them to the HTML document
                - by default these two loaders will inject the CSS into a style tag inside the `head` of our 
                HTML file
                    - separate style sheets is a lot faster to download due to how the browser handles
                    parallel download requests
        - **Images**
            - image-webpack-loader - will resize/compress an image for us
            - url-loader - behaves differently based on the size of the image
                - if smaller than 10kb, it'll include th eimage in bundle as raw data
                - if larger, it includes the raw image in the output directory
    - Plugins
        - Plugins are different from loaders. Loaders are used for pre-processing before a file is included in the webpack
        bundle.
        - Plugins work somewhat outside that pipeline. They have the ability to keep files outside the bundle.
        
### Codesplitting
-  allows us to split the bundle into separate JS files and then programmatically decide when to load up the bundle inside our
codebase
- by adding an `import` call, you can effectively split your bundle up
    - will need 2 node modules:
        - `babel-plugin-dynamic-import-webpack`
        - `babel-plugin-syntax-dynamic-import`
            - these allow for dynamic imports that can be placed in your codebase
            
              

# UpStarMusic

