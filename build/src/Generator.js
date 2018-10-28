"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
//check for args
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " protos-directory generated-directory");
    process.exit(-1);
}
console.log(process.argv);
var protosDirectory = process.argv[1];
console.log(protosDirectory);
//Get directory and find protos
fs.readdir(protosDirectory, function (err, items) {
    console.log(items);
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
});
//
// //TODO first read proto file
// const protoRaw = fs.readFileSync("./protos/auth.proto", "utf-8");
// const protoLines = protoRaw.split("\n");
//
//
// //TODO, eventually make for multiple packages/protos, but for now
// //I don't really need that as a feature
// let packageName = "";
// let serviceName = "";
//
// interface RpcRoute {
//     name: string;
//     requestName: string;
//     responseName: string;
// }
//
// let routes: RpcRoute[] = [];
//
// const startsWith = (word: string, startsWith: string) => {
//     const indx = word.trim()
//         .indexOf(startsWith);
//     return indx == 0;
// };
//
// for (let line of protoLines) {
//     if (startsWith(line, "package")) {
//         packageName = line
//             .trim()
//             .replace("package", "")
//             .replace(";", "");
//         console.log(packageName);
//     }
//
//     if (startsWith(line, "service")) {
//         serviceName = line
//             .trim()
//             .replace("service", "")
//             .replace("{", "");
//     }
//
//     if (startsWith(line, "rpc")) {
//         let temp = line.trim().replace("rpc", "");
//         const split = temp.split("(");
//         const name = split[0].trim();
//         const requestName = split[1].replace(") returns", "");
//         const responseName = split[2].replace(")", "")
//             .replace(";", "");
//         routes.push({name, requestName, responseName});
//     }
// }
//
// const clientName = serviceName.trim().replace("Service", "") + "Client";
//
// const httpClientParams = {
//     packageName,
//     packageLocation: "./protos",
//     serviceName,
//     routes,
//     clientName
// };
//
// //Now generate HttpClient
// const text = fs.readFileSync("./src/templates/HttpClient.ts", "utf-8");
//
// const template = handlebars.compile(text);
// console.log(template(httpClientParams));
//
// const path = ("./generated/" + clientName + ".ts");
//
// fs.writeFile(path, template(httpClientParams), (err) => {
//     console.log(err);
// });
