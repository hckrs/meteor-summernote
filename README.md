# Summernote for Meteor
Super Simple WYSIWYG Editor on Bootstrap 3.0

Demo: http://hackerwins.github.io/summernote/


### Why Summernote?

Summernote has something specials no like others.

* Simple UI
* Interative WYSIWYG editing

### Easy to install

#### 01. install additional meteor packages

* summernote `meteor add hckrs:summernote`
* jquery `meteor add jquery`
* bootstrap-3 `meteor add mizzao:bootstrap-3`
* fontawesome4 `meteor add chrismbeckett:fontawesome4`


#### 02. target elements
And place `div` tag to somewhere in the `body` tag. This element will be placed by the visual representation of the summernote.
```html
<div id="summernote">Hello Summernote</div>
```

#### 03. summernote
Finally, run script after document ready.
```javascript
$(document).ready(function() {
  $('#summernote').summernote();
});
```

### API
Get HTML `code` if you need.

```javascript
var sHTML = $('#summernote').code();
```

`Destroy` summernote.

```javascript
$('#summernote').destroy();
```


### Supported platform
* Modern Browser (Safari, Chrome, Firefox, Opera, Internet Explorer 9+)
* OS (Windows, Mac, Linux)
