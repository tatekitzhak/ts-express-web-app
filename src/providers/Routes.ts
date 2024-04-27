
import { Application } from 'express';

// import webRouter from './../routes/Web';
// import apiRouter from './../routes/Api';

class Routes {
	// public mountWeb(_express: Application): Application {
	// 	console.info('Routes :: Mounting Web Routes...');

	// 	return _express.use('/', webRouter);
	// }

	public mountApi(_express: Application): any {
		console.info('Routes :: Mounting API Routes...');

        // return _express.use('/abc', apiRouter);
        return;
	}
}

export default new Routes;