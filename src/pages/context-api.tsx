/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import { useState } from 'react';
import styles from '@/styles/context-api.module.css';
import { IToastMessage } from '@/types/toast-message';
import { ToastMessage } from '@/components/ToastMessage';

export default function ContextApi() {
	const [messages, setMessages] = useState<Array<IToastMessage>>([]);

	function addMessage(message: IToastMessage) {
		setMessages((prevMessages) => [...prevMessages, message]);
	};

	function removeMessage(id: string) {
		setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
	};

	function handleSuccessButtonClick() {
		addMessage({
			id: Date.now().toString(),
			message: 'Mensagem de sucesso',
			type: 'success',
		});
	};

	function handleErrorButtonClick() {
		addMessage({
			id: Date.now().toString(),
			message: 'Mensagem de erro',
			type: 'error',
		});
	};

	return (
		<>
			<div className={styles.container}>
				<button type="button" onClick={handleSuccessButtonClick}>
					Disparar mensagem de sucesso
				</button>
				<button type="button" onClick={handleErrorButtonClick}>
					Disparar mensagem de erro
				</button>
			</div>

			<div className={styles['toast-container']}>
				{messages.map((message) => (
					<ToastMessage key={message.id} content={message} onClose={removeMessage} />
				))}
			</div>
		</>
	);
};
