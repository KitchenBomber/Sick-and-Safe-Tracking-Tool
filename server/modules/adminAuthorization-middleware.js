const rejectNonAdmin = (req, res, next) => {
    // check if logged in
    if (req.isAuthenticated() && req.user.is_admin) {
        // They were authenticated! User may do the next thing
        // Now we also are requiring Authorization
        next();
    } else {
        // failure best handled on the server. do redirect here.
        res.sendStatus(403);
    }
};

module.exports = { rejectNonAdmin };