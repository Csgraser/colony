export const SUCCESSFULL_SIGN_IN = "SUCCESSFULL_SIGN_IN";

export function handleSignIn() {
	console.log('auth.action handleSignIn');
	return {type: SUCCESSFULL_SIGN_IN}
}