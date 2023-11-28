function encrypt() {
    return "encrypted data";
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`${encryptedData} is being sent to ${url}`);
}

// 결국 이 방법이 제일 좋음...
export {
    send
}