//部属时 host就直接 //代域名就好 例如 //api.qqmty.cc  不用代端口
export const host = 'http://localhost:8899';
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const verifyEmailRoute = `${host}/api/auth/verifyEmailToken`;
export const profileVerifyEmailRoute = `${host}/api/auth/profileVerifyEmailToken`;
export const setAvatarRoute = `${host}/api/auth/setavatar`;