import { Title } from '../../features';
import { Todos } from '../../Widjets/Todos/Todos';
import { TodosProvider } from '../store';
import './App.css';

function App() {
    return (
        <div className="App">
            <TodosProvider>
                <Title classNames="title-h1">TODOS</Title>
                <Todos />
            </TodosProvider>
        </div>
    );
}

export default App;
// https://docs.google.com/document/d/1X9zMnAAU9vvEzdYtSEeeram8Kur5o-py5ChKlK5TIa8/edit?pli=1&tab=t.0
