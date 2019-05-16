### Webpack Notes
- started with the advent of Single Page Apps
    - SPAs have a much larger amount of JS code that needs to be compiled
    - Problems inherent in SPAs
        - javascript modules were created to get away from having files thousands of lines long
            - this separated files into many small files
                - load order, the order in which files are loaded becomes important since some code depends on others
            - having many JS files and loading them over HTTPS slows down the page, especially for mobile
    - Webpack takes the collection of JS modules and merges them into a large, single file
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
            
# UpStarMusic

