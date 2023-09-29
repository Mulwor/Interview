Ответы здесь: https://habr.com/ru/articles/534632/

#### 1. Задача на использование useState

У нас есть классовый компонент с состоянием. Каждый раз, когда нажимается кнопка в компоненте, счетчик увеличивается.

```
class Counter extends Component {
    state = {
        count: 0,
    };

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <div>
            <button onClick={this.incrementCount}>Count: {this.state.count}</button>
        </div>
    	);
    }
}
```

#### 2. Задача на использование useState2

Ниже у нас есть классовый компонент. Он содержит код для обновления состояния на основе предыдущего значения состояния.

```
class Counter extends Component {
    state = { count: 0 };

    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
    };

    decrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            };
        });
    };

    render() {
        return (
            <div>
                <strong>Count: {this.state.count}</strong>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
            </div>
        );
    }
}
```

#### 3. Задача на использование useState 3

Здесь у нас есть классовый компонент, который обновляет состояние, используя ввод из формы.

```
export class Profile extends Component {
    state = {
        name: "Backbencher",
        age: 23,
    };

    onNameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    onAgeChange = (e) => {
        this.setState({
            age: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input
                        type="number"
                        value={this.state.age}
                        onChange={this.onAgeChange}
                    />
                    <h2>
                        Name: {this.state.name}, Age: {this.state.age}
                    </h2>
                </form>
            </div>
        );
    }
}
```

#### 4. Задача на использование useEffect
Вот классовый компонент, который печатает Boom в консоли каждый раз, когда он монтируется или обновляется.

```
export class Banner extends Component {
    state = {
        count: 0,
    };

    updateState = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    componentDidMount() {
        console.log("Boom");
    }

    componentDidUpdate() {
        console.log("Boom");
    }

    render() {
        return (
            <div>
                <button onClick={this.updateState}>State: {this.state.count}</button>
            </div>
        );
    }
}

```

#### 5. Задача на использование useEffect2
Понять данный код:

```
function Banner() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("Счетчик обновлен");
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>State: {count}</button>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}
```
Код печатает сообщение «Счетчик обновлен» даже при обновлении значения в текстовом поле. Как мы можем отображать сообщение только при обновлении состояния счетчика?



#### Задача на использование useEffect3
У нас есть классовый компонент, который обновляет время каждую секунду. Он использует componentDidMount() для установки таймера.
```
export class Clock extends Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    render() {
        return <div>{this.state.date.toString()}</div>;
    }
}
```


#### Задача на использование useEffect 4
У нас есть фрагмент кода из классового компонента, который регистрирует и удаляет слушатель событий.

```
componentDidMount() {
    window.addEventListener("mousemove", this.handleMousePosition);
}

componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMousePosition);
}
```


#### Задача на использование useContext
Вот фрагмент кода из компонента Context.Consumer.

```
import { NameContext, AgeContext } from "./ProviderComponent";

export class ConsumerComponent extends Component {
    render() {
        return (
            <NameContext.Consumer>
                {(name) => {
                    return (
                        <AgeContext.Consumer>
                            {(age) => (
                                <div>
                                    Name: {name}, Age: {age}
                                </div>
                            )}
                        </AgeContext.Consumer>
                    );
                }}
            </NameContext.Consumer>
        );
    }
}
```

Перепишите ConsumerComponent, используя хук useContext.