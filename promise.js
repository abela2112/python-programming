import { getPosition } from "./maptyproject/asynchronous/async.js"
const lotteryPromise=new Promise(function(resolve,reject){
    if(Math.random()>=0.5){
        resolve("you won the lottery !!!")
    }
    else{
        reject('sorry,you lost')
    }
})
lotteryPromise.then(res=>console.log(res)).catch(err=>console.error(err))
function wait(second){
    return new Promise(function(resolve)
    { setTimeout(resolve,second*1000)
    }
   )
}  
wait(1)
.then(()=>{console.log('1 second has passed')
return wait(1)})
.then(()=>{
    console.log('2 seconds has passed')
})


const imgContainer=document.querySelector('.image');
function createImage(imgPath){
    return new Promise(function(resolve,reject){
      const image= document.createElement('img');
      image.src=imgPath;

      image.addEventListener('load',function(){
        imgContainer.append(image)
        resolve(image);
      })
      image.addEventListener('error',function(){
        reject(new Error('image is not found'))
      })
    })
}
let currentImg;
createImage(`./reviews/person-1.jpeg`).then(img=>{
 console.log('image 1 loaded')
currentImg=img;
return wait(2)
}).then(()=>{
    currentImg.style.display='none';
    return createImage(`./reviews/person-1.jpeg`)
}).then((img)=>{
    console.log('image 2 loaded')
    currentImg=img;
    return wait(2);
}).then(()=>{
    currentImg.style.display='none';
})


const whereAmI=async function(){
   try{
    const position=await getPosition()
    const {latitude,longitude}=position.coords
    const response=await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    if(!response.ok) throw new Error(`please try again ${response.status} not found`)
    const dataGeo=await response.json()
    
    const res=await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`)
    if(!response.ok) throw new Error(`please try again ${response.status} not found`)
    const data=await res.json()
    console.log(res)
    console.log(data[0])

   }catch(err){
    console.error(err)
   }



}
whereAmI()
