const colorName = document.getElementById("color");
console.log(colorName);

const colorCode =  document.getElementById("code");
console.log(colorCode);

const pageNo = document.getElementById("page");
console.log(pageNo);

const previousBtn = document.getElementById("btn1");
console.log(previousBtn);

const randomBtn =  document.getElementById("btn2");
console.log(randomBtn);

const nextBtn = document.getElementById("btn3");
console.log(nextBtn);

const resetBtn = document.getElementById("btn4");
console.log(resetBtn);

const copyBtn = document.getElementById("copy-hex");
console.log(copyBtn);

const copyBtn2 = document.getElementById("copy-rgb");
console.log(copyBtn2);

const copyBtn3 = document.getElementById("copy-hsl");
console.log(copyBtn3);

const hexValue =  document.getElementById("hex-code");
console.log(hexValue);

const rgbValue = document.getElementById("rgb-value");
console.log(rgbValue);

const hslValue = document.getElementById("hsl-value");
console.log(hslValue);

const colorPalette = document.querySelectorAll(".color-circle");
console.log(colorPalette);

const colorContainer = document.querySelector(".color_container");
console.log(colorContainer);





nextBtn.addEventListener("click", function(){

    console.log("next button clicked");
    
});


const color = {
    name : "Pink",
    hex : "#FFC0CB",
    rgb : "rgb(255, 192, 203)",
    hsl : "hsl(351, 100%, 88%)"
};

colorName.textContent = color.name.toUpperCase();
colorCode.textContent = color.hex;
rgbValue.textContent = color.rgb;
hslValue.textContent = color.hsl;

colorContainer.style.backgroundColor = color.hex;

const colors = [
color,
 {
        name: "Sky Blue",
        hex: "#87CEEB",
        rgb: "rgb(135, 206, 235)",
        hsl: "hsl(197, 71%, 73%)"
    },
    {
    name: "Lavender",
    hex: "#E6E6FA",
    rgb: "rgb(230, 230, 250)",
    hsl: "hsl(240, 67%, 94%)"
},
    {
    name: "Mint",
    hex: "#98FF98",
    rgb: "rgb(152, 255, 152)",
    hsl: "hsl(120, 100%, 80%)"
},
{
    name: "Peach",
    hex: "#FFDAB9",
    rgb: "rgb(255, 218, 185)",
    hsl: "hsl(28, 100%, 86%)"
},
{
    name: "Coral",
    hex: "#FF7F50",
    rgb: "rgb(255, 127, 80)",
    hsl: "hsl(16, 100%, 66%)"
},
{
    name: "Yellow",
    hex: "#FFFF00",
    rgb: "rgb(255, 255, 0)",
    hsl: "hsl(60, 100%, 50%)"
},
{
    name: "Orange",
    hex: "#FFA500",
    rgb: "rgb(255, 165, 0)",
    hsl: "hsl(39, 100%, 50%)"
},
{
    name: "Red",
    hex: "#FF0000",
    rgb: "rgb(255, 0, 0)",
    hsl: "hsl(0, 100%, 50%)"
},
{
    name: "Purple",
    hex: "#800080",
    rgb: "rgb(128, 0, 128)",
    hsl: "hsl(300, 100%, 25%)"
},
{
    name: "Blue",
    hex: "#0000FF",
    rgb: "rgb(0, 0, 255)",
    hsl: "hsl(240, 100%, 50%)"
},
{
    name: "Green",
    hex: "#008000",
    rgb: "rgb(0, 128, 0)",
    hsl: "hsl(120, 100%, 25%)"
},
{
    name: "Brown",
    hex: "#A52A2A",
    rgb: "rgb(165, 42, 42)",
    hsl: "hsl(0, 59%, 41%)"
},
{
    name: "Cyan",
    hex: "#00FFFF",
    rgb: "rgb(0, 255, 255)",
    hsl: "hsl(180, 100%, 50%)"
},
{
    name: "Magenta",
    hex: "#FF00FF",
    rgb: "rgb(255, 0, 255)",
    hsl: "hsl(300, 100%, 50%)"
},
{
    name: "Violet",
    hex: "#EE82EE",
    rgb: "rgb(238, 130, 238)",
    hsl: "hsl(300, 76%, 72%)"
},
{
    name: "Indigo",
    hex: "#4B0082",
    rgb: "rgb(75, 0, 130)",
    hsl: "hsl(275, 100%, 25%)"
},
{
    name: "Teal",
    hex: "#008080",
    rgb: "rgb(0, 128, 128)",
    hsl: "hsl(180, 100%, 25%)"
},
{
    name: "Turquoise",
    hex: "#40E0D0",
    rgb: "rgb(64, 224, 208)",
    hsl: "hsl(174, 72%, 56%)"
},
{
    name: "Lime",
    hex: "#00FF00",
    rgb: "rgb(0, 255, 0)",
    hsl: "hsl(120, 100%, 50%)"
},
{
    name: "Gold",
    hex: "#FFD700",
    rgb: "rgb(255, 215, 0)",
    hsl: "hsl(51, 100%, 50%)"
},
{
    name: "Silver",
    hex: "#C0C0C0",
    rgb: "rgb(192, 192, 192)",
    hsl: "hsl(0, 0%, 75%)"
},
{
    name: "Maroon",
    hex: "#800000",
    rgb: "rgb(128, 0, 0)",
    hsl: "hsl(0, 100%, 25%)"
},
{
    name: "Navy Blue",
    hex: "#000080",
    rgb: "rgb(0, 0, 128)",
    hsl: "hsl(240, 100%, 25%)"
},
{
    name: "Olive",
    hex: "#808000",
    rgb: "rgb(128, 128, 0)",
    hsl: "hsl(60, 100%, 25%)"
}
];

console.log(colors);

let colorIndex = 0;
// console.log(colorIndex);
// console.log(colors[colorIndex]);

nextBtn.addEventListener("click", function(){
colorIndex = (colorIndex + 1) % colors.length;
console.log(colorIndex);

const currentColor = colors[colorIndex];
console.log(currentColor);


colorName.textContent = currentColor.name.toUpperCase();
colorCode.textContent = currentColor.hex;
hexValue.textContent = currentColor.hex;
rgbValue.textContent = currentColor.rgb;
hslValue.textContent = currentColor.hsl;

colorContainer.style.backgroundColor = currentColor.hex;
pageNo.textContent = `${colorIndex + 1} of ${colors.length}`;

});


previousBtn.addEventListener("click", function(){
colorIndex = (colorIndex - 1 + colors.length) % colors.length;
console.log(colorIndex);

const currentColor = colors[colorIndex];
console.log(currentColor);

colorName.textContent = currentColor.name.toUpperCase();
colorCode.textContent = currentColor.hex;
hexValue.textContent = currentColor.hex;
rgbValue.textContent = currentColor.rgb;
hslValue.textContent = currentColor.hsl;

colorContainer.style.backgroundColor = currentColor.hex;
pageNo.textContent = `${colorIndex + 1} of ${colors.length}`;



});



randomBtn.addEventListener("click", function(){
colorIndex = Math.floor(Math.random() * colors.length);
console.log(colorIndex);

const currentColor = colors[colorIndex];
console.log(currentColor);

colorName.textContent = currentColor.name.toUpperCase();
colorCode.textContent = currentColor.hex;
hexValue.textContent = currentColor.hex;
rgbValue.textContent = currentColor.rgb;
hslValue.textContent = currentColor.hsl;

colorContainer.style.backgroundColor = currentColor.hex;
pageNo.textContent = `${colorIndex + 1} of ${colors.length}`;

});

resetBtn.addEventListener("click", function(){
 colorIndex = 0;
 console.log(colorIndex);

 const currentColor = colors[colorIndex];
 
 colorName.textContent = currentColor.name.toUpperCase();
 colorCode.textContent = currentColor.hex;
 hexValue.textContent  = currentColor.hex;
 rgbValue.textContent = currentColor.rgb;
 hslValue.textContent = currentColor.hsl;

 colorContainer.style.backgroundColor = currentColor.hex;
pageNo.textContent = `${colorIndex + 1} of ${colors.length}`;
 
 
});

copyBtn.addEventListener("click", function(){
navigator.clipboard.writeText(hexValue.textContent);
});

copyBtn2.addEventListener("click", function(){
navigator.clipboard.writeText(rgbValue.textContent);
});

copyBtn3.addEventListener("click", function(){
navigator.clipboard.writeText(hslValue.textContent);
});








