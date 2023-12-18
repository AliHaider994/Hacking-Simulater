function getRandomColor() {
    let j = 0 + Math.random() * 255
    let k = 0 + Math.random() * 255
    let l = 0 + Math.random() * 255
    return `rgb(${j} ,${k}, ${l})`
}
let arr = ['Intilizing hacking...', 'Reading Your files...', 'Passoword files detected...', 'Sending all Password files to server...', 'Cleaning Up...']
let i = 0;
async function getTheInstr() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("Resoving")
            if(i==5) {
                i=0;
            }
            let html = `<div class="box">
            <div>${arr[i]}</div> </div>`
            document.querySelector(".box").style.color = getRandomColor();
            document.querySelector(".box").innerHTML = html
            i++;
        }, 3000);
     })

   

}

async function main() {
    while(true)
    {

    await getTheInstr()
    }
    
    
}
main()

