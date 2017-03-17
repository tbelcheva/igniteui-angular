﻿# Samples Source
The files contained in this folder are the source files for the samples. The samples are generated by combining partial HTML files with the template file and are ultimately placed in the `samples` folder off the root of this repository.

## Building Samples
When you are developing samples you should use `grunt watch` which automatically rebuilds the samples any time you make a change to any file associated with the samples.

If you want to manually build the samples you can run `grunt generator:default`.

## Using Partial HTML Files
Sample HTML files are available under the `src` folder and require that you use a few placeholder tokens in order to build pages correctly.

### Tokens
- `|styles|`: Used to add `link` and `style` elements to the top of the page inside the `head` element
- `|content|`: Used to add the main markup of the page
- `|scripts|`: Used to add scripts at the end of the page 

**Note:** In order for relative links to work on your machine the same way they work on the server ([github.io](http://igniteui.github.io/igniteui-angular/)) you need to run the samples from a root directory named `igniteui-angular`.  
