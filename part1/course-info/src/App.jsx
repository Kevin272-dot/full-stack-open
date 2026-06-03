const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part.join(" ")}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts.part1} />
      <Part part={props.parts.part2} />
      <Part part={props.parts.part3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exerxises {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = {
    part1: ["Fundamentals of React", 10],
    part2: ["Using props to pass data", 7],
    part3: ["State of a component", 14],
  };
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts.part1[1] + parts.part2[1] + parts.part3[1]} />
    </div>
  );
};

export default App;
