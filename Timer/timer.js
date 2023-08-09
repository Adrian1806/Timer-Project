
    

const sec = document.getElementById("secunde");
const milis = document.getElementById("milisecunde");
const min = document.getElementById("minute")
const fstart = document.querySelector(".start")
const fstop = document.querySelector(".stop")
const freset = document.querySelector(".reset")
const ftura = document.querySelector(".tura")
const timpi = document.getElementsByClassName('timpi')
const sec1 = document.getElementById("tura")
const sec2 = document.getElementById("timpiTure")
const sec3 = document.getElementById("timpiTotal")
// const total = document.getElementById("total")
// const ture = document.getElementById("ture")
// const place = document.getElementById("place")

var secunde = 0 ;
var mili = 0 ;
var minute = 0;
var ceas;
var nr = 0;
var x
var y 
var z
var diferenta1
var diferenta2
var diferenta3
var wrong 


fstart.onclick = function(){
    if(wrong == 1)return
    ceas = setInterval(startinterval, 10)
    wrong = 1;
    console.log(wrong)
    if (nr == 0 ){
        const place = document.createElement("div")
        const ture = document.createElement("div")
        const total = document.createElement("div")
        sec1.appendChild(place)
        sec2.appendChild(ture)
        sec3.appendChild(total)
        place.setAttribute("id", "place")
        ture.setAttribute("id", "ture")
        total.setAttribute("id", "total")

        place.className = "timpi"
        ture.className = "timpi"
        total.className = "timpi"


    }
}

freset.onclick = function(){
    clearInterval(ceas);
    mili = 0;
    secunde = 0;
    nr = 0;
    milis.innerHTML = "00"
    sec.innerHTML = "00"
    total.remove();
    place.remove();
    ture.remove();
    wrong = 2;


}
fstop.onclick = function (){
    clearInterval(ceas);
    wrong = 2;
    console.log(wrong)
}
ftura.onclick = function(){

     const newTimpi = document.createElement("div")
     newTimpi.className = "timpi"

     if(mili <=9 && secunde <= 9 && minute<=9){
        newTimpi.textContent ="0"+ minute+":"+"0"+ secunde +":"+"0"+ mili;
     }
     else if(mili <=9 && secunde <= 9){
        newTimpi.textContent = minute+":"+"0"+ secunde +":"+"0"+ mili;
     }
     else if(minute <=9 && secunde <= 9){
        newTimpi.textContent ="0"+ minute+":"+"0"+ secunde +":"+ mili;
     }
     else if(minute <=9 && mili <= 9){
        newTimpi.textContent ="0"+ minute+":"+ secunde +":"+ "0"+mili;
     }
     

     else if(mili<=9 ) {
        newTimpi.textContent = minute+":"+ secunde +":"+ "0"+mili;
     }
     else if(secunde<=9){
        newTimpi.textContent = minute+":"+ "0"+secunde +":"+ mili;
     }
     else if(minute<=9 ) {
        newTimpi.textContent = "0"+minute+":"+ secunde +":"+ mili;
     }
 
     else {
        newTimpi.textContent = minute+":"+ secunde +":"+ mili;
     }
     
    
     
    

        total.appendChild(newTimpi);
     
        const newPlace = document.createElement("div")
        newPlace.className = "timpi"
        nr++;
        newPlace.textContent = nr
        place.appendChild(newPlace);

        
        const newTure = document.createElement("div")
        newTure.className = "timpi"
       if (nr >= 0 && nr<=1 ) {
        newTure.textContent = newTimpi.textContent
        console.log("fire")
        x = minute
        y = secunde
        z = mili
       }else{
      
            if( mili < z){
                
                diferenta3 = mili+(100-z)
                console.log(diferenta3)
                console.log("fire")
                diferenta2 = secunde-y-1
                if(diferenta3>100){
                    diferenta3 -=100;
                    diferenta2 = secunde-y-1
                }
            }else{
                diferenta3 = mili-z
                diferenta2 = secunde-y
                console.log(diferenta3)
                console.log("fire1")
            }
           

            
        diferenta1 = minute-x

        if(diferenta3<=9 && diferenta2 <=9 && diferenta1<=9){
            newTure.textContent = "0"+ diferenta1 +":"+ "0"+ diferenta2 +":"+"0"+ diferenta3;
          }
      else if(diferenta3<=9 && diferenta2 <=9){
        newTure.textContent = diferenta1 +":"+ "0"+ diferenta2 +":"+"0"+ diferenta3;
      }
      else if(diferenta1<=9 && diferenta2 <=9){
        newTure.textContent = "0"+diferenta1 +":"+ "0"+ diferenta2 +":"+ diferenta3;
      }
      else if(diferenta3<=9){
        newTure.textContent = diferenta1 + ":" + diferenta2 + ":"+"0"+diferenta3;

      }
      else if(diferenta2<=9){
        newTure.textContent = diferenta1+":"+ "0"+diferenta2 +":"+ diferenta3;
     }
     else if(diferenta1<=9){
        newTure.textContent = "0"+diferenta1+":"+ diferenta2 +":"+ diferenta3;
     }
     else{
        newTure.textContent = diferenta1 +":"+ diferenta2 +":"+ diferenta3;
     }
        // diferenta3 =  mili-z
        // newTure.textContent = diferenta1 +":"+ diferenta2 +":"+ diferenta3;
        x = minute
        y = secunde
        z = mili
       
       }
        
        
      
        ture.appendChild(newTure);
}
 

function startinterval (){
    mili++; 
    if(mili <=9){
        milis.innerHTML = "0"+ mili;
    }
    if( mili >9){
        
        milis.innerHTML = mili
    }
    if( mili >= 99){
        mili = 0
        milis.innerHTML = "00"

        secunde++
        sec.innerHTML = "0"+ secunde
        
    }
    if(secunde >9){
        sec.innerHTML = secunde;
    }
    if(secunde>59){
        sec.innerHTML = "00"
        secunde = 0
        minute++
        min.innerHTML = "0"+ minute;
    }
    if( minute > 9){
        min.innerHTML = minute;
    }
}
