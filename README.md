# spiral

simple, all HTML, spiralling word(s) html animation, without using css's '@property' (so any browser runs it).

## walkthrough
### js
We define a const that'll hold our text, splitting it's chars into arrays so we can animate each 
individually with forEach, assigning them in div's, via ".textContent", and attributing a desired 
class name that will hold the animation, in this case ".character", being "char" and "i" the
parameters for each letter and their repective index, that'll trigger an offset in the duration.
The delay is negative so the animation is already started, meaning the letters don't need to wait 
for the previous one to start.

Finally we fetch the div's/father element's id and append our letters inside, dividing the 
'AnimationDuration' accordingly to how many spirals we have.

### css
Straightforward.
We have 5 steps for the animation: 
 <ol>
<li> the letter starts negatively displaced (top attr in this case);</li>
<li> reaches the center, loosing font size, to simulate going further at the 'z' dimension;</li>
<li> reaches the bottom, normal sized;</li>
<li> repeats step 2, but increasing size by 1em, simulating getting nearer;</li>
<li> finishes like step 1;</li>
</ol>
