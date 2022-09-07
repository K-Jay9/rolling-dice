


// accessing elemets through the dom

let btn = document.querySelector('button');

let bull = document.getElementsByTagName('img');


// dictionary to store the names corresponding to the numbers
let dict = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six'
}

// the array we need to shuffle
let arr = [1,2,3,4,5,6]


// The function to shuffle the array
function shuffleArray(array) {
    for (var i = array.length - 1; i> 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 };

 // sleep function for creating animation effect
 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


  // async function to handle the click event for the button and sleep for the animation

 async function clickHandler(){
    shuffleArray(arr)
    for (let i = 0; i < arr.length; i++) {
        bull[0].outerHTML = `<img src="images/${dict[arr[i]]}.png" alt="five">`

        await sleep(100)
        
    }
 };

// adding an event listener to my button to create the shuffle
btn.addEventListener('click', clickHandler) 


