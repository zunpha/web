import styles from './styles.module.scss';
import { DownloadButton, Footer, Header } from '../../components';
import mainTitle from '../../assets/mainTitle.svg';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import mockups from '../../assets/mockups.svg';

function Index() {
	return (
		<>
			<Header />
			<div className={ styles.container }>
				<div className={ styles.description }>
					<img src={ mainTitle } />
					<h3>
						전자기기만을 위한 중고거래 플랫폼, 전파에서
						<br />
						합리적으로 거래하세요.
					</h3>
					<div className={ styles.downloadButtons }>
						<DownloadButton type={ 'apple' } />
						<DownloadButton type={ 'google' } />
					</div>
				</div>
				<div className={ styles.mockups }>
					<img src={ mockups } />
				</div>
			</div>
			<Footer />
			<ToastContainer />
		</>
	);
}

export default Index;
