import pino from 'pino';

// modify  path to make it diary
const currentDate = new Date().toISOString().slice(0,10);
const basePath = `${process.cwd()}/logs/${currentDate}-info.log`;
        
const streams = [
    { stream : process.stdout },
    { stream : pino.destination(basePath)}
]
const traceLogger = pino({level: 'info'}, pino.multistream(streams));

export default traceLogger;