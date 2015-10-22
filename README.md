Foundation Datepicker
=====================

**Feel free to contribute! Fork, modify, and send me a pull request, I'll try my best to merge it as soon, as possible.**

Examples and documentation available at http://foundation-datepicker.peterbeno.com

Foundation version support
-------------------
Foundation 5 is fully supported. For Foundation 4 version, check out last compatible version:
https://github.com/najlepsiwebdesigner/foundation-datepicker/releases/tag/1.2.0


How to include this in your project:

Install via Bower or NPM
-------------------
`bower install foundation-datepicker`

`npm install foundation-datepicker`

after running continue with step 3 from manual instalation. Files you should use are mentioned in step 2.

Manual Installation and Setup
-------------------

1. download & unzip source from GitHub repository:
http://foundation-datepicker.peterbeno.com/example.html

2. copy the files `/js/foundation-datepicker.js` and `/stylesheets/foundation-datepicker.css`
    somewhere into your project. Minified versions are also available.
3. &lt;link&gt; and &lt;script&gt; them into your page

4. to see the arrows and icons, please include **font-awesome** or **foundation icons**:

  http://zurb.com/playground/foundation-icons

  `<link href="//cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet">`

  http://fortawesome.github.io/Font-Awesome/

  `<link href="//netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" rel="stylesheet">`

Language translations
-------------------
Foundation datepicker uses external files to store translation data. 
To use language, you have to include correct file from **js/locales** directory, then correctly initalize fdatepicker with iso code of language included. 

Example of using slovak language:
```
<!-- somewhere in header -->
<script src="js/foundation-datepicker.js"></script>
<script src="js/locales/foundation-datepicker.sk.js"></script>
<!-- ... -->
<script>
$('.fdatepicker').fdatepicker({
  language: 'sk'
});
</script>
```

65 languages are available, thanks community and bootstrap-datepicker project. For complete list, see **js/locales** directory.



Icons
------------------
Datepicker uses three icons. It works with foundation font and font awesome out-of-the box. If you dont want to use iconic font, you can customize buttons via classes:
- `fa-chevron-right fi-arrow-right` - right arrow
- `fa-remove fa-times fi-x` - close sign
- `fa fa-chevron-left fi-arrow-left` - left arrow

*Version without Font Awesome* (behind master) can be found in separate branch:
https://github.com/najlepsiwebdesigner/foundation-datepicker/tree/no-font-awesome

to use foundation icon font, include:<br>
`<link rel="stylesheet" href="foundation/fonts/foundation-icons.css">`

to use font-awesome, use include:<br>
`<link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">`

Build system
------------------
Grunt is used.
`grunt build` compiles scss & minifies js and css.
Before running, you must install local grunt and npm deps via:
`npm install`

Angular
------------------
For integration with Angular, please see https://github.com/najlepsiwebdesigner/foundation-datepicker/issues/55#issuecomment-138681504

Foundation datepicker is jQuery plugin, so you **have to** use jQuery.


Methods
------------------
<table>
	<tr>
		<th>Method</th><th>Description</th>
	</tr>
	<tr>
		<td>.fdatepicker(options)</td><td>Initializes a datepicker.</td>
	</tr>
	<tr>
		<td>.fdatepicker('show')</td><td>Show the datepicker.</td>
	</tr>
	<tr>
		<td>.fdatepicker('hide')</td><td>Hide the datepicker.</td>
	</tr>
	<tr>
		<td>.fdatepicker('place')</td><td>Updates the date picker's position relative to the element</td>
	</tr>
	<tr>
		<td>.fdatepicker('update', value)</td><td>Updates the date picker's value. It can be a string in the specified format or a Date object.</td>
	</tr>
</table>

Options
------------------
<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 100px;">Name</th>
			<th style="width: 50px;">type</th>
			<th style="width: 100px;">default</th>
			<th>description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>format</td>
			<td>string</td>
			<td>'mm/dd/yyyy'</td>
			<td>the date format, combination of d, dd, m, mm, yy, yyyy, hh, ii.</td>
		</tr>
		<tr>
			<td>language</td>
			<td>string</td>
			<td>'en'</td>
			<td>two-char iso shortcut of language you want to use</td>
		</tr>
		<tr>
			<td>weekStart</td>
			<td>integer</td>
			<td>0</td>
			<td>day of the week start. 0 for Sunday - 6 for Saturday</td>
		</tr>
		<tr>
			<td>startView</td>
			<td>string|integer</td>
			<td>month</td>
			<td>set the start view mode. Accepts: 'decade' = 4, 'year' = 3, 'month' = 2, 'day' = 1, 'hour' = 0</td>
		</tr>
		<tr>
			<td>minView|maxView</td>
			<td>string|integer</td>
			<td></td>
			<td>set a limit for view mode. Accepts: 'decade' = 4, 'year' = 3, 'month' = 2, 'day' = 1, 'hour' = 0</td>
		</tr>
		<tr>
			<td>pickTime</td>
			<td>boolean</td>
			<td>false</td>
			<td>enables hour and minute selection views, equivalent of minView = 0, else minView = 2</td>
		</tr>
	</tbody>
</table>

Events
-------------------
<table>
	<thead>
		<tr>
			<th style="width: 150px;">Event</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>show</td>
			<td>This event fires immediately when the date picker is displayed.</td>
		</tr>
		<tr>
			<td>hide</td>
			<td>This event is fired immediately when the date picker is hidden.</td>
		</tr>
		<tr>
			<td>changeDate</td>
			<td>This event is fired when the date is changed.</td>
		</tr>
		<tr>
			<td>outOfRange</td>
			<td>This event is fired when user tries to select disabled date.</td>
	</tbody>
</table>


A note on forking:
-------------------
**By forking this project you hereby grant permission for any commits to your fork to be merged back into this repository and, with attribution, be released under the terms of the Apache License.**

Issues
-------------------
Before you submit a new issue, please check closed (maybe also open) issues [here](https://github.com/najlepsiwebdesigner/foundation-datepicker/issues?q=is%3Aissue+is%3Aclosed), maybe your problem was solved already. Thanks!
