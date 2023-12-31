const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';

const usersRouter = require('./routes/users.route');
const postsRouter = require('./routes/posts.route');
const productsRouter = require('./routes/products.route');

const {default:mongoose} = require('mongoose');

const app = express();
const path = require('path');

//res.send() vs res.json() 차이
//결과는 동일하다.
//send에 객체를 넣어도 올바르게 content-type을 설정해서 보낸다 (express가 설정해준것임)
// res.json은 json 문자열로 바꿔주고, content-type으로 json을 세팅. res.send(body) 실행
// res.send()는 타입을 체크 먼저하고, object일 경우 json()을 호출 -> 따라서 결국엔 같은 결과를 반환
// res.json()을 사용하는 것이 더 직관적이고, 호출도 한 번 더 적게 일어나는 json을 사용하는 것을 추천.


// res.send() vs res.end()
// 세션을 종료하는 것을 둘 다 동일하다.
// res.end()에는 content-type과 etag가 없습니다. => 즉 캐싱을 하지 않는다.

// middleware 사용
app.use(express.json());
app.use((req, res, next) => {
    const start = Date.now();
    console.log('Time: ', start);
    next();
    const diffTime = Date.now() - start;
    console.log(`${diffTime}ms`);
})

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${req.ip}`);
    next()
    console.log(`${req.method} ${req.baseUrl}${req.url} ${req.ip}`);
})



const mongoURI = 'mongodb://newuser:newuserpassword@172.30.1.85:27017/your_database';
mongoose.connect(mongoURI)
    .then(() => console.log('mongodb connected'))
    .catch((error) => console.log(error));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res, next) => {
    setImmediate(() => next(new Error("it is an error")));
})

// 에러 처리기
app.use((err, req, res, next) => {
    res.json({message: err.message});
});

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/products', productsRouter);

app.listen(PORT, HOST);
console.log(`RUNNING on http://${HOST}:${PORT}`);