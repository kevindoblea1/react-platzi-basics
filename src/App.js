import './App.css';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
    
     <TodoCounter />
      
      <TodoSearch />
      
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>  
      </TodoList>
      
      <CreateTodoButton />
      
    </div>
  );
}


export default App;
