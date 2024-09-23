import styles from './styles.module.scss';
import apple from '../../assets/apple.svg';
import google from '../../assets/google.svg';

type Type = 'apple' | 'google';

interface Props {
	type: Type;
}

export default function Index({
	                              type,
                              }: Props) {
	return (
		<div className={ styles.container }>
			{
				type === 'apple' ? (
					<img src={ apple } alt={ 'Apple' } />
				) : (
					<img src={ google } alt={ 'Google' } />
				)
			}
			{
				type === 'apple' ? (
					<p>App Store</p>
				) : (
					<p>Play Store</p>
				)
			}
		</div>
	);
}
