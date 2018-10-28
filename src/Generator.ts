import * as handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";

interface RpcRoute {
    name: string;
    requestName: string;
    responseName: string;
}

interface HttpClientParams {
    packageName: string,
    packageLocation: string,
    serviceName: string,
    routes: RpcRoute[];
    clientName: string;
}

interface Directories {
    protosDirectory: string;
    generatedDirectory: string;
}

//TODO make this work with multiple services per proto file
const parseProtoFile = (filePath: string, packageLocation: string): HttpClientParams => {
//TODO first read proto file
    const protoRaw = fs.readFileSync(filePath, "utf-8");
    const protoLines = protoRaw.split("\n");


    //Only one service per proto file for now...
    let packageName = "";
    let serviceName = "";

    let routes: RpcRoute[] = [];

    const startsWith = (word: string, startsWith: string) => {
        const indx = word.trim()
            .indexOf(startsWith);
        return indx == 0;
    };

    for (let line of protoLines) {
        if (startsWith(line, "package")) {
            packageName = line
                .replace("package", "")
                .replace(";", "")
                .trim();
            console.log(packageName);
        }

        if (startsWith(line, "service")) {
            serviceName = line
                .replace("service", "")
                .replace("{", "")
                .trim();
        }

        if (startsWith(line, "rpc")) {
            let temp = line.replace("rpc", "").trim();
            const split = temp.split("(");
            const name = split[0].trim();
            const requestName = split[1].replace(") returns", "").trim();
            const responseName = split[2].replace(")", "")
                .replace(";", "").trim();
            routes.push({name, requestName, responseName});
        }
    }

    const clientName = serviceName.trim().replace("Service", "") + "Client";

    return {
        packageName,
        packageLocation,
        serviceName,
        routes,
        clientName
    };
};

const templateFile = process.cwd() + '/dist/HttpClient.template';

const createHttpClient = (httpClientParams: HttpClientParams, generatedDirectory: string) => {
    //Now generate HttpClient
    const text = fs.readFileSync(templateFile, "utf-8");

    const template = handlebars.compile(text);
    console.log(template(httpClientParams));

    const path = (generatedDirectory + "/" + httpClientParams.clientName + ".ts");

    fs.writeFile(path, template(httpClientParams), (err) => {
        console.log(err);
    });
};

export const processArgs = (): Directories => {
    //check for args
    if (process.argv.length <= 3) {
        console.log("Usage: generate <.proto directory> <generated directory>");
        console.log("Example: generate protos src/generated");
        process.exit(-1);
    }

    const protosDirectory = process.argv[2];
    const generatedDirectory = process.argv[3];

    return {protosDirectory, generatedDirectory};
};

export const execute = (directories: Directories) => {
//Get directory and find protos
    fs.readdir(directories.protosDirectory, function (err, items) {
        console.log(items);

        for (var i = 0; i < items.length; i++) {
            const protoFile = directories.protosDirectory + "/" + items[i];
            const params = parseProtoFile(protoFile, "./protos"); //NOTE: assumes protos.ts file compiled to same directory
            createHttpClient(params, directories.generatedDirectory);
        }
    });
};
