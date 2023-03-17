const productList= document.getElementById("cartList"); 
const product= document.getElementsByClassName("add-to-cart");

// productList.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let target=e.target;
//     let name = target.getAttribute("data-name");
//     let price = Number(target.getAttribute("data-price"));
//     addItemsToCart(name,price,1);
    

    
// })



//****************************************************
// Shopping cart cuctions

let arr=[];

class Items{
    constructor(name,price,count){
        this.name=name;
        this.price=price;
        this.count=count;
    }
}



function addItemsToCart(name,price,count){
    
    
    
    for(let i in arr){
        if(arr[i].name===name){
            arr[i].count+=count;
            arr[i].price+=price;
            return;
        }
    }
        let item= new Items(name,price,count);
            
                arr.push(item);
                saveCart();
                console.log(arr);
            

}
//function to remove items
function removeItemFromCart(name){
    for(let i in arr){
        if(arr[i].name===name){
            arr[i].count--;
            arr[i].price -=2.99;
            if(arr[i].count===0){
                arr.splice(i,1);
            }
            break;
            
        }
    }
    saveCart()
}
function removeCompleteItem(name){

    for(let i in arr){
        if(arr[i].name===name){
            arr.splice(i,1);
            break;
        }
    }
    saveCart()

}

function clearCart(){
    arr=[];
    saveCart()
}
function listCart(){
    let copyCart=[];
    for(let i in arr){
        let item=arr[i];
        let itemCopy={};
        for(let j in item){
            itemCopy[j]=item[j];

        }
        copyCart.push(itemCopy)
    }
    return copyCart;
}



function countCart(){
    let count=0;
    for(let i in arr){
        count= count + arr[i].count;
    }
    console.log("You have ",count," items in the cart");
}
function totalCost(){
    let count=0;
    for(let i in arr){
        count= count + arr[i].price;
    }
    console.log("You total is: ",count);
}

function saveCart(){
    localStorage.setItem("ShoppingCart",JSON.stringify(arr))
}
function lodeCart(){
    arr=JSON.parse(localStorage.getItem("shoppingCart"));
}
addItemsToCart("oranges",3.00,1);
// removeItemFromCart("oranges");
lodeCart();

let list = listCart();
console.log(list);



