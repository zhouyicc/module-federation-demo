/* eslint-disable no-undef */
const Koa = require("koa");
const koaViews = require("koa-views");
const path = require("path");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const history = require("koa2-connect-history-api-fallback");
const app = new Koa();

//跨域设置
app.use(async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    await next();
});

// app.use(history.historyApiFallback({
//   "htmlAcceptHeaders": ["text/html", "application/xhtml+xml"]
// }));
app.use(bodyParser());
app.use(static(path.join(__dirname, "./dist")));
app.use(koaViews(path.join(__dirname, "./views"), {
    "extension": "ejs"
}));

app.use(async ctx => {
    let title = "not found";

    if (ctx.status !== 404) {
        title = "system error!";
    }
    await ctx.render("index", {
        title,
        "status": ctx.status
    });
});

module.exports = {
    app
};
