import moment from 'moment';
import axiosInstance from '../../../plugins/axios';

const login = async (username, password) => {
    try {
        const response = await axiosInstance.post('/login', {
            email: username, password,
        });
        const { data } = response.data;
        return {
            username: data?.profile?.email,
            token: data?.accessToken?.token,
            refreshToken: data?.refreshToken?.token,
            expiredAt: moment().add(1, 'hours').unix(),
        };
    } catch (error) {
        console.log(error);
        return null;
    }
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
