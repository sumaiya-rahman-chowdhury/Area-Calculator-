console.log("Lana")

function calculateTriangleArea(){
    // console.log("clicked")
    const baseString = document.getElementById('base').value ;
    // console.log(typeof(baseString))
    const base = parseFloat(baseString) ;
    // console.log(typeof(base)) 
    // type is number now 
    // console.log(base)

    const heightString = document.getElementById('height').value ;
    const height = parseFloat(heightString) ;
    // console.log(base * height * 0.5)
    // return base * height * 0.5 ;
    document.getElementById('result-triangle').innerText = base * height * 0.5 ;
}

function calculateRectangleArea(){
    // console.log("clicked")
    const widthString = document.getElementById('width').value ;
    const width = parseFloat(widthString) ;

    const lenghtString = document.getElementById('lenght').value ;
    const lenght = parseFloat(lenghtString) ;

    const result = lenght*width ;
    console.log(result);
    document.getElementById('result-triangle').innerText = result ;

}