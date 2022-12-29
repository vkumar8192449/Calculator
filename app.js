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
function mode()
{
    if(document.querySelector('#mode img').alt=='sun')
    {
        document.querySelector('#mode img').alt='moon';
        document.querySelector('#mode img').src='moon-solid.svg';
        document.querySelector('body').style.background='#263238';
        document.getElementById('screen').style.background='#001510';
        document.getElementById('output').style.color='white';

        let x = document.querySelectorAll('.butts');
        let i;
        for (i = 0; i < x.length; i++) {
            x[i].style.background ='#001510';
        }

        x = document.querySelectorAll('.butts');
        i;
        for (i = 0; i < x.length; i++) {
            x[i].style.color ='white';
        }

        x = document.querySelectorAll('.blue');
        i;
        for (i = 0; i < x.length; i++) {
            x[i].style.color ='#ffad01';
        }

        document.querySelector('.eql').style.background='#ffad01';
        document.querySelector('.eql').style.color='#001510';
        document.querySelector('#output').style.background='#001510';
        document.getElementById('output').style.boxShadow='1.5px 1.5px 2px 2px grey';
        document.getElementById('screen').style.boxShadow='-1.5px -1.5px 5px 2px grey';

        x = document.querySelectorAll('.butts');
        i;
        for (i = 0; i < x.length; i++) {
            x[i].style.boxShadow ='-1px -1px 5px 2px grey';
        }
        document.getElementById('shape').style.background='#ffad01';
    }
    else
    {
        document.querySelector('#mode img').alt='sun';
        document.querySelector('#mode img').src='sun-solid.svg';
        document.querySelector('body').style.background='#efeff9';
        document.getElementById('screen').style.background='#efeff9';
        document.getElementById('output').style.boxShadow='-2px -2px 2px 2px grey';
        document.getElementById('screen').style.boxShadow='2px 2px 5px 2px grey';

        let x = document.querySelectorAll('.butts');
        let i;
        for (i = 0; i < x.length; i++) {
            x[i].style.background ='#efeff9';
        }

        x = document.querySelectorAll('.butts');
        i;
        for (i = 0; i < x.length; i++) {
            x[i].style.color ='black';
        }

        x = document.querySelectorAll('.blue');
        i;
        for (i = 0; i < x.length; i++) {
            x[i].style.color ='#520cff';
        }
        
        document.querySelector('.eql').style.background='#520cff';
        document.querySelector('.eql').style.color='white';
        document.querySelector('#output').style.background='#efeff9';

        x = document.querySelectorAll('.butts');
        i;
        for (i = 0; i < x.length; i++) {
            x[i].style.boxShadow ='2px 2px 5px 2px grey';
        }
        document.getElementById('shape').style.background='#520cff';
        document.getElementById('output').style.color='black';
    }
}