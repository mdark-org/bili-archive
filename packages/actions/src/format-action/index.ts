import * as core from "@actions/core";
import {format} from "../shared/format.js";

const input = core.getInput("variable");
const template = core.getInput("template")
const sanitizeInput = core.getInput("sanitize") || 'false'
const data = JSON.parse(input)
let sanitize =  sanitizeInput == 'true'

core.setOutput('result', format(template, data, sanitize))
