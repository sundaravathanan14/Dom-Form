
//Function to crete basic elements //
function createElements(tag,className,idName){
    
    let tagName = document.createElement(tag);
    if(className.length > 0){
        tagName.classList.add(...className);
    } else{
        tagName.classList.add(className);
    }
    tagName.setAttribute("id",idName);  
    return tagName;  
}

//function to create form elements//

function createFormElements(tag,className,idName,formName,placeholder,type){
    let formElement=createElements("div",["mb-3"],"");
form.append(formElement);
 let input=document.createElement(tag);
 input.setAttribute("class",className);
 input.setAttribute("id",idName);
 input.setAttribute("name",formName);
 input.setAttribute("placeholder",placeholder);
 input.setAttribute("type",type);
 input.setAttribute('autocomplete','on');
 formElement.append(input);
}

function createChoiceElements(pName,choiceArray){
    let formElement=createElements("div",["mb-3"],"");
    form.append(formElement);
    let p = createElements("p",["choice-name"],"");
    p.innerHTML= pName;
    formElement.append(p);
    choiceArray.forEach((data)=>{
        
        let input = document.createElement(data.tag);
        input.setAttribute('type',data.type);
        input.setAttribute('id',data.id);
        input.setAttribute('name',data.name);
        input.setAttribute('value',data.value);
        let label = document.createElement('label');
        label.setAttribute('for',data.id);
        label.innerHTML = data.label;
        formElement.append(input,label);
    })
   
    

}

function onSubmit(){
    let fName= document.getElementById('fname').value;
    let lName= document.getElementById('lname').value;
    let address = document.getElementById('user-address').value;
    let pincode = document.getElementById('pincode').value;
    let gender = document.getElementsByName('gender');
    let food = document.getElementsByName('food');
    let state = document.getElementById('state').value;
    let country = document.getElementById('user-country').value;
    let selectedGender = '';
    let selectedFoods = [];
    gender.forEach(data=>{
        if(data.checked){
            selectedGender = data.value;
           
        }
    })
    food.forEach(data=>{
        if(data.checked){
            selectedFoods.push(data.value);
        }
    })
    var user={
        fName:fName,
        lName:lName,
        address:address,
        pincode:pincode,
        gender:selectedGender,
        food: selectedFoods,
        state:state,
        country:country,
    }
    userData.push(user);
    displayTable();
    document.getElementById('myForm').reset();
    // fName="";
    // lName="";
    // address="";
    // pincode="";
    // gender="";
    // food="";
    // state="";
    // country="";
    console.log(fName,lName,address,pincode,gender,food,state,country);
}
var userData=[];
var container = createElements("div",["container","text-center"],"");
document.body.append(container);
var row = createElements("div",["row"],"");
container.append(row);
var col=createElements("div",["col"],"");
row.append(col);
var card=createElements("div",["card"],"");
col.append(card);
var cardBody=createElements("div",["card-body"],"");
card.append(cardBody);
var form =document.createElement("form");
form.setAttribute('autocomplete','on');
form.setAttribute('id','myForm');
cardBody.append(form);
var fName=createFormElements("input","form-control","fname","fName","First Name","text");
var lName=createFormElements("input","form-control","lname","lName","Last Name","text");
var Address=createFormElements("input","form-control","user-address","Address","Address","text");
var pincode=createFormElements("input","form-control","pincode","pincode","pincode","number");
var gender=createChoiceElements("Gender",[{type:'radio',tag:'input',id:'male',name:'gender',label:'Male',value:'Male'},
{type:'radio',tag:'input',id:'female',name:'gender',label:'Female',value:'Female'}])
var food =createChoiceElements("Favourite Food",[{type:'checkbox',tag:'input',id:'Biriyani',name:'food',label:'Biriyani',value:'Biriyani'},
{type:'checkbox',tag:'input',id:'friedRice',name:'food',label:'Fried Rice',value:'Fried Rice'},
{type:'checkbox',tag:'input',id:'vegmeal',name:'food',label:'Veg Meal',value:'Veg Meal'},
{type:'checkbox',tag:'input',id:'nonvegmeal',name:'food',label:'NonVeg Meal',value:'NonVeg Meal'},
{type:'checkbox',tag:'input',id:'idly',name:'food',label:'Idly',value:'Idly'}]);
var state=createFormElements("input","form-control","state","state","State","text");
var country=createFormElements("input","form-control","user-country","country","Country","text");
//createButton();

var button = document.createElement("button");
button.classList.add("btn","btn-primary");
button.setAttribute('type','button');
button.innerHTML="Submit";
button.addEventListener("click", onSubmit);
form.append(button);
// create table
var col1=createElements("div",["col"],"");
row.append(col1);
var table=createElements("table",["table","table-striped"],"")
col1.append(table);
var thead=document.createElement("thead");
table.append(thead);
var tr=document.createElement("tr");
thead.append(tr);
var th=document.createElement("th");
th.setAttribute("scope","col");
tr.append(th);
var th1=document.createElement("th");
th1.setAttribute("scope","col");
tr.append(th1);
var th2=document.createElement("th");
th2.setAttribute("scope","col");
tr.append(th2);
var th3=document.createElement("th");
th3.setAttribute("scope","col");
tr.append(th3);
var th4=document.createElement("th");
th4.setAttribute("scope","col");
tr.append(th4);
var th5=document.createElement("th");
th5.setAttribute("scope","col");
tr.append(th5);
var th6=document.createElement("th");
th6.setAttribute("scope","col");
tr.append(th6);
var th7=document.createElement("th");
th7.setAttribute("scope","col");
tr.append(th7);
th.innerHTML="First Name";
th1.innerHTML="Last Name";
th2.innerHTML="Address";
th3.innerHTML="Pincode";
th4.innerHTML="Gender";
th5.innerHTML="Favourite foods";
th6.innerHTML="state";
th7.innerHTML="country";
var tbody = document.createElement("tbody");
table.append(tbody);
function displayTable() {
    tbody.innerHTML = "";
    for (let i = 0; i < userData.length; i++) {
        tbody.innerHTML += `<tr>
    <td>${userData[i].fName}</td>
    <td>${userData[i].lName}</td>
    <td>${userData[i].address}</td>
    <td>${userData[i].pincode}</td>
    <td>${userData[i].gender}</td>
    <td>${userData[i].food}</td>
    <td>${userData[i].state}</td>
    <td>${userData[i].country}</td>
    </tr>
    `;

    }


}