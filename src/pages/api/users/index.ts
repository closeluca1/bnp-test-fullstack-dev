/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from 'next/types';
import { IUser } from '@/types/user.d';

const users: IUser[] = [
	{ id: 1, name: 'Arlindo Cruz', email: 'arlindo.c@yahoo.com' },
	{ id: 2, name: 'Ivone Lara', email: 'ivone.l@bol.com' },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		return res.status(200).json(users);
	};

	return res.status(405).json({ message: 'Método não permitido. Use GET.' });
};