## Problem

- Make a rectangle end when cursor is on center then rekatangle is at center, when cursor starts going left then rectangle also starts going left, but as cursor goes left, speed of rectangle slows down while going to left. Same happens with right side as well


## mapRange() in gsap

# mapRange in GSAP

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