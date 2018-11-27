# ioBroker.adapter-core
Core module to be used in ioBroker adapters. Acts as the bridge to js-controller.

This replaces the `utils.js` included in the ioBroker template adapter.

## Usage
1. Add this as a dependency: `npm i iobroker.adapter-core`
2. Replace  
   ```js
   const utils = require(__dirname + '/lib/utils');
   ```
   with
   ```js
   const utils = require('iobroker.adapter-core');
   ```
3. Create an adapter instance as usual:  
   ```js
   const adapter = utils.adapter( /* options */ );
   ```

## Tips while working on this module
* ```npm run build``` creates a clean rebuild of the module. This is done automatically before every build
* ```npm run lint``` checks for linting errors
* ```npm run watch``` creates an initial build and then incrementally compiles the changes while working.

## Errors in the definitions?
If you find errors in the definitions, e.g. function calls that should be allowed but aren't, please open an issue here or over at https://github.com/DefinitelyTyped/DefinitelyTyped and make sure to mention @AlCalzone.

## Changelog

### v1.0.0 (2018-27-11)
* (AlCalzone) Initial version

## MIT License

Copyright (c) 2018 AlCalzone

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
