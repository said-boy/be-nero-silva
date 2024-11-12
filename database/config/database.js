import { createConnection } from 'mysql'

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nero_silva'
})

export default connection