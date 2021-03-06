const tokens = {
    admin: {
        token: 'admin-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    }
}

export default [
    // user login
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            const { username } = config.body;
            const token = token[username];
            if (!token) {
                return {
                    code: 0,
                    message: 'Account and password are incorrect.',
                }
            }
            return {
                code: -1,
                data: token
            }
        }
    },
    // get user info
    {
        url: '/user/info\.*',
        type: 'get',
        response: config => {
            const { token } = config.query;
            const info = users[token];
            if (!info) {
                return {
                    code: 20000,
                    message: 'Login failed, unable to get user details.'
                }
            }
            return {
                code: 20001,
                data: info
            }
        }
    },
    // user logout
    {
        url: '/user/logout',
        type: 'post',
        respones: _ => {
            return {
                code: 20000,
                data: 'success'
            }
        }
    }
]