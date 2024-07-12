document.addEventListener("DOMContentLoaded", function () {
    const mosaic = document.createElement('div');
    mosaic.className = 'transition-container from-top';
    document.body.appendChild(mosaic);

    const width = window.innerWidth;
    const height = window.innerHeight;
    const horizontal_pieces = 16; // 가로 방향 타일 개수
    const vertical_pieces = 12; // 세로 방향 타일 개수
    const total_pieces = horizontal_pieces * vertical_pieces;
    const box_width = Math.ceil(width / horizontal_pieces); // 타일의 너비를 정밀하게 계산
    const box_height = Math.ceil(height / vertical_pieces); // 타일의 높이를 정밀하게 계산
    let elements = [];
    let count = 0;

    // 타일 생성 및 스타일 설정
    for (let i = 0; i < total_pieces; i++) {
        const piece = document.createElement('span');
        piece.className = 'tile';
        const horizontal_position = (i % horizontal_pieces) * box_width;
        const vertical_position = Math.floor(i / horizontal_pieces) * box_height;
        piece.style.width = `${box_width}px`;
        piece.style.height = `${box_height}px`;
        piece.style.left = `${horizontal_position}px`;
        piece.style.top = `${vertical_position}px`;
        mosaic.appendChild(piece);
        elements.push(piece);
    }

    // 타일 랜덤 섞기
    elements = shuffleArray(elements);

    // 네비게이션 링크에 이벤트 리스너 추가
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const url = this.href;

            // 타일이 화면을 채우는 애니메이션
            elements.forEach((el, index) => {
                gsap.to(el, {
                    duration: 0.3,
                    opacity: 1,
                    delay: index * 0.02,
                    onComplete: () => {
                        // 모든 타일이 화면을 채운 후 페이지 전환
                        if (index === elements.length - 1) {
                            // 페이지 전환
                            setTimeout(() => {
                                // 타일이 점차적으로 사라지는 애니메이션
                                elements.forEach((el, index) => {
                                    gsap.to(el, {
                                        duration: 0.3,
                                        opacity: 0,
                                        delay: index * 0.02,
                                        onComplete: () => {
                                            if (index === elements.length - 1) {
                                                mosaic.style.display = 'none';
                                                window.location.href = url; // 클릭한 링크로 이동
                                            }
                                        }
                                    });
                                });
                            }, 500); // 페이지 전환 전에 잠시 대기
                        }
                    }
                });
            });
        });
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
