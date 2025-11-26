document.addEventListener('DOMContentLoaded', () => {
    const listenerDisplay = document.getElementById('listener-display');
    const audioStream = document.getElementById('healing-stream');
    
    // 현재는 더미 데이터로 표시. 실제 서버 연결 후 수정 예정
    listenerDisplay.textContent = `현재 청취자: 1명 (준비 중)`; 

    // 스트림이 중단될 경우 재시도 (매우 중요)
    audioStream.addEventListener('error', () => {
        console.error('Audio stream error. Retrying in 5 seconds...');
        // 오디오 요소를 다시 로드하고 재생을 시도합니다.
        setTimeout(() => {
            audioStream.load();
            audioStream.play().catch(e => console.error("Play failed on retry:", e));
        }, 5000); 
    });
});
