const messageContainer=document.getElementById('message')
const messageText=document.getElementById('message-text')



const menuList=[
  {
    "id": 1,
    "name": "Cheeseburger",
    "price": 5.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
  },
  {
    "id": 2,
    "name": "Pizza",
    "price": 8.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
  },
  {
    "id": 3,
    "name": "Tacos",
    "price": 3.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
  },
  {
    "id": 4,
    "name": "Sushi",
    "price": 11.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
  },
  {
    "id": 5,
    "name": "Pasta",
    "price": 9.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
  },
  {
    "id": 6,
    "name": "Fried Chicken",
    "price": 7.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
  },
  {
    "id": 7,
    "name": "Grilled Cheese Sandwich",
    "price": 4.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
  },
  {
    "id": 8,
    "name": "Steak",
    "price": 15.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
  },
  {
    "id": 9,
    "name": "Caesar Salad",
    "price": 6.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
  },
  {
    "id": 10,
    "name": "Fish and Chips",
    "price": 8.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
  },
  {
    "id": 11,
    "name": "Ramen",
    "price": 9.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
  },
  {
    "id": 12,
    "name": "Burrito",
    "price": 7.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
  },
  {
    "id": 13,
    "name": "Pho",
    "price": 8.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
  },
  {
    "id": 14,
    "name": "Pad Thai",
    "price": 9.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
  },
  {
    "id": 15,
    "name": "Gyro",
    "price": 6.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
  },
  {
    "id": 16,
    "name": "Ice Cream",
    "price": 3.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
  },
  {
    "id": 17,
    "name": "Smoothie",
    "price": 4.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
  },
  {
    "id": "18",
    "name": "Apple Pie",
    "price": 4.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
  },
  {
    "id": 19,
    "name": "Chocolate Cake",
    "price": 5.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
  },
  {
    "id": 20,
    "name": "Pancakes",
    "price": 4.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
  },
  {
    "id": 21,
    "name": "Cupcake",
    "price": 2.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
  },
  {
    "id": 22,
    "name": "Crepes",
    "price": 5.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
  },
  {
    "id": 23,
    "name": "Club Sandwich",
    "price": 6.99,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
  },
  {
    "id": 24,
    "name": "Falafel",
    "price": 5.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
  },
  {
    "id": 25,
    "name": "Curry",
    "price": 9.49,
    "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
  }
]

function getMenu(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(menuList)
        },2000)
    })
}

function takeOrder(menuList){
    const orderedItems=[menuList[0],menuList[3],menuList[4]]
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(orderedItems)
        },2500)
    })
}

function orderPrep(orderedList){
    const orderStatus={order_status:false,paid:false}
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({...orderStatus, order_status:true})
        },1500)
    })
}

function payOrder(orderStatus){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({...orderStatus, paid:true})
        },1000)
    })
}

function thankyouFnc(){
    alert("thankyou for eating with us today!")
}

document.body.onload=async()=>{
    messageText.innerText="Loading the menu. "
    messageContainer.className="stage1"
    const menuList=await getMenu()
    messageText.innerText="Taking the Order from user"
    messageContainer.className="stage2"
    const orderedList=await takeOrder(menuList)
    messageText.innerText="Preparing the Order"
    messageContainer.className="stage3"
    const orderStatus=await orderPrep(orderedList)
    messageText.innerText="Processing the payment.."
    messageContainer.className="stage4"
    if(orderStatus.order_status===true){
        const paymentStatus=await payOrder(orderStatus)
        if(paymentStatus.paid===true){
            messageText.innerText="thankyou for visiting!"
            messageContainer.className="stage5"
            thankyouFnc()
        }
    }
}