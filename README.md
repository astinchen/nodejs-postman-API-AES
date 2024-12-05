# **Nodejs postman API AES**
用Nodejs建立模擬銀行的API查詢交易服務，並且使用postman建立串接銀行API，使用AES加密發送上行電文，收到下行電文後用AES解密結果

模擬情境：
1. 當客戶前端還未開發完成時，客戶後端可以先做串接驗證API服務，了解整個加解密的流程
2. 當銀行端有新的API服務正在開發中時，QA可以透過己知的規格內容進行發送模擬測試



## create a Nodejs API
使用vscode建立一資料夾

安裝nodejs

安裝express

```
npm install express
```

並將ifxquerytest.js放入新資料夾

![ifxquerytest](https://github.com/astinchen/nodejs-postman-API-AES/blob/main/IMG_20241127_164501.png)

啟動ifxquerytest.js服務
```
node --watch ifxquerytest.js
```


## import env to postman

![ifxquerytest](https://github.com/astinchen/nodejs-postman-API-AES/blob/main/IMG_20241127_164502.png)



## import collection to postman

![ifxquerytest](https://github.com/astinchen/nodejs-postman-API-AES/blob/main/IMG_20241127_164503.png)


## Send a request in postman

![ifxquerytest](https://github.com/astinchen/nodejs-postman-API-AES/blob/main/IMG_20241127_164504.png)


## AES Encrypt in postman Pre-request

```
function aesEncrypt(data,secret) {
    const keyBytes = stringToUTF8Bytes(secret);
    const inputBytes = stringToUTF8Bytes(data);

    //console.log(keyBytes);
    console.log(inputBytes);

    var keyWordArray = CryptoJS.lib.WordArray.create(keyBytes);
    var inputWordArray = CryptoJS.lib.WordArray.create(inputBytes);

    //console.log(keyWordArray);
    //console.log(inputWordArray);

    const encrypted = CryptoJS.AES.encrypt(inputWordArray,keyWordArray, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
}
function stringToUTF8Bytes(str) {
    const utf8Encoded = Buffer.from(str,"utf-8");
    return utf8Encoded;
}
```

## AES Decrypt in postman Post-response
```
function aesDecrypt(data,secret) {
    // 【HEX轉String】
    const hexBytesArray = hexToBytes(data);
    const base64String = bytesToBase64(hexBytesArray);
    
    console.log(base64String);

    // 【AES解密】
    const keyBytes = CryptoJS.enc.Utf8.parse(secret);
    const decrypted = CryptoJS.AES.decrypt(base64String, keyBytes, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    // 將解密結果轉為原始資料（utf-8 編碼）
    const decryptedBytes = decrypted.toString(CryptoJS.enc.Latin1); 
    console.log(decryptedBytes);
    const rawData = Buffer.from(new Uint8Array(decryptedBytes.split('').map(char => char.charCodeAt(0),'utf-8'))).toString();

    return rawData;
}
function hexToBytes(hex) {
    let bytes = [];
    for (let i = 0; i < hex.length; i += 2) {
        bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return bytes;
}

function bytesToBase64(bytes) {
    const decryptedHexString = Buffer.from(bytes).toString('utf-8');
    return decryptedHexString;
}
```
