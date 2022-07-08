likeClick.addEventListener('click', Like);
function Like() {    
    input1.value = parseInt(input1.value) + 1;
}

$("tr>td, th").on("mouseover",changeColor);
function changeColor(){
    $(this).css("background-color", "#00bfff");    
}
$("tr>td, th").on("mouseout",resetColor);
function resetColor(){
    $(this).css("background-color", "#faebd7");    
}


