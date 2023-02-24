// const start = getId('start');

// const stop = getId('stop');

// const generateBtn = getId("generate_btn");

// const output = getId("output");

function getId(x) {
    return document.getElementById(x);
}

function response(x)  {
    let output = getId('output');
    output.innerHTML = x;
}

const generate_btn = getId("generate_btn");

// Listening for click event
// generate_btn.addEventListener('click', function findRange()  {});

generate_btn.addEventListener('click', (event) =>  
{
    let start = getId("start").value;
    let stop = getId("stop").value;

    if(!start || !stop)  {
        response("Please all fields Are required!");
        return;  // break program execution.
    }

    let res = parseInt(start);
    let res2 = parseInt(stop);

    var startTimer;
    var clearTimer;
    var interval = setInterval(increment, 1000);

    function check() {
       
        if(res === res2) {
            clearInterval(interval);
            return;
        }


    }
  
    function increment() {
        if(res > res2) 
        {
            clearInterval(interval);
            response("Your start is greater than your stop! Please refresh.");
            return;  // break program execution.
        }
        check();
        response(res);      
        res++;
     } 

} );


