// import React, { useState } from 'react'


// function Encription() {
//     const [input,setinput]=useState('')
//     const [res,setres]=useState('')

//     function caesarCipher(text, shift) {
//         let encryptedText = '';

//         for (let i = 0; i < text.length; i++) {
//             const char = text[i];

//             if (/[a-zA-Z]/.test(char)) {
//                 const isUpperCase = char === char.toUpperCase();
//                 const shiftAmount = isUpperCase ? 65 : 97;
//                 const encryptedChar = String.fromCharCode(((char.charCodeAt(0) - shiftAmount + shift) % 26) + shiftAmount);
//                 encryptedText += encryptedChar;
//             } else {
//                 encryptedText += char;
//             }
//         }

//         return encryptedText;
//     }


//     function encryptText() {
//         const inputText = document.getElementById('inputText').value;
//         const shift = 5; // Fixed shift value of 5

//         const encryptedText = caesarCipher(inputText, shift);
//         // document.getElementById('encryptedText').textContent = encryptedText;
//         setres(encryptedText)
//     }

    
//   return (
//     <div className='coloring ' style={{height:'95vh',paddingTop:'10rem'}}>
//     <div className="container ">
//     <div className="row justify-content-center">
//         <div className="col-lg-6 col-md-8 col-sm-12">
//             <div className="text-center">
//                 <h2 className="mb-4 ">Text Encryption</h2>
//             </div>
//             <div className="form-group">
//                 <input type="text" className="form-control" value={input} onChange={(e) => { setinput(e.target.value); }} id="inputText" placeholder="Enter text" />
//             </div>
//             <button className="btn btn-primary btn-block" onClick={encryptText}>Encrypt</button>
//         </div>
//     </div>
//     <div className="row justify-content-center mt-4">
//         <div className="col-lg-6 col-md-8 col-sm-12">
//             <div className="result text-center">
//                 <p className="mb-2">Your Encrypted Text is:</p>
//                 <p className='h4 text-primary'>{res}</p>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
//   )
// }

// export default Encription
import React, { useState } from 'react';

function Encription() {
    const [input, setinput] = useState('');
    const [res, setres] = useState('');

    function caesarCipher(text, shift) {
        let encryptedText = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            if (/[a-zA-Z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const shiftAmount = isUpperCase ? 65 : 97;
                const encryptedChar = String.fromCharCode(((char.charCodeAt(0) - shiftAmount + shift) % 26) + shiftAmount);
                encryptedText += encryptedChar;
            } else {
                encryptedText += char;
            }
        }

        return encryptedText;
    }

    function caesarDecipher(encryptedText, shift) {
        return caesarCipher(encryptedText, (26 - shift) % 26);
    }

    function encryptText() {
        const shift = 5; // Fixed shift value of 5
        const encryptedText = caesarCipher(input, shift);
        setres(encryptedText);
    }

    function decryptText() {
        const shift = 5; // Fixed shift value of 5 for decryption
        const decryptedText = caesarDecipher(res, shift);
        setres(decryptedText);
    }

    return (
        <div className='coloring ' style={{ height: '95vh', paddingTop: '10rem' }}>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="text-center">
                            <h2 className="mb-4 ">Text Encryption</h2>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" value={input} onChange={(e) => { setinput(e.target.value); }} id="inputText" placeholder="Enter text" />
                        </div>
                        <button className="btn btn-primary btn-block mt-2" onClick={encryptText}>Encrypt</button>
                        <button className="btn btn-primary btn-block mt-2" style={{marginLeft:'0.5rem'}} onClick={decryptText}>Decrypt</button>
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="result text-center">
                            <p className="mb-2">Your Text is:</p>
                            <p className='h4 text-primary'>{res}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Encription;
