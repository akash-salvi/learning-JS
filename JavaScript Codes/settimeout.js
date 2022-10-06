function hello() {
    console.log('And then this message will be shown');
}

setTimeout(hello, 3000);
console.log('This message will be shown first');
