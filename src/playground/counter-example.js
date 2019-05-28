class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }

  componentDidMount() {
    try {
      const data = localStorage.getItem('count');
      const parsedData = parseInt(JSON.parse(data));
      if (!isNaN(parsedData)) {
        this.setState(() => ({ count: parsedData }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }

  handleAddOne() {
    // this.state.count = ++this.state.count;
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: this.props.count
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
Counter.defaultProps = {
  count: 0
};
ReactDOM.render(<Counter />, document.getElementById('app'));
