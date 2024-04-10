/* const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // 실제 MySQL 사용자 이름으로 변경
  password: '1111', // 실제 MySQL 비밀번호로 변경
  database: 'jdbc:mysql://localhost:3306'
});

// JSON 요청 본문 파싱을 위한 미들웨어 설정
app.use(express.json());

// TODO 리스트 조회
app.get('/todos', (req, res) => {
  connection.query('SELECT * FROM todos', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// TODO 항목 추가
app.post('/todos', (req, res) => {
  const { title } = req.body;
  connection.query('INSERT INTO todos (title) VALUES (?)', [title], (error, results) => {
    if (error) throw error;
    res.status(201).json({ id: results.insertId, title });
  });
});

// TODO 항목 수정 (완료 상태 변경 포함)
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  connection.query('UPDATE todos SET title = ?, completed = ? WHERE id = ?', [title, completed, id], (error, results) => {
    if (error) throw error;
    res.json({ message: 'TODO updated successfully.' });
  });
});

// TODO 항목 삭제
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM todos WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.json({ message: 'TODO deleted successfully.' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(express.static('public')); */