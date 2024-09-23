import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Index() {
	const navigate = useNavigate();

	return (
		<header>
			<img src={ logo } onClick={ () => {
				navigate('/');
			} } />
			<div className={ styles.buttons }>
				<button>다운로드</button>
				<button onClick={ () => {
					toast('서비스 준비 중입니다.', {
						position: 'bottom-right',
						type: 'warning',
						delay: 1000,
					});
				} }>문의하기
				</button>
			</div>
		</header>
	);
}
