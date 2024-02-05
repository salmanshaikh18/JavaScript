## Problem

Make a rectangle and wehn we move mouse on that rectangle on the left side we want to gradually change the color of the rectangle to red and when we move mouse to the right side we want to change the color to blue.

When we move mouse to left side make the rectangle slow down the more mouse reachesh to the left and do the same when mouse goes to the right side

## Solution

1. First of all, find out if the mouse came and moved on the recantangle or not.

2. Now calculate whether the cursor is on the left or right from the center of the rectangle

3. Now calculate how much cursor is on the left from the center of the rectangle, and apply color with as much intensity as it is on the left, do the same on the right side as well but on the right color will be blue.


## `getBoundingClientRect()`

The `getBoundingClientRect()` method is a JavaScript method that is used to get the size and position of an element relative to the viewport. This method is often used with the `DOMRect` object, which represents a rectangle.

Here's an explanation of how `getBoundingClientRect()` works:

1. **Syntax:**
   ```javascript
   var rect = element.getBoundingClientRect();
   ```

   Here, `element` is the DOM element for which you want to retrieve the bounding rectangle.

2. **Return value:**
   The `getBoundingClientRect()` method returns a `DOMRect` object that contains the following properties:

   - `top`: The top coordinate of the rectangle.
   - `right`: The right coordinate of the rectangle.
   - `bottom`: The bottom coordinate of the rectangle.
   - `left`: The left coordinate of the rectangle.
   - `width`: The width of the rectangle.
   - `height`: The height of the rectangle.

3. **Usage:**
   Once you have the `DOMRect` object, you can access its properties to get information about the element's position and dimensions. For example:

   ```javascript
   var rectangle = document.getElementById('myRectangle');
   var rect = rectangle.getBoundingClientRect();

   console.log('Top:', rect.top);
   console.log('Right:', rect.right);
   console.log('Bottom:', rect.bottom);
   console.log('Left:', rect.left);
   console.log('Width:', rect.width);
   console.log('Height:', rect.height);
   ```

   This code retrieves the bounding rectangle of the element with the ID 'myRectangle' and logs its top, right, bottom, left, width, and height properties.

4. **Viewport-relative coordinates:**
   The coordinates provided by `getBoundingClientRect()` are relative to the viewport (the visible area of the browser window). The top-left corner of the viewport is considered the origin (0,0).

   If you want to get the position relative to the document, you can add the current scroll position to the `top` and `left` values:

   ```javascript
   var rect = element.getBoundingClientRect();
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

   var elementTop = rect.top + scrollTop;
   var elementLeft = rect.left + scrollLeft;
   ```

In summary, `getBoundingClientRect()` is a useful method for obtaining information about the position and dimensions of an element on the web page, often used in scenarios where dynamic calculations or interactions with the element's position are required.


## mapRange in GSAP

1. mapRange(inMin, inMax, outMin, outMax, valueToMap)
1. inMin : Number - The lower bound of the initial range to map from
2. inMax : Number - The upper bound of the initial range to map from
3. outMin : Number - The lower bound of the range to map to
4. outMax : Number - The upper bound of the range to map to
5. valueToMap : Number - The value that should be mapped (typically it's between inMin and inMax).
Returns: the mapped number

Example:

```JavaScript
//maps 0 in the -10 to 10 range to the same position in the 100 to 200 range
gsap.utils.mapRange(-10, 10, 100, 200, 0); // 150

// maps 50 in the range from 0 to 100 to the same position in the range from 0 to 500
gsap.utils.mapRange(0, 100, 0, 500, 50); // 250
```