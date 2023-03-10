const checkIfAuthenticated = async(req, res, next) => {
    const { authToken } = req;
    try {
        const user =await admin.auth().verifIdToken(authToken);
        req.authId=user.uid;
        // req.email=user.email;
    } catch (err) {
        return res.status(401).json({ message: 'You are not authenticated' });
    }

    return next();
}
export default checkIfAuthenticated; 