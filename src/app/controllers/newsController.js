class newsNav{
    news(req,res) {
        res.render("news.ejs",{
            Message:"News page",
        })
    }
    show(req,res) {
        res.render("news.ejs",{
            Message:"News page slug",
        })
    }
}
export default new newsNav;