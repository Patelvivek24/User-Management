import { Container } from 'react-bootstrap';
import styles from './ExampleComponent.module.scss';

interface ExampleComponentProps {
  title?: string;
}

export default function ExampleComponent({ title = 'Example Component' }: ExampleComponentProps) {
  return (
    <Container>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>
        This is an example component demonstrating the component-wise folder structure.
      </p>
    </Container>
  );
}

