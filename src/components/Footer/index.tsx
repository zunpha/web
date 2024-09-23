import styles from './styles.module.scss';

export default function Index() {
	return (
		<footer>
			<h1 className={ styles.company }>Zunpha</h1>
			<div className={ styles.business }>
				<p>사업 미등록번호 : 123-45-67890</p>
				<div style={ {
					width: '1px',
					height: '14px',
					backgroundColor: '#B4B4C8',
				} }></div>
				<p>주소 : 없음</p>
			</div>
		</footer>
	);
}
