Foundation Datepicker
=====================

**Feel free to contribute! Fork, modify, and send me a pull request, I'll try my best to merge it as soon, as possible.**

Foundation datepicker jQuery plugin, based on bootstrap-datepicker project found at https://github.com/eternicode/bootstrap-datepicker.

For more information, please see included example, or visit http://foundation-datepicker.peterbeno.com

Foundation version support
-------------------
Foundation 5 is fully supported. For Foundation 4 version, check out last compatible version:
https://github.com/najlepsiwebdesigner/foundation-datepicker/releases/tag/1.2.0


How to include this in your project:

Install via Bower or NPM
-------------------
`bower install foundation-datepicker`

`npm install foundation-datepicker`

Manual Installation
-------------------

1. download & unzip source from GitHub repository:
http://foundation-datepicker.peterbeno.com/example.html

2. copy the files
    3. **/js/foundation-datepicker.js**
    4. **/stylesheets/foundation-datepicker.css**
       somewhere into your project

3. &lt;link&gt; and &lt;script&gt; them into your page

4. to see the arrows and icons, please include **font-awesome** of **foundation icons**:

  http://zurb.com/playground/foundation-icons

  `<link href="//cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet">`

  http://fortawesome.github.io/Font-Awesome/

  `<link href="//netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" rel="stylesheet">`

Language translations
-------------------
You can pass argument to constructor to choose language used:
```
$('.fdatepicker').fdatepicker({
  language: 'de'
});
```

Available languages are:

- English (en) - default
- French (fr)
- Polish (pl)
- Spanish (es)
- Portugese (pt)
- Portugese Brasil (pt_br)
- Italian (it)
- German (de)
- Romanian (ro)
- Hungarian (hu)
- Russian (ru)
- Czech (cz)
- Dutch (nl)
- Greek (el)
- Ukrainian (uk)
- Norwegian (no)
- Turkish (tr)
- Slovak (sk)

Icons
------------------
Datepicker uses three icons. It works with foundation font and font awesome out-of-the box. If you dont want to use iconic font, you can customize buttons via classes:
- `fa-chevron-right fi-arrow-right` - right arrow
- `fa-remove fa-times fi-x` - close sign
- `fa fa-chevron-left fi-arrow-left` - left arrow

*Version without Font Awesome* (behind master) can be found in separate branch:
https://github.com/najlepsiwebdesigner/foundation-datepicker/tree/no-font-awesome

Build system
------------------
Grunt is used.
`grunt build` compiles scss & minifies js and css


A note on forking:
-------------------
By forking this project you hereby grant permission for any commits to your fork to be merged back into this repository and, with attribution, be released under the terms of the Apache License.
