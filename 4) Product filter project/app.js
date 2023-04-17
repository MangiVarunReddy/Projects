const all=document.getElementById("all");
const watches=document.getElementById("watches");
const shirts=document.getElementById("shirts");
const pants=document.getElementById("pants");
const shoes=document.getElementById("shoes");


const allimages = document.getElementById("allimages");

const products = Array.from(document.getElementsByClassName("product"));

let arr=[
    allItems=[{src:"watches/1.jpeg",productName:"Watches"},
    {src:"shirts/1.jpeg",productName:"Shirts"},
    {src:"pants/1.jpeg",productName:"Pants"},
    {src:"shoes/1.jpeg",productName:"Shoes"},
],
    watchProduct=[{src:"watches/1.jpeg",productName:"Rolex"},
    {src:"watches/2.jpeg",productName:"Apple"},
    {src:"watches/3.jpeg",productName:"Samsung"},
    {src:"watches/4.jpeg",productName:"Titan"}],

    shirtProduct=[{src:"shirts/1.jpeg",productName:"Blue&White Shirt"},
    {src:"shirts/2.jpeg",productName:"White Fancy Shirt"},
    {src:"shirts/3.jpeg",productName:"Colorful shirt"},
    {src:"shirts/4.jpeg",productName:"Black Shirt"}],

    shirtProduct=[{src:"pants/1.jpeg",productName:"Blue pant"},
    {src:"pants/2.jpeg",productName:"Black pant"},
    {src:"pants/3.jpeg",productName:"White pant"},
    {src:"pants/4.jpeg",productName:"Green pant"}],

    shirtProduct=[{src:"shoes/1.jpeg",productName:"Nike shoes"},
    {src:"shoes/2.jpeg",productName:"Puma shoes"},
    {src:"shoes/3.jpeg",productName:"Vans shoes"},
    {src:"shoes/4.jpeg",productName:"UnderArmour Shoe"}]
    
];



let buttons=document.querySelectorAll("li");
function changeDetails(t,index){
   console.log(products);
   for(let m=0;m<products.length;m++){
        
    products[m].style.display="block";
}

for(let i=0;i<products.length;i++){
    let imagesrc = products[i].firstChild.nextSibling;
    imagesrc.src=arr[index][i].src;
    
    let name=products[i].lastChild.previousSibling;
    
    let imageName= arr[index][i].productName;
    
    name.textContent=imageName;
    

} 

}

buttons.forEach((element,index)=>{
    element.addEventListener("click",(e)=>{
        let t = e.target;
       
        changeDetails(t,index);


    })
})


const form=document.getElementsByTagName('form');
const search=document.getElementById('search');

search.addEventListener('click',(e)=>{
    e.preventDefault();
    const input=document.getElementById('inputField').value;
    let present= 0;
    let productPosition=0;
    for(let i=1;i<arr.length;i++){
        for(let j =0;j<4;j++){
            let x=arr[i][j].productName.toLocaleLowerCase();
            // console.log("i: "+i+" j: "+j+": "+x)
            if(input.toLowerCase()===x){
                present=1;
                productPosition=arr[i][j];
                break;

            }
            
        }
    }
    if(present===1){
        for(let m=1;m<products.length;m++){
        
            products[m].style.display="none";
        }
        // let imagesrc = products[0].firstChild.nextSibling;
        // let imageName= products[0].lastChild.previousSibling;
        // imagesrc.src=arr[i][j].src;
        // imageName.textContent=arr[i][j].productName;
        let imagesrc = products[0].firstChild.nextSibling;
        let imageName= products[0].lastChild.previousSibling;
        imagesrc.src=productPosition.src;
        imageName.textContent=productPosition.productName;

    }
    else{

        alert("No such product is found please try with valid product name");
    }


})