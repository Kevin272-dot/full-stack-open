const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
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
      <Part part={[props.parts[0].name, props.parts[0].exercises]} />
      <Part part={[props.parts[1].name, props.parts[1].exercises]} />
      <Part part={[props.parts[2].name, props.parts[2].exercises]} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.total[0].exercises +
          props.total[1].exercises +
          props.total[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Uisng props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default App;
