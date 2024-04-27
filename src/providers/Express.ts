import http from 'http';
import express, { Request, Response, NextFunction, Router } from 'express';
import Routes from './Routes';


export interface IRequest extends Request {
	flash(message: string, callback: any): any;

	logIn(user: any, callback: any): any;
	user(): any;
	logout(): void;
}

export interface IResponse extends Response {
    [x: string]: any;
	redirect(arg0: any): unknown;
}

class Express {
	/**
	 * Create the express object
	 */
    public expressApp: express.Application;
    public router = Router();
    private server: http.Server
    private port: number

    /**
	 * Initializes the express server
	 */
    constructor(_port: number) {
        this.port = _port
        this.expressApp = express();

        this.server = new http.Server(this.expressApp)
        this.router = Router();
        // this.mountDotEnv();
        // this.mountMiddlewares();
        // this.mountRoutes();

    }



    // private mountDotEnv (): void {
    // 	this.express = Locals.init(this.express);
    // }

	/**
	 * Mounts all the defined middlewares
	 */
    // private mountMiddlewares (): void {
    // 	this.express = Bootstrap.init(this.express);
    // }

	/**
	 * Mounts all the defined routes
	 */
    // private mountRoutes (): void {
    // 	// this.express = Routes.mountWeb(this.express);
    // 	this.expressApp = Routes.mountApi(this.server);
    // }

	/**
	 * Starts the express server
	 */
    public init(): any {
        const port: number = 3000;

        // Registering Exception / Error Handlers
        // this.express.use(ExceptionHandler.logErrors);
        // this.express.use(ExceptionHandler.clientErrorHandler);
        // this.express.use(ExceptionHandler.errorHandler);
        // this.express = ExceptionHandler.notFoundHandler(this.express);

        // Start the server on the specified port
        this.server.listen(port, () => {
            return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
        }).on('error', (_error: { message: any; }) => {
            return console.log('Error: ', _error.message);
        });

        this.router.get('/ab', (req: Request, res: Response) => {
            console.log('ab:')
            return res.json({title: 'Home'})
        })
	}
}

/** Export the express module */
export default new Express(3000);