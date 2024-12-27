import { XfVoiceDictation } from '@muguilin/xf-voice-dictation';

const $showText = $('input#show-text');

function showText (text) {
   $showText.val(text)
}

function removeText() {
    $showText.val('')
}

let times = null;

// 实例化迅飞语音听写（流式版）WebAPI

const xfVoice = new XfVoiceDictation({
    APPID: 'f9dea650',
    APISecret: 'NTllYWYxMjE0YTNjYzFmZWRkMzFlMjQx',
    APIKey: '403447d8ea5c9d2c462e10152eb7ce85',
    
    // webSocket请求地址 非必传参数，默认为：wss://iat-api.xfyun.cn/v2/iat
    // url: '',

    // 监听录音状态变化回调
    onWillStatusChange: function (oldStatus, newStatus) {
        // 可以在这里进行页面中一些交互逻辑处理：如：倒计时（语音听写只有60s）,录音的动画，按钮交互等！
        console.log('识别状态：', oldStatus, newStatus);
    },

    // 监听识别结果的变化回调
    onTextChange: function (text) {
        // 可以在这里进行页面中一些交互逻辑处理：如将文本显示在页面中
        console.log('识别内容：',text)
        showText(text);

        // 如果3秒钟内没有说话，就自动关闭（60s后也会自动关闭）
        if (text) {
            clearTimeout(times);
            times = setTimeout(() => xfVoice.stop(), 3000);
        };
    },

    // 监听识别错误回调
    onError: function(error){
        console.log('错误信息：', error)
    },
});   

const microphoneBtn = document.getElementById('microphone-btn')
let flag = 1;
microphoneBtn.addEventListener('click', function () {
    const $iconMicrophone = $('#icon-microphone')
    const $iconSpeaking = $('#icon-speaking')
    if (flag === 1) {
        flag = 0;
        removeText();
        xfVoice.start();
        $iconMicrophone.hide()
        $iconSpeaking.show()
    } else if (flag === 0) {
        flag = 1;
        xfVoice.stop();
        $iconMicrophone.show()
        $iconSpeaking.hide()
    }
})
  