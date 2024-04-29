import express, { Application, Request, Response, NextFunction, Router } from 'express';
import http from 'http';
import Express from './Express';

const port: number = 3000


  export interface FormattedResponse<ResponseData> extends Response<{ success: boolean, data: ResponseData }>{
      status(arg0: number):any;

  }

class App {
    private server: http.Server
    private port: number
    public router: any;
    public app: any;
    constructor(_port: number) {
        this.port = _port
        this.app = express();
        this.router = Router();
        this.server = new http.Server(this.app.use(this.router));

    }

    // Loads your Server
    public loadServer(): void {
        // Log.info('Server :: Booting @ Master...');

        Express.init();
    }
    public Start():void {

        this.router.route('/').get( function(req: Request<any, any, { email: string, password: string,}, any, any>, 
            res: FormattedResponse<string>): void {
            console.log('req: Request, res: Response');
            // res.json({ test: 'Hello World!!!' });
            res.status(200).send({success: false, data: "Token Missing"})
           
        });

        this.app.use('/api', this.router);
        

        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`)
        })
    }
}

// new App(port).Start()

export default new App(port);