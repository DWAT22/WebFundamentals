var count= 1;

function counter(element) {
    count++;

    // element.innerText = count;
    element.innerText++;
}

function specialCounter() {
    document.querySelector("#number").innerText++;
}