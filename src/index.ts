import {execute, processArgs} from "./Generator";

//first let's build our models
const {exec} = require('child_process');
exec('npx rxjs-grpc -o src/generated/protos.ts protos/*.proto', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});

const directories = processArgs();
execute(directories);