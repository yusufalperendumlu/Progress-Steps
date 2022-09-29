const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");


let stepActive=1;

next.addEventListener("click", () => {
    stepActive++;
    if(stepActive > steps.length){
        stepActive=steps.length;
    }

    update();
})


prev.addEventListener("click", () => {
    stepActive--;
    if(stepActive < 1){
        stepActive=1;
    }

    update();
})


function update  ()  {
    steps.forEach((step, index) => {
        if(index < stepActive)
        {
            step.classList.add("active");
        }
        else
        {
            step.classList.remove("active");
        }
    });

    const active = document.querySelectorAll(".active");
    
    progress.style.width = ((active.length - 1) / (steps.length - 1)) * 100 + "%";

    if(stepActive === 1)
    {
        prev.disabled = true;
    }

    else if(stepActive === steps.length)
    {
        next.disabled = true;
    }

    else{
        next.disabled = false;
        prev.disabled = false;
    }

}


