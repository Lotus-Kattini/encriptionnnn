import React from 'react'

function Generatepass() {
    function generatePassword() {
        const passwordLength = document.getElementById('passwordLength').value;
        const password = generateRandomPassword(passwordLength);
        document.getElementById('generatedPassword').textContent = password;
    }

    function generateRandomPassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_";
        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        return password;
    }

    // Apply Caesar Cipher with numeric encryption
function caesarCipher(text, shift) {
    let encryptedText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            let isUpperCase = false;
            let shiftAmount = 0;

            if (/[a-zA-Z]/.test(char)) {
                isUpperCase = char === char.toUpperCase();
                shiftAmount = isUpperCase ? 65 : 97;
            } else if (/[0-9]/.test(char)) {
                shiftAmount = 48;
            }

            const encryptedChar = String.fromCharCode(((char.charCodeAt(0) - shiftAmount + shift) % 26) + shiftAmount);
            encryptedText += encryptedChar;
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

    function encryptText() {
        const inputText = document.getElementById('inputText').value;
        const encryptionToggle = document.getElementById('encryptionToggle').checked;
        const shiftAmount = parseInt(document.getElementById('shiftAmount').value);

        if (encryptionToggle) {
            const encryptedText = caesarCipher(inputText, shiftAmount);
            document.getElementById('encryptedText').textContent = encryptedText;
        } else {
            document.getElementById('encryptedText').textContent = inputText;
        }
    }
  return (
    <div className='coloring' style={{height:'100vh'}}>
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="form-group mt-4">
                <h6>Password Length:</h6>
                <input type="number" className="form-control" id="passwordLength" min="1" max="100" placeholder="Enter password length" />
                <button className="btn btn-primary btn-block mt-2" onClick={generatePassword}>Generate Password</button>
            </div>
            
            <div className="result mt-4">
                <h6>Generated Password:</h6>
                <p className='h4 text-primary' id="generatedPassword"></p>
            </div>

            <div className="form-group mt-4">
                <h6>Apply Caesar Cipher:</h6>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="encryptionToggle"/>
                    <label className="custom-control-label" for="encryptionToggle"></label>
                </div>
            </div>

            <div className="form-group mt-4">
                <h6>Shift Amount:</h6>
                <input type="number" className="form-control" id="shiftAmount" min="1" max="25" value="5" />
            </div>

            <div className="form-group mt-4">
                <label>Text to Encrypt:</label>
                <input type="text" className="form-control" id="inputText" placeholder="Enter text to encrypt" />
                <button className="btn btn-primary btn-block mt-2" onClick={encryptText}>Encrypt</button>
            </div>

            <div className="result mt-4">
                <p>Encrypted text:</p>
                <p className='h4 text-primary' id="encryptedText"></p>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Generatepass