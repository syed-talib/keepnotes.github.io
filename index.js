
function show(){
    let list = document.getElementById('list');
    if(list.style.visibility == 'hidden'){
        list.style.visibility = 'visible';
    }                                                //menu button
    else{
           list.style.visibility = 'hidden';
    }
}




let Add = document.getElementById('form');
function add(){
    
    let x = document.createElement('input');
    x.setAttribute('type','text');
    x.setAttribute('name','option[]');                 //add more input
    x.setAttribute('placeholder','your note');
    Add.appendChild(x);
    

}

function rem(){
     let input_tag = Add.getElementsByTagName('input'); 
if(input_tag.length>1){                                        //remove input
    Add.removeChild(input_tag[(input_tag.length)-1]);
}
}




//date 

let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();
let d = document.getElementById('date');
d.innerText=day+"/"+month+"/"+year;






//form validation //

function val(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let rev = email.split('').reverse().join('');

    if(name === ''){
       
        document.getElementById('name').style.background='red';
        
    }
    else if(!isNaN(name)){
        document.getElementById('name').style.background='red';
    }
    else if(name.length<3 || name.length>20){
        document.getElementById('name').style.background='red';
    }
    else if(email === ''){
        document.getElementById('email').style.background='red';
    }
    else if(email.charAt(0) === '@' || email.charAt(1) === '@'){

        document.getElementById('email').style.background='red';
    }
    else if(rev.charAt(3) != '.' || rev.slice(4,9) != 'liamg' || rev.charAt(9) !='@'){

        document.getElementById('email').style.background='red';
    }
    
   
    else{
        document.getElementById('name').style.background='whitesmoke';
        document.getElementById('email').style.background='whitesmoke';
        location.reload();
    }

}

