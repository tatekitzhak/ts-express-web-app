import express, { Application, Request, Response, NextFunction, Router } from 'express';
import http from 'http';
import Express from './Express';

const port: number = 3000

class App {
    private server: http.Server
    private port: number
    public router: Router
    public app: any;
    constructor(_port: number) {
        this.port = _port
        this.app = express();
        this.router = Router();
        this.server = new http.Server(this.app)

    }

    // Loads your Server
    public loadServer(): void {
        // Log.info('Server :: Booting @ Master...');

        Express.init();
    }
    public Start() {

        this.app.get('/', (req: Request, res: Response) => {
            console.log('req.useraaa'); // 👈️ use req.user

            res.json({ ab: 'Hello World!' });
        });

        this.router.get('/',function (req: Request, res: Response, next: NextFunction) {
            console.log('req: Request, res: Response');
            res.json({ test: 'Hello World!' });
            next();
        });

        this.app.use('/api', this.router);

        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`)
        })
    }
}

// new App(port).Start()

export default new App(port);