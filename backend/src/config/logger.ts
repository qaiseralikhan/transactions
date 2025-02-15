import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true, // Colorful logs for better readability in development
      translateTime: 'yyyy-mm-dd HH:MM:ss', // Timestamp in a readable format
      ignore: 'pid,hostname', // Ignore process ID and hostname in logs
      singleLine: true, // Logs in a single line
      levelFirst: true, // Show the log level first
    },
  },
});

export default logger;
