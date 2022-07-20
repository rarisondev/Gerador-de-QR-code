const inputValue = document.querySelector('#inputValue');
const bntValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');
let ValueDefault;

//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

bntValue.addEventListener('click', () => { 
    let qrcodeValue = inputValue.value.trim();
    if (!qrcodeValue || qrcodeValue === ValueDefault) return;
    ValueDefault = qrcodeValue;
} )
