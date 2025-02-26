const log = require("loglevel");
const fs = require("fs");
const path = require("path");

const logDirectory = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

const errorLogStream = fs.createWriteStream(path.join(logDirectory, "error.log"), { flags: "a" });
const appLogStream = fs.createWriteStream(path.join(logDirectory, "app.log"), { flags: "a" });
const combinedLogStream = fs.createWriteStream(path.join(logDirectory, "combined.log"), { flags: "a" });

log.setLevel("info");

log.methodFactory = function (methodName, logLevel, loggerName) {
  const rawMethod = console[methodName] || console.log;
  return function (...messages) {
    const logMessage = `[${new Date().toISOString()}] [${methodName.toUpperCase()}] ${messages.join(" ")}`;
    rawMethod(logMessage);


    if (methodName === "error") {
      errorLogStream.write(logMessage + "\n");
    } else {
      appLogStream.write(logMessage + "\n");
    }
    combinedLogStream.write(logMessage + "\n"); 
  };
};

log.setLevel(log.levels.INFO);

module.exports = log;
