// Converts the total amount of seconds into minues and seconds like so

// 110 seconds becomes 1:50, because there is 1 minute and 50 seconds in 110 total seconds

// 10 seconds becomes 0:10, because there are 0 minutes and 10 seconds in 10 total seconds

//My solution:

function formatTime(time){
    // write code here
     const minute = Math.floor(time / 60);
     const second = time % 60;
     return minute + ":" + second;
   }
   