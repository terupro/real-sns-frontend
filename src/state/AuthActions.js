// ユーザー入力に応じたアクションの設定
// type = actionの名前 / payload = actionに成功した場合の状態
export const LoginStart = (user) => ({
  type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const LoginError = (error) => ({
  type: "LOGIN_ERROR",
  payload: error,
});
