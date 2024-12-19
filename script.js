const microphoneBtn = document.getElementById('microphone-btn')
const wavaBox = document.getElementById('wave-box')
let flag = 1;
microphoneBtn.addEventListener('click', function () {
    if (flag === 1) {
        flag = 0;
        wavaBox.style.display = 'flex';
        setInterval(() => {
            for(let i = 0; i < 10; i++) {
            let ele = document.getElementById(`item-${i}`)
            let height = 100 * Math.sin(Math.PI / 10 * i) * Math.random()
            ele.style = `transition: height 0.15s ease;height:${height}px;`
            }
        }, 150);
    } else if (flag === 0) {
        flag = 1;
        wavaBox.style.display = 'none';
    }
})

function audioToText() {
    
}
  