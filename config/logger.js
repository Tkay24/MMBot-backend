const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}
const errorLogDir = path.join(logsDir, 'error');
const activityLogDir = path.join(logsDir, 'activity');
if (!fs.existsSync(errorLogDir)) {
    fs.mkdirSync(errorLogDir);
}
if (!fs.existsSync(activityLogDir)) {
    fs.mkdirSync(activityLogDir);
}

const logConfiguration = {
    format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(errorLogDir, 'error.log'), level: 'error' }),
        new transports.File({ filename: path.join(activityLogDir, 'activity.log'), level: 'info' })
    ],
    exceptionHandlers: [
        new transports.File({ filename: path.join(errorLogDir, 'exceptions.log') })
    ],
    exitOnError: false // Continue logging after unhandled exceptions
};

const logger = createLogger(logConfiguration);

module.exports = logger;
