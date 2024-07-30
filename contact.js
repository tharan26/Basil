function check(){
    let firstname=document.getElementById("fname").value;
    let mail=document.getElementById("email").value;
    let phone=document.getElementById("ph").value;
    let com=document.getElementById("cmt").value;

    if(firstname==="")
        alert("Enter the First Name");
    else if(mail==="")
        alert("Enter the Email");
    else if(phone==="")
        alert("Enter the Phone Number");
    else if(com==="")
        alert("Enter the Comment");
    else{
        alert("Form Submitted Successfully");
        document.getElementById("fname").value="";
        document.getElementById("email").value="";
        document.getElementById("ph").value="";
        document.getElementById("cmt").value="";
        }
}

function del(){
    let firstname=document.getElementById("fname").value;
    let mail=document.getElementById("email").value;
    let phone=document.getElementById("ph").value;
    let com=document.getElementById("cmt").value;

    document.getElementById("fname").value="";
    document.getElementById("email").value="";
    document.getElementById("ph").value="";
    document.getElementById("cmt").value="";

    
}