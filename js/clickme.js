function clickadd()
{
    let a=parseInt(document.getElementById('num1').value)
    let b=parseInt(document.getElementById('num2').value)
    document.getElementById("result").textContent=`sum is ${a+b}`
}
function clicksub()
{
    let a=parseInt(document.getElementById('num1').value)
    let b=parseInt(document.getElementById('num2').value)
    document.getElementById("result").textContent=`Difference is ${a-b}`
}
function clickmul()
{
    let a=parseInt(document.getElementById('num1').value)
    let b=parseInt(document.getElementById('num2').value)
    document.getElementById("result").textContent=`product is ${a*b}`
}
function clickdiv()
{
    let a=parseInt(document.getElementById('num1').value)
    let b=parseInt(document.getElementById('num2').value)
    document.getElementById("result").textContent=`quotient is ${a/b}`
}