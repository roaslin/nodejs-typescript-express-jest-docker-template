
const app: Express = express();



app.use(cors()).use(express.json()).options('*', cors());

app.post('/hello', async () => {
    return "hello world";
});

app.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const created = req.query.created as CreatedSorting;
    try {
        const result = await usersService.getAll(created);

        const dtos = result.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                creationDate: user.creationDate,
            };
        });

        res.send({ users: dtos }).status(200);
    } catch (error) {
        next(error);
    }
});

// ports
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const port = PORT || 3111;
const host = HOST || 'localhost';

app.listen(port, () => {
    console.log(`[server]: Server is running at http://${host}:${port}`);
});

export default app;