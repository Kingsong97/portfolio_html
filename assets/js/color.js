document.addEventListener("DOMContentLoaded", function() {

    const colorButton = document.querySelector(".color");
    let currentColorIndex = 0;
    const colors = ['--mainBg', '--mainBg02', '--mainBg03', '--mainBg04', '--mainBg05'];

    // 초기 값 저장
    const initialMainBg = getComputedStyle(document.documentElement).getPropertyValue('--mainBg').trim();
    const colorValues = [initialMainBg];

    colors.slice(1).forEach(color => {
        colorValues.push(getComputedStyle(document.documentElement).getPropertyValue(color).trim());
    });

    colorButton.addEventListener("click", function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.documentElement.style.setProperty('--mainBg', colorValues[currentColorIndex]);
    });
            });
