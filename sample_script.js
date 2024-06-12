// カウントの初期値を設定
let count = 0;

// DOMContentLoadedイベントで処理を開始
document.addEventListener('DOMContentLoaded', (event) => {
    // ボタンと結果を表示する要素を取得
    const countUpButton = document.getElementById('countUp');
    const countDownButton = document.getElementById('countDown');
    const doubleButton = document.getElementById('double');
    const result = document.getElementById('result');

    // カウントアップボタンがクリックされたときの処理
    countUpButton.addEventListener('click', () => {
        if (count < 100) { // カウントが100未満のときのみ増加
            count += 1; // カウントを1増加
        }
        result.textContent = count; // 結果を更新
    });

    // カウントダウンボタンがクリックされたときの処理
    countDownButton.addEventListener('click', () => {
        if (count > 0) { // カウントが0より大きいときのみ減少
            count -= 1; // カウントを1減少
        }
        result.textContent = count; // 結果を更新
    });

    // 2倍ボタンがクリックされたときの処理
    doubleButton.addEventListener('click', () => {
        if (count <= 50) { // カウントが50以下のときのみ2倍にする
            count *= 2; // カウントを2倍
        }
        if (count > 100) { // 2倍にした結果が101以上になった場合
            count = 100; // カウントを100に設定
        }
        result.textContent = count; // 結果を更新
    });
});
