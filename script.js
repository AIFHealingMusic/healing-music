/* Noto Sans KR 폰트 적용 */
body {
    font-family: 'Noto Sans KR', sans-serif;
    /* 이미지에 있는 배경 색상과 유사하게 설정 */
    background: linear-gradient(135deg, #1A1A40 0%, #301934 100%); 
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* 상단에서부터 시작하도록 변경 */
    min-height: 100vh;
    margin: 0;
    padding: 30px 0;
    text-align: center;
}

.radio-container {
    background: rgba(255, 255, 255, 0.05); /* 투명한 배경 */
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 450px;
    padding: 20px;
    box-sizing: border-box;
}

.main-title {
    color: #f0f0f0;
    font-size: 1.8em;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 5px;
}

.subtitle {
    color: #cccccc;
    font-size: 0.9em;
    margin-bottom: 20px;
}

.listener-info {
    color: #4CAF50; /* 청취자 정보는 눈에 띄게 */
    margin-bottom: 25px;
    font-size: 1em;
}

/* 플레이어 박스 디자인 (이미지 2의 중앙 큰 영역) */
.player-box {
    background: linear-gradient(145deg, #3f3174, #2a2153);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    position: relative;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.current-theme-title {
    font-size: 1.4em;
    font-weight: 700;
    margin-bottom: 5px;
    color: #F8F8FF;
}

.current-theme-time {
    font-size: 0.9em;
    color: #aaa;
    margin-bottom: 20px;
}

/* 플레이어 원형 디자인 */
.player-circle {
    width: 180px;
    height: 180px;
    background-color: #5b4b9e; /* 중앙 원형 색상 */
    border-radius: 50%;
    margin: 0 auto 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(91, 75, 158, 0.5);
}

.music-icon {
    width: 50px;
    height: 50px;
    opacity: 0.7;
    filter: invert(100%); /* 아이콘 색상 조정 필요 시 */
}

/* 컨트롤 버튼 (재생/일시정지) */
.player-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.control-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.control-button img {
    width: 30px;
    height: 30px;
    filter: invert(100%) opacity(0.8);
    transition: opacity 0.2s;
}

.control-button:hover img {
    opacity: 1;
}

.main-play-button img {
    width: 50px;
    height: 50px;
    /* 메인 버튼은 가운데 원형 디자인의 색상 */
    filter: invert(100%) opacity(0.9); 
}

/* 볼륨 컨트롤 */
.volume-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-top: 10px;
}

.volume-icon {
    width: 20px;
    height: 20px;
    filter: invert(100%) opacity(0.7);
}

#volume-slider {
    width: 150px;
}

.volume-percent {
    font-size: 0.9em;
    color: #ccc;
}

/* 시간대별 선택 버튼 (이미지 2의 하단 버튼) */
.schedule-selector {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
}

.time-button {
    background: none;
    border: none;
    color: #aaa;
    cursor: pointer;
    padding: 8px 10px;
    font-size: 0.85em;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 0.3s, background-color 0.3s;
}

.time-button .time-icon {
    font-size: 1.2em;
    margin-bottom: 3px;
}

.time-button.live {
    color: #4CAF50; /* 현재 시간대는 녹색으로 */
    font-weight: bold;
}

/* 스케줄 상세 섹션 (이미지 1의 스케줄 리스트) */
.schedule-detail {
    background: linear-gradient(145deg, #3f3174, #2a2153);
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 20px;
    text-align: left;
}

.detail-title {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 15px;
    color: #F8F8FF;
}

.schedule-item {
    background-color: #5b4b9e;
    border-radius: 10px;
    padding: 10px 15px;
    margin-bottom: 8px;
    color: #f0f0f0;
    position: relative;
}

.schedule-item p {
    margin: 0;
    line-height: 1.4;
}

.schedule-item.live {
    background-color: #4CAF50; /* LIVE 테마 배경색 */
    font-weight: bold;
}

.live-tag {
    background-color: red;
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 0.7em;
    font-weight: bold;
    margin-left: 10px;
}

/* 사연 및 소통방 섹션 */
.aif-web-info {
    background: linear-gradient(145deg, #3f3174, #2a2153);
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
}

.info-title {
    font-size: 1.3em;
    margin-bottom: 15px;
    color: #F8F8FF;
}

.aif-web-info p {
    font-size: 0.9em;
    color: #ccc;
    margin: 5px 0;
}

.kakao-button {
    display: block;
    width: 90%;
    margin: 20px auto 15px;
    padding: 12px;
    background-color: #FFEB00; /* 카카오톡 색상 */
    color: #3C1E1E;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
    transition: background-color 0.2s;
}

.kakao-button:hover {
    background-color: #FEE500;
}

.subscription-info {
    font-size: 0.75em !important;
    color: #888 !important;
}

/* 감성 위로 메시지 박스 */
.message-box {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 15px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.message-text {
    margin: 0;
    font-style: italic;
    color: #FFC0CB; /* 은은한 핑크색으로 위로의 느낌 */
    overflow: hidden; /* 타이핑 애니메이션을 위해 필요 */
    white-space: nowrap; /* 타이핑 애니메이션을 위해 필요 */
    border-right: .15em solid #FFC0CB; /* 커서 효과 */
    animation: 
        typing 4s steps(40, end),
        blink-caret .75s step-end infinite;
}

/* 애니메이션 키프레임 */
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #FFC0CB; }
}

/* audio 태그 숨기기 */
#healing-stream {
    display: none;
}
