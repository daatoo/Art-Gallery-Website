let Button2 = document.getElementById("Button2")
let LocationBtn2 = document.getElementById("LocationBtn2")
let LocationArrow2 = document.getElementById("LocationArrow2")
Button2.addEventListener("mouseover", (event) => {
    LocationArrow2.className = "w-[56px] h-[72px] bg-AlmostBlack flex justify-center items-center transition"
    LocationBtn2.className = "w-[204px] h-[72px] bg-Gold flex justify-center items-center transition"
})
Button2.addEventListener("mouseleave", (event) => {
    LocationArrow2.className = "w-[56px] h-[72px] bg-Gold flex justify-center items-center transition"
    LocationBtn2.className = "w-[204px] h-[72px] bg-AlmostBlack flex justify-center items-center transition"
})
