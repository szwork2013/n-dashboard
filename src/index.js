import './index.html';
import './index.less';
import dva from 'dva';
import { browserHistory } from 'dva/router';


import moment from 'moment-timezone/moment-timezone';
// 推荐在入口文件全局设置 locale 与时区
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// 从 https://github.com/moment/moment-timezone/blob/develop/data/packed/latest.json 复制
moment.tz.add('Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6');
moment.tz.setDefault('Asia/Shanghai')

// 1. Initialize
const app = dva({
  history : browserHistory
});

// 2. Plugins
//app.use({});

// 3. Model

app.model(require('./models/example'));
app.model(require('./models/mainLayout'));
// 登陆信息处理
app.model(require('./models/authlayout'));
app.model(require('./models/auth'));

// 全局信息
app.model(require('./models/global'));

// 公司信息处理
app.model(require('./models/companies'));
app.model(require('./models/orders'));
app.model(require('./models/sns'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
