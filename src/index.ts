import {execute, processArgs} from "./Generator";

const directories = processArgs();
execute(directories);