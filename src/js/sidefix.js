import { MyListBox } from 'style/MyList';
import { Container } from 'style/globalStyles';

export const sideFix = () => {
    let side = document.querySelector(`.${MyListBox.componentStyle.componentId}`);
    // 우측 사이드 메뉴 지정
    let wincom = document.body.clientWidth;
    // 현재 dom내부 body 에서의 창 크기
    var windowHalf = wincom / 2;
    // 현재 위도우 창 에서 중앙에 위치 // 1920 / 2 중앙 위치
    var pillar = document.querySelector(`.${Container.componentStyle.componentId}`);
    // 우측 메뉴의 위치 조정을 위한 중심 축 
    var pillarVal = pillar.offsetWidth / 6.2;                         
    // 중심 축의 4 / 1 값 만큼 오른쪽으로 더 보낼 값

    var result = windowHalf + pillarVal;

    side.style.left = result+'px';
    return 'result';
}

export const resizeFunc = (outEvent) => {
    if(outEvent) {
        if(window.attachEvent) 
            window.detachEvent('resize', sideFix);   
        else if(window.addEventListener) 
            window.removeEventListener('resize', sideFix, true);
        return false;
    }

    if(window.attachEvent) 
        window.attachEvent('onresize', sideFix)
    else if(window.addEventListener) 
        window.addEventListener('resize', sideFix , true);
    else 
        //The browser does not support Javascript event binding
        console.log('지원하지 않는 브라우저 입니다.');
    
    window.addEventListener('load',() => {
        return sideFix();
    });
};
