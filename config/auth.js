module.exports = {
    secret: process.env.AUTH_SECRET || "olivia",
    expires: process.env.AUTH_EXPIRES || "1d",
    rounds: process.env.AUTH_ROUNDS || 10
}