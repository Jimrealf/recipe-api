import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';

const app: Express = express();
app.use(express.json());

const swaggerDoc = yaml.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

export default app;