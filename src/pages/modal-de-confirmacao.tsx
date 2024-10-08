/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from 'react';
import Head from 'next/head';

import styles from '@/styles/modal.module.css';
import { ConfirmationModal } from '@/components/confirmationModal';


export default function Home() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);

	const handleOpenModal = () => {
		setModalIsOpen(true);
		setConfirmationMessage(null);
	};

	const handleCloseModal = () => {
		setModalIsOpen(false);
	};

	const handleConfirm = () => {
		setModalIsOpen(false);
		setConfirmationMessage('Ação confirmada com sucesso!');
		console.log('Ação confirmada!');
	};


	return (
		<>
			<main className={styles.container}>
				<Head>
					<title>Home - Modal de Confirmação</title>
				</Head>

				<button type="button" onClick={handleOpenModal}>
					Abrir modal de confirmação
				</button>

				{confirmationMessage && <p className={styles.confirmationMessage}>{confirmationMessage}</p>}

			</main>

			<ConfirmationModal
				isOpen={modalIsOpen}
				onClose={handleCloseModal}
				onConfirm={handleConfirm}
				content={<p>Você tem certeza que deseja realizar esta ação?</p>}
			/>
		</>
	);
}
