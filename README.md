foundation-datepicker
=====================

**Feel free to contribute! Fork, modify, and send me a pull request, I'll try my best to merge it as soon, as possible.**


Foundation datepicker jQuery plugin, based on bootstrap-datepicker project found at https://github.com/eternicode/bootstrap-datepicker.

For more information, please see included example, or visit http://foundation-datepicker.peterbeno.com

How to include this in your project:

Manual Installation
-------------------

1. download & unzip source from GitHub repository:
http://foundation-datepicker.peterbeno.com/example/example.html

2. copy the files
    3. **/example/js/foundation-datepicker.js**
    4.  **/example/css/foundation-datepicker.css**
        somewhere into your project 

3. &lt;link&gt; and &lt;script&gt; them into your page 

4. to see the arrows and icons, please include **font-awesome**:

    &lt;link href=&quot;http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css&quot; rel=&quot;stylesheet&quot;&gt;
	
### Additional Docs? ###

Understanding Bootstrapp Datepicker for Foundation

The docs for this plugin are some of the clearest and most concise I have ever encountered, however they are also slightly brain twisting and it may take you a while to understand what is going on.

Unless you can read the code examples naturally the first thing I would suggest doing is taking a quick refresher in javascript shorthand http://www.jquery4u.com/javascript/shorthand-javascript-techniques/

This will show that what at first seemed like a complex and bewildering example

    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
 
    var checkin = $('#dpd1').fdatepicker({
        onRender: function (date) {
            return date.valueOf() & now.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() & checkout.date.valueOf()) {
            var newDate = new Date(ev.date); // a
            newDate.setDate(newDate.getDate() + 1);
            checkout.setValue(newDate);
        }
        checkin.hide();
        $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').fdatepicker({
        onRender: function (date) {
            return date.valueOf() & checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        checkout.hide();
    }).data('datepicker');

Can be expanded into more verbose code for clarity of understanding

	var nowTemp = new Date(); 
	// Assign the current date to a variable using the native javascript Date object

    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    // Using the data cached in the nowTemp variable which defaults to the settings on your system you can use the methods included in the Date object to define a date for the region of deployment

 
    var checkin = $('#dpd1').fdatepicker({ // This calls the datepicker plugin for your input
        onRender: function (date) { 
        // This assigns the onRender function as a property of the fdatepicker object literal and allows it to accept a date value (line 626 from _setDate mehod | date: this.date)
            if (date.valueOf() & now.valueOf()){ 
            // If the date passed to the function is the same as the current date
            	return 'disabled'; // Do this
            } 
            else 
            {
            	return ''; // Or this
            }
        }
    }).on('changeDate', function (ev) { 
    	// Expose the included changeDate event using jQuery's .on event listener and execute an anoymous function accepting a value ev (Line 195 ev = this._events[i][1];)
        if (ev.date.valueOf() & checkout.date.valueOf()) {
        // if the first condition has a value, and the second condition has a value
            var newDate = new Date(ev.date); // assign the new date to a variable
            newDate.setDate(newDate.getDate() + 1); // 
            checkout.setValue(newDate); // set the value on the <input> element to the selected date
        }
        checkin.hide(); // hide this element
        $('#dpd2')[0].focus(); // change the DOM focus to the new element
    }).data('datepicker'); 
    // api.jquery.com/data/‎ The .data() method allows us to attach data of any type to DOM elements in a way that is safe from circular references and therefore from memory leaks.
    var checkout = $('#dpd2').fdatepicker({ // This is basically the same as above for the checkout element
        onRender: function (date) {
            return date.valueOf() & checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        checkout.hide();
    }).data('datepicker');

So a little clearer then, but still a lot going on. It's probably a good idea if we start again from the beginning with a less involved example.

Start by downloading the files from https://github.com/najlepsiwebdesigner/foundation-datepicker and unpacking them into your development folder.

When working with plugin demo packages I find it easiest to make a reference copy of the example.html file and then start by removing everything but the most basic example. This way you're not dredging through heaps of code, and there's far fewer points of failure which may confuse you.

So leaving everything in the <head> as it is, and leaving all the javascript code inside the first <script> tag as is (your console will tell you if there's an error and there is no point in duplicating work) you can safely remove the last <script> tag which contains a tracking script for page views and all the boilerplate html until all you are left with is

<p>Attached to a field with the format specified via options.</p>
<div class="panel">
    <input type="text" class="span2" value="02-16-2012" id="dp1">
</div>

$(function () { 
// This is jQuery shorthand to ensure your script runs after the page is loaded

    $('#dp1').fdatepicker({
        format: 'mm-dd-yyyy'
    });
});

Here we can see the id on the input matches the DOM element selector to which the fdatepicker plugin is called upon using the format option. I'm not in America so the first thing I could do would be to change format: 'dd-mm-yyyy' and correct the dates for my region. Also because I plan to use this for a simple javascript based hotel booking system I can also remove the value attribute from the input element.

Most of the other example options are not relevant to our project so we can safely skip to the disabling form fields section as this will be the bare minimum functionality our users will expect to see from this feature.

So after careful evaluation we find out original look at the docs contained a few mistakes caused by the incorrect rendering of ascii elements on the page. The correct expanded code looks like

$(function () {
				console.log('this');
				var nowTemp = new Date(); 
	// Assign the current date to a variable using the native javascript Date object

    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    // Using the data cached in the nowTemp which defaults to the settings on your system you can use the methods included in the Date object to define a date for the region of deployment

 
    var checkin = $('#dp4').fdatepicker({ // This calls the datepicker plugin for your input
        onRender: function (date) { 
        // This assigns the onRender function as a property of the fdatepicker object literal and allows it to accept a date value (line 626 from _setDate mehod | date: this.date)
            if (date.valueOf() == now.valueOf()){ 
            // If the date passed to the function is the same as the current date
            	return 'disabled'; // Do this
            } 
            else 
            {
            	return ''; // Or this
            }
        }
    }).on('changeDate', function (ev) { 
    	// Expose the included changeDate event using jQuery's .on event listener and execute an anoymous function accepting a value ev (Line 195 ev = this._events[i][1];)
        if (ev.date.valueOf() & checkin.date.valueOf()) {
        // if the first condition has a value, and the second condition has a value
            var newDate = new Date(ev.date); // assign the new date to a variable
            newDate.setDate(newDate.getDate() + 1); // 
            checkin.setValue(newDate); // set the value on the <input> element to the selected date
        }
        checkin.hide(); // hide this element
        $('#dp5')[0].focus(); // change the DOM focus to the new element
    }).data('datepicker'); 
    // api.jquery.com/data/‎ The .data() method allows us to attach data of any type to DOM elements in a way that is safe from circular references and therefore from memory leaks.
    var checkout = $('#dp5').fdatepicker({ // This is basically the same as above for the checkout element
        onRender: function (date) {
            return date.valueOf() < checkin.date.valueOf() ? 'disabled' : '';
        }
    }).on('changeDate', function (ev) {
        checkout.hide();
    }).data('datepicker');
				
			});



Reference Material
Installing the package manager in Sublime Text https://sublime.wbond.net/
Getting up and running with LESS http://tech.diaslopes.com/?p=112
This just makes everything so much more fun http://emmet.io/download/










