let Button = document.getElementById("Button")
let LocationBtn = document.getElementById("LocationBtn")
let LocationArrow = document.getElementById("LocationArrow")
// Button.addEventListener("mouseover", function(){
//     LocationArrow.className = "w-[56px] h-[72px] bg-AlmostBlack flex justify-center items-center"
// })

console.log("hello")
Button.addEventListener("mouseover", (event) => {
    LocationArrow.className = "w-[56px] h-[72px] bg-AlmostBlack flex justify-center items-center transition"
    LocationBtn.className = "w-[204px] h-[72px] bg-Gold flex justify-center items-center transition"
})
Button.addEventListener("mouseleave", (event) => {
    LocationArrow.className = "w-[56px] h-[72px] bg-Gold flex justify-center items-center transition"
    LocationBtn.className = "w-[204px] h-[72px] bg-AlmostBlack flex justify-center items-center transition"
})
