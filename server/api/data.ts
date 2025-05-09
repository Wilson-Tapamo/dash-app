import mysql from 'mysql2/promise'

export default defineEventHandler(async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'minepded01',
    password: ''
  })

  const [rows] = await connection.execute('SELECT * FROM resistancemenage')
  return rows
})
