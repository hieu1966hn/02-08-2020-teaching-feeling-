const init = () => {
    console.log('Windown loaded');
    view.setAtiveScreen('registerScreen');
    // gọi hàm setAtive trong view
    // view.setAtiveScreen('loginScreen');
}
window.onload = init;