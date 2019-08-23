require('dotenv').config();
const express   = require('express');
const app       = express();
const helmet    = require('helmet');
const PORT      = process.env.PORT || 3002;
const CORS      = require('cors');
const member    = require('./member_router');
// const rateLimit = require('express-rate-limit');
const { fork }  = require('child_process');
const CPUs      = require('os').cpus();
const cluster   = require('cluster');


// if(cluster.isMaster){
//     console.log("This is the master process ", process.pid);
//     CPUs.forEach((cpu, i) => cluster.fork([`300${i}`]));
// }
// else {
app.use(helmet());
app.use(CORS());

// // LIMIT THE RATE OF REQUEST PER IP ADDRESS
// const apiLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15mins
//     max: 100 //maximum request per IP
// })

// app.use(apiLimiter);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/members', member)


// ====== ERROR HANDLERS =======
app.use((req, res, next) => {
    let err = new Error("NOT FOUND");
    err.status = 400;
    return next(err)
});

app.use((err, req, res, next) => {
    res.status( err.status || 500).json({
        message: err.message || "SOMETHING WENT WRONG"
    });
});

app.listen(PORT, () => console.log(`MEMBER SERVICE CONNECTED TO PORT ${PORT}`))
// }

