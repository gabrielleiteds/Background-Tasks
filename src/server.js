import 'dotenv/config'
import app from './api/app';

app.listen(8000, () => {
  console.log('Server running on port: http://localhost:8000')
})