import {
	HTMLHead,
	Heading,
	Container,
	Link,
	Text,
	Bold,
	Italic,
	Break,
	List,
	Button,
	ListItem,
} from '../components';
import Image from '../components/Image/Image';

export default function HomePage() {
	return (
		<>
			<HTMLHead title="Ben Ferch" />
			<Link type="scroll" target="#a123" underline>
				Hello World
			</Link>
			<Container id="a123">
				<Heading vertical type="h1">
					Hello World
				</Heading>
				<Text type="lowlight">123</Text>
				<Bold>bold</Bold>
				<Break />
				<Italic>italic</Italic>
				<Button link type="scroll" target="#a123">
					123
				</Button>
				<List type="unordered">
					<ListItem>1238</ListItem>
				</List>
				<Image src={require('../assets/images/logo.png')}></Image>
			</Container>
		</>
	);
}