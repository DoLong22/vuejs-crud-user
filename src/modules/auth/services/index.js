import moment from 'moment';

const login = async (username, password) => {
    if (username === 'admin' && password === 'tt@1234') {
        return {
            username: 'admin',
            token: 'token1234567',
            refreshToken: 'token1234567',
            expiredAt: moment().add(1, 'hours').unix(),
        };
    }
    return null;
};

const logout = async () => {
    // TODO: call api to logout
};

const refreshAccessToken = async (username, refreshToken) => ({
        username,
        token: 'token1234567',
        refreshToken,
        expiredAt: moment().add(1, 'hours').unix(),
    });

const authService = {
    login,
    logout,
    refreshAccessToken,
};

export default authService;
