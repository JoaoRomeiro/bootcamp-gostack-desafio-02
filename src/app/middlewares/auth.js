import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // console.log(authHeader);

    if (!authHeader) {
        return res.status(400).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        // Atribui o id do usuário logado ao id do usuário na requisição para facilitar a atualização
        req.userId = decoded.id;

        return next();
    } catch (e) {
        return res.status(400).json({ error: 'Token invalid' });
    }
};
