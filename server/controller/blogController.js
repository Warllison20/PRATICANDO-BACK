const controller = {
    index: (req, res) =>    res.render("blog", {title: "Blog" }),
    show:  (req, res) =>    res.render("Post", {title: "Post"})
}

module.exports = controller