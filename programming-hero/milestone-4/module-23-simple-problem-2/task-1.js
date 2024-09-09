/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 = [167, 190, 120, 165, 137];

function lowestHeight(heights){

    let minHeight = heights[0]; 
    /**if you set minHeight value 0 . the value of the minHeight value is always 0; because the the condition you provide , always receive the lowest value.  */
    for(let value of heights){
        if(minHeight > value){
            minHeight = value;
        }
    }
    return `The lowest height is: ${minHeight}.`
}

const mansHeight = lowestHeight(heights2);
console.log(mansHeight);