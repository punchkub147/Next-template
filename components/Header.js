import Link from 'next/link';

export default props => {
	return (
		<div>
			<ul>
				<li>
					<Link href="/">
						<a>HOME</a>
					</Link>
				</li>
				<li>
					<Link href="/todos">
						<a>TODOS</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};
