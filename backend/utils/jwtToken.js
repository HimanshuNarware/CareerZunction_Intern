import jwt from 'jsonwebtoken';

const generateTokenAndSetCookies = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "20d",
    });

    res.cookie("jwt", token, {
        maxAge: 20 * 24 * 60 * 60 * 1000, // 20 days
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
};

export default generateTokenAndSetCookies;
