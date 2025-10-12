const selectedMuvie = document.getElementById("muvieSelect");
const selectedThreater = document.getElementById("threaterSelect");
const applyBtn = document.getElementById("btnApply");
const outPut = document.getElementById("output");
const seatContainer = document.getElementById("seatContainer");
const count = document.getElementById("count");
const total = document.getElementById("price");
const bookBtn = document.getElementById("bookBtn")
const summery = document.getElementById("summery")

const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");
const modelSeat = document.getElementById("model-seat");
const modelPrice = document.getElementById("model-price")
const model = document.getElementById("model");
let selectedSeat = [];
let muviePrice = 0;
let totalprice = 0;
applyBtn.addEventListener("click",()=>{
         muvieValue = selectedMuvie.value;
         threatValue = selectedThreater.value;
         console.log(muvieValue,threatValue)
         if(! muvieValue || !threatValue){
            alert("select muvie and threate both");
            return
         }
         muviePrice = muvieValue;
         localStorage.setItem("Muvie",muvieValue);
         localStorage.setItem("Threater",threatValue);
         showData();
         seatLayout();
})

function showData(){
       let muvieValue = selectedMuvie.value;
       let TV = selectedThreater.value;
       if(!muvieValue || ! TV){
          alert("select both");
        return     
       }
       let muvie = selectedMuvie.options[selectedMuvie.selectedIndex].text
       let threter = selectedThreater.options[selectedThreater.selectedIndex].text
       
       outPut.innerHTML = `
       <p>muvie name  ${muvie}</p>
       <p>threater name  ${threter}<p>
       `
       outPut.classList.remove("hidden");
}

function seatLayout(){
          seatContainer.innerHTML = "";
          summery.classList.remove("hidden")
          for(let i = 1;i < 30;i++){
            let seat = document.createElement("button");
            seat.innerText = i;
            seat.addEventListener("click", ()=> selectSeat(seat));
            seatContainer.appendChild(seat);
          }
          seatContainer.classList.remove("hidden");
          updateSummery();
}

function selectSeat(seat){
          seat.classList.toggle("selected");
          let nodelist = document.querySelectorAll(".selected");
          selectedSeat = [...nodelist];
          updateSummery()
}

function updateSummery(){
          let countlengthh = selectedSeat.length;
           totalprice = countlengthh*muviePrice;
          count.textContent = countlengthh;
          total.textContent = totalprice;
          console.log(countlengthh,totalprice);
          bookBtn.disabled = countlengthh == 0;
}
bookBtn.addEventListener("click",()=>{
    modelSeat.textContent = selectedSeat.length;
    modelPrice.textContent = totalprice;
    model.classList.remove("hidden");
})

cancelBtn.addEventListener("click",()=>{
         model.classList.add("hidden")
})

confirmBtn.addEventListener("click",()=>{
          
})

function getKeyForLocal(muvie,threater){
    return `bookSeat_${muvie}_${threater}`;
}
