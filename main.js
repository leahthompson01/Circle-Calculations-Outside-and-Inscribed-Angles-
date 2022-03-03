document.querySelector('#compute').addEventListener('click',compute)
document.querySelector('#clear').addEventListener('click',clear)
document.querySelector('#clearsecond').addEventListener('click',clearsecond)
document.querySelector('#computeoutside').addEventListener('click',outside)
  
function compute(){
    const arcvalue = document.getElementById('arc').value 
    const anglevalue = document.getElementById('angle').value 
    if(arcvalue !== "" && anglevalue === ""){
        let calcangle = arcvalue / 2 
        document.querySelector('#angle').value = calcangle
    } else if (anglevalue !== "" && arcvalue === ""){
        let calcarc = anglevalue * 2
        document.querySelector('#arc').value = calcarc
    } else {
        alert('you have entered in value for both the arc and angle, please leave one of the fields blank')
    }
}
function clear(){
    document.querySelector('#arc').value = ""
    document.querySelector('#angle').value = ""
}
function outside(){
    const innerArc = document.querySelector('#arcInside').value 
    const outterArc = document.querySelector('#arcOutside').value 
    const outsideangle = document.querySelector('#angleOutside').value
    if(innerArc !== "" && outterArc === "" && outsideangle !== ""){
       let newinnerarc = Number(innerArc)
       let newoutsideangle = Number(outsideangle)
        let findoutterarc = newinnerarc + newoutsideangle*2
        document.querySelector('#arcOutside').value = findoutterarc
    }else if(innerArc !== "" && outterArc !== "" && outsideangle === ""){
        let calcoutsideangle = (outterArc - innerArc) / 2 
        document.querySelector('#angleOutside').value = calcoutsideangle
    } else if(innerArc === "" && outterArc !== "" && outsideangle !== ""){
        let calcinnerArc = -1 * ((outsideangle * 2) - outterArc)
        document.querySelector('#arcInside').value = calcinnerArc
    }else{
        alert('you have entered in three values, please leave one of the fields blank')
    }


}
function clearsecond(){
    document.querySelector('#angleOutside').value = ""
    document.querySelector('#arcOutside').value = ""
    document.querySelector('#arcInside').value = ""
}