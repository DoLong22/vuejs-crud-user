import { authMutations } from '../constants';
import authService from '../services/index';
import TokenService from '../../../helpers/token';

const authAction = {
    async login(_context, loginBody) {
        let success = false;
        try {
            const result = await authService.login(loginBody.username, loginBody.password);
            if (result) {
                TokenService.setUser(result.email);
                TokenService.setToken(result.accessToken);
                TokenService.setExpiredAt(result.expiredAt);
                TokenService.setRefreshToken(result.refreshToken);
                success = true;
            }
        } catch (error) {
            console.log(error);
        }
        return success;
    },

    async logout(context) {
        let success = false;
        try {
            await authService.logout();
            // success then remove token
            context.commit(authMutations.LOGOUT);
            // remove from localStorage
            TokenService.removeExpiredAt();
            TokenService.removeRefreshToken();
            TokenService.removeToken();
            TokenService.removeUser();
            success = true;
        } catch (error) {
            console.log(error);
        }
        return success;
    },
};
export default authAction;
