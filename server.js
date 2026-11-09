require('dotenv').config();

const app = require('./app');
const sequelize = require('./config/database');
require('./models/User');

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Kết nối MySQL thành công.');

    await sequelize.sync();
    console.log('Đồng bộ bảng users thành công.');

    app.listen(PORT, () => {
      console.log(`Server đang chạy tại http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Không thể khởi động server:', error.message);
  }
}

startServer();