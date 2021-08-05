const routes = [
{ href: "/genre/psychological", genre: "Psychological" },
{ href: "/genre/journeytoanotherworld", genre: "Journey to Another World" },
{ href: "/genre/sliceoflife", genre: "Slice of Life" },
];

module.exports = function navLinks(req, res, next) {
    res.locals.routes = routes;
    next();
}