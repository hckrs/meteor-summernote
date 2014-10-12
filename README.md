# Summernote for Meteor
Super Simple WYSIWYG Editor on Bootstrap 3.0

Demo: http://hackerwins.github.io/summernote/


### Why Summernote?

Summernote has something specials no like others.

* Simple UI
* Interative WYSIWYG editing

### Easy to install

```meteor add hckrs:summernote```

### Easy to use

And place `div` tag to somewhere in the `body` tag. This element will be placed by the visual representation of the summernote.
```html
<div id="summernote">Hello Summernote</div>
```
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
