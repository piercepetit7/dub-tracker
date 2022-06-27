function index(req, res) {
    res.render('index', {
        title: 'Home',
        user: req.user ? req.user : null 
    })
}

export {
    index,
}
