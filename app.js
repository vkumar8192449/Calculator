function edit(ele)
{
    document.getElementById('output').innerText+=ele;
}
function allclr()
{
    document.getElementById('output').innerText='';
}
function answer()
{
    let ele=document.getElementById('output').innerText;
    console.log(ele);
    console.log(eval(ele));
    document.getElementById('output').innerText = eval(ele);
}
function back()
{
    let ele=document.getElementById('output').innerText;
    ele=ele.substring(0,ele.length-1);   
    document.getElementById('output').innerText=ele;
}