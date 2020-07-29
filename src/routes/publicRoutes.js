import { Router } from 'express';
import path from 'path';
const indexRouter = Router();

indexRouter.get('/', (request, response) => {
    console.log(`${__dirname}../../../public/index.html`);
    response.sendFile(path.join(`${__dirname}../../../public/index.html`))
});

export default indexRouter;