import winston from "winston";

const logger = winston.createLogger({
  level: "info", // this means everthing till here and above this level as we mentioned in the belw at the end of this file

  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }), // this logs will be transported here
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

logger.error("Hello World");
logger.info("Hello World");
