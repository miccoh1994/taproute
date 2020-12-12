const fs = require("fs");
const ejs = require("ejs");
const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
const { ESLint } = require("eslint");

const routeParent = fs.readFileSync("./lib/templates/route-file.ejs", "utf-8");
(async function main() {
    const files = fs.readdirSync("./lib/models/").filter((name) => {
        return name[0] != ".";
    });
    files.forEach((file) => {
        require("./lib/models/" + file);
    });
    const Models = files.map((name) => name.split(".")[0]);
    await Promise.all(
        Models.map((model) => {
            return new Promise((resolve, reject) => {
                let path = model.toLowerCase();
                const endpoints = methods.map((method) => {
                    return { path: path, method: method };
                });
                const st = ejs.render(routeParent, {
                    ModelName: model,
                    endpoints: endpoints,
                    templatepath: __dirname + "/lib/templates/route.ejs",
                });
                fs.writeFile(__dirname + "/out/" + path + ".js", st, (err) => {
                    if (!err) {
                        resolve();
                    } else {
                        reject(err);
                    }
                });
            });
        })
    );
    // const eslint = new ESLint();
    // const results = await eslint.lintFiles(["out/**/*.js"]);
})();
