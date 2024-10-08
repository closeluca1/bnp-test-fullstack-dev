/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */

import { useForm } from 'react-hook-form';
import styles from '@/styles/formulario.module.css';

interface IFormInput {
	name: string;
	email: string;
};


export default function Form() {

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IFormInput>();

	const onSubmit = async (data: IFormInput) => {
		try {
			const response = await fetch('/api/users/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});


			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message);
			};

			const result = await response.json();
			console.log('Usuário criado com sucesso:', result);
		} catch (error) {
			console.error('Erro ao enviar o formulário:', error);
		};
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Name"
						{...register('name', { required: 'O nome é obrigatório' })}
					/>
					{errors.name && <span>{errors.name.message}</span>}

					<input
						type="email"
						placeholder="E-mail"
						{...register('email', {
							required: 'O e-mail é obrigatório',
							pattern: {
								value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
								message: 'E-mail inválido',
							},
						})}
					/>
					{errors.email && <span>{errors.email.message}</span>}

					<button disabled={isSubmitting} type="submit" data-type="confirm">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};
