let psd = document.querySelector('#password');
let confPsd = document.querySelector('#conf-password');
let errorMsg = document.querySelector('#error-msg')
let submitBtn = document.querySelector('#submit-btn')


// psd.addEventListener('input', function () {
// 	if (psd.value !== confPsd.value ) {
// 		psd.setCustomValidity('*Passwords do not match');
//         // psd.style.setProperty('border-color', 'pink', 'important');
//         errorMsg.textContent = psd.validationMessage;
//         errorMsg.style.display = 'block';
// 	} 
//     else {
// 		psd.setCustomValidity('');
// 		// psd.style.setProperty('border-color', '', 'important');
// 	}
// });


submitBtn.addEventListener('click', function () {
    if (psd.value !== confPsd.value ) {
		psd.setCustomValidity('*Passwords do not match');
        // psd.style.setProperty('border-color', 'pink', 'important');
        errorMsg.textContent = psd.validationMessage;
        errorMsg.style.display = 'block';
	} 
    else {
		psd.setCustomValidity('');
		// psd.style.setProperty('border-color', '', 'important');
	} 
})

// confPsd.addEventListener('input', function () {
// 	if (confPsd.value !== psd.value) {
// 		confPsd.setCustomValidity('*Passwords do not match');
//         // psd.style.setProperty('border-color', 'pink', 'important');
//         errorMsg.textContent = psd.validationMessage;
//         errorMsg.style.display = 'block';
// 	} 
//     else {
// 		confPsd.setCustomValidity('');
// 		// psd.style.setProperty('border-color', '', 'important');
// 	}
// });
