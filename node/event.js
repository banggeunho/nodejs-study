const EventEmitter = require('events');

const celebrity = new EventEmitter();

//observer1이 celeb update post 이벤트 구독
celebrity.on('update post',(type) => {
    console.log(`This is post awesome! ${type}`);
});

//observer2가 celeb의 update post 이벤트 구독
celebrity.on('update post',() => {
    console.log('I like this post!');
});

// celeb이 update post 이벤트를 발행(emit).
console.log('이벤트 발행!!!')
celebrity.emit('update post', 'image');