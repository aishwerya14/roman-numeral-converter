const fs = require("fs");
const path = require("path");

jest.spyOn(console, "info").mockImplementation(() => {});
jest.spyOn(console, "error").mockImplementation(() => {});


const logger = require("../utils/logger");

describe("Logger Module", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("logger.info logs correct message to console", () => {
    logger.info("Test info message");
    expect(console.info).toHaveBeenCalledTimes(1);


    const logText = console.info.mock.calls[0][0];
    expect(logText).toMatch(/\[INFO\] Test info message$/);
  });

  test("logger.error logs correct message to console", () => {
    logger.error("Test error message");
    expect(console.error).toHaveBeenCalledTimes(1);

    
    const logText = console.error.mock.calls[0][0];
    expect(logText).toMatch(/\[ERROR\] Test error message$/);
  });

  test("Logs directory and log files are created", () => {
    logger.info("Test file creation log");

    const logDirectory = path.join(process.cwd(), "logs");
    expect(fs.existsSync(logDirectory)).toBe(true);
    expect(fs.existsSync(path.join(logDirectory, "app.log"))).toBe(true);
    expect(fs.existsSync(path.join(logDirectory, "error.log"))).toBe(true);
    expect(fs.existsSync(path.join(logDirectory, "combined.log"))).toBe(true);
  });
});
