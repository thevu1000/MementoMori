
import home from '~/Page/Home/Home';
import Admin from '~/Page/Admin/Admin';
import Profile from '~/Page/Profile';
import config from '~/config/routes';


const publicRoute = [
    { path: config.home, component: home },
    { path: config.admin, component: Admin },
    { path: config.profile, component: Profile },
];

const privateRoute = {};

export { privateRoute, publicRoute };
