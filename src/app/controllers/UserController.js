import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string()
                .required()
                .min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const userExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const { id, name, email, provider } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
            provider,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string(),
            password_old: Yup.string().min(6),
            password: Yup.string()
                .min(6)
                .when('password_old', (password_old, field) =>
                    password_old ? field.required() : field
                ),
            password_confirm: Yup.string().when('password', (password, field) =>
                password ? field.required().oneOf([Yup.ref('password')]) : field
            ),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { email, password_old } = req.body;

        const user = await User.findByPk(req.userId);

        if (email && email !== user.email) {
            const userExists = await User.findOne({
                where: { email: req.body.email },
            });

            if (userExists) {
                return res.status(400).json({ error: 'User already exists' });
            }
        }

        if (password_old && !(await user.checkPassword(password_old))) {
            return res.status(400).json({ error: 'Password does not match' });
        }

        const { id, name, provider, password } = await user.update(req.body);

        return res.json({ id, name, email, provider, password });
    }
}

export default new UserController();
