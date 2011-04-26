# jquery.stepScroll

A jQuery plug-in to convert an HTML list of images into a side-scrolling, pausing slideshow.

## Dependencies

[jQuery](http://jquery.com/) 1.2.1 or later.

## Usage

### HTML

    <ul id="slideshow">
      <li><img src="images/01.jpg" width="250" height="250" alt="Slide 1" /></li>
      <li><img src="images/02.jpg" width="125" height="250" alt="Slide 2" /></li>
      <li><img src="images/03.jpg" width="175" height="250" alt="Slide 3" /></li>
      <li><img src="images/04.jpg" width="200" height="250" alt="Slide 4" /></li>
      <li><img src="images/05.jpg" width="250" height="250" alt="Slide 5" /></li>
    </ul>

### JavaScript

    $(function() {
      $("#slideshow").stepScroll();
    });

## Options

- **scroll**
  The time taken to scroll from one item to the next, in milliseconds. Default is `1500`.
- **delay**
  The time to pause on each item before scrolling to the next, in milliseconds. Default is `2000`.
- **opacity**
  The opacity of unfocused items, between 0 (transparent) and 1 (opaque). Default is `.5`.

### Example

    $(function() {
      $("#slideshow").stepScroll({
        scroll:  1500, 
        delay:   2000,
        opacity: .5
      });
    });

## License

Copyright (c) 2011 Marcus Campbell

jquery.stepScroll is dual-licensed under the MIT and GPL Version 2 licenses:

- http://www.opensource.org/licenses/mit-license.php
- http://www.gnu.org/licenses/gpl.html