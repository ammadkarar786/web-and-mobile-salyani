function getNumber(num){
    var result= document.getElementById("answer")
    result.value+=num;

}
function getClear(){
    var result= document.getElementById("answer")
    result.value="";

}

function getResult(){
    var result = document.getElementById("answer");
    result.value=eval(result.value)
}