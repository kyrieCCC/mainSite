const targetItem1 = document.getElementById('typing1');
const targetItem2 = document.getElementById('typing2');
const targetItem3 = document.getElementById('typing3');
const targetItem1_1 = document.getElementById('typing1-item1')
const targetItem2_1 = document.getElementById('typing2-item2')
targetItem2.classList.add('stop-blinking-forever')
targetItem3.classList.add('stop-blinking-forever')
targetItem1_1.classList.add('stop-blinking-forever')
targetItem2_1.classList.add('stop-blinking-forever')

let charIndex = 0;
let resolveFunction;

const typingEffect = (targetItem, curWord) => {
    return new Promise((resolve, reject) => {
        resolveFunction = resolve;
        const type = () => {
            const curChar = curWord.substring(0, charIndex);
            targetItem.textContent = curChar;
            // targetItem.classList.add('stop-blinking');
            if (charIndex < curWord.length) {
                charIndex++;
                setTimeout(type, 200);
            }
            else {
                targetItem.classList.add('stop-blinking-forever');
                console.log('resolve')
                resolveFunction();
            }
        };
        type();
    });
};

const runEffects = async () => {
    await typingEffect(targetItem1, `Hi, I'm `);
    charIndex = 0; // Reset charIndex for the next effect
    targetItem1_1.classList.remove('stop-blinking-forever');
    await typingEffect(targetItem1_1, `KyrieChen`);
    charIndex = 0;
    targetItem2.classList.remove('stop-blinking-forever');
    await typingEffect(targetItem2, `A React Front-end`);
    charIndex = 0;
    targetItem2_1.classList.remove('stop-blinking-forever');
    await typingEffect(targetItem2_1, `Developer`);
    charIndex = 0;
    targetItem3.classList.remove('stop-blinking-forever');
    await typingEffect(targetItem3, `Welecome My Site`);
};

runEffects();

const nose = document.getElementById('nose');

const eyes = document.querySelectorAll('circle');

document.body.addEventListener('mousemove', (e) => {
    // 获取鼠标当前位置
    let x = e.clientX;
    let y = e.clientY;
    // 计算鼠标位置距离眼睛的长度值
    let ex = x - (window.innerWidth - 600) / 2 - 220;
    let ey = y - (window.innerHeight - 453) / 2 - 240;

    // 眼珠子可以转动的半径为20
    let angle = ex / ey;
    let sy = ey > 0 ? Math.cos(Math.atan(angle)) * 20 : -Math.cos(Math.atan(angle)) * 20;
    let sx = ey > 0 ? Math.sin(Math.atan(angle)) * 20 : -Math.sin(Math.atan(angle)) * 20;
    eyes[0].setAttribute('transform', `translate(${sx + 270}, ${sy + 290})`);
    eyes[1].setAttribute('transform', `translate(${sx + 462}, ${sy + 290})`);
    // 鼻子幅度小一点
    nose.setAttribute('transform', `translate(${sx / 5}, ${sy / 5})`);
})

const btns = document.querySelectorAll('.btnContainer');

btns.forEach(item => {
    item.addEventListener('mousemove', eve => {
        const x = eve.offsetX;
        const y = eve.offsetY;
        let btnWidth = item.clientWidth,
              btnHeight = item.clientHeight,
              transX = x - btnWidth / 2,
              transY = y - btnHeight / 2;
        item.style.transform = `translateX(${transX}px) translateY(${transY}px)`
        const mx = eve.pageX - item.offsetLeft,
              my = eve.pageY - item.offsetTop;

        item.style.setProperty('--x', `${mx}px`);
        item.style.setProperty('--y', `${my}px`);
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = ''
    })
})