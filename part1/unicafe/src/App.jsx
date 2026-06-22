import { useState } from "react";

const Display = (props) => (
  <div>
    <h1>{props.text}</h1>
  </div>
);

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{text === "positive" ? `${value} %` : value}</td>
    </tr>
  );
};

const Statistics = ({ data }) => {
  const total = data.good + data.neutral + data.bad;
  if (total === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={data.good} />
          <StatisticLine text="neutral" value={data.neutral} />
          <StatisticLine text="bad" value={data.bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine
            text="average"
            value={(data.good - data.bad) / total}
          />
          <StatisticLine text="positive" value={(data.good / total) * 100} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const values = { good, neutral, bad };

  return (
    <div>
      <Display text="give feedback" />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Display text="Statistics" />
      <Statistics data={values} />
    </div>
  );
};

export default App;
