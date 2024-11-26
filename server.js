const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send('Hello, ChatGPT is running!');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
