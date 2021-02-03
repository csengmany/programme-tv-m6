import "./App.css";
import Program from "./components/Program";
import Header from "./Header";
import ProgramList from "./assets/program.json";

function App() {
    return (
        <div className="App">
            <Header />
            {ProgramList.map((elem, index) => {
                return (
                    <Program
                        key={index}
                        time={elem.time}
                        image={elem.image}
                        title={elem.title}
                        type={elem.type}
                        duration={elem.duration}
                        isUnseen={elem.isUnseen}
                        direct={elem.direct}
                    />
                );
            })}
        </div>
    );
}

export default App;
