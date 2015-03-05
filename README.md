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

Install via Bower
-------------------
bower install foundation-datepicker

Manual Installation
-------------------

1. download & unzip source from GitHub repository:
http://foundation-datepicker.peterbeno.com/example.html

2. copy the files
    3. **/js/foundation-datepicker.js**
    4. **/stylesheets/foundation-datepicker.css**
       somewhere into your project 

3. &lt;link&gt; and &lt;script&gt; them into your page 

4. to see the arrows and icons, please include **font-awesome**:

    &lt;link href=&quot;http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css&quot; rel=&quot;stylesheet&quot;&gt;
	
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
	
Version without Font Awesome
-------------------
Can be found in separate branch:
https://github.com/najlepsiwebdesigner/foundation-datepicker/tree/no-font-awesome


A note on forking:
-------------------
By forking this project you hereby grant permission for any commits to your fork to be merged back into this repository and, with attribution, be released under the terms of the MIT License.
