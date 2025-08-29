import { Title } from '../features/components/Title/Title';
import { Todos } from '../Todos/Todos';
import './App.css';

function App() {
    return (
        <div className="App">
            <Title classNames="title-h1">TODOS</Title>

            <Todos />
        </div>
    );
}

export default App;
