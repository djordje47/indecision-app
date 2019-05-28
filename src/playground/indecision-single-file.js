// Bind example
// const obj = {
//   name: 'Djole',
//   getName() {
//     return this.name;
//   }
// };

// const getName = obj.getName.bind({ name: 'Test' });

// console.log(getName());
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: [],
      title: 'Indecision Application',
      subtitle: 'Put your life in hands of computer! :D'
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('data');
      const options = JSON.parse(json);

      if (json) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('data', json);
    }
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid option!';
    } else if (this.state.options.indexOf(option) > -1) {
      return `This option: "${option}" already exists!`;
    }

    this.setState((prevState) => {
      return {
        options: [...prevState.options, option]
      };
    });
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((currentOption) => {
          return optionToRemove !== currentOption;
        })
      };
    });
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    alert(option);
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickedOption={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption addOptionHandler={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

// Functional stateless component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle ? <h2>{props.subtitle}</h2> : ''}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// Functional stateless component
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePickedOption} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

// Functional stateless component
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add some options to get started!</p>}
      <ul>
        {props.options.map((option, index) => (
          <Option
            key={index}
            index={index}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ul>
    </div>
  );
};

// Functional stateless component
const Option = (props) => {
  return (
    <div>
      <li key={props.index}>{props.optionText}</li>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove Item
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    const error = this.props.addOptionHandler(option);

    this.setState(() => {
      return {
        error
      };
    });

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>AddOption</button>
        </form>
      </div>
    );
  }
}

const User = () => {
  return (
    <div>
      <p>Name: </p>
      <p>Age: </p>
    </div>
  );
};

ReactDOM.render(
  <IndecisionApp options={['NodeJS', 'React', 'Laravel']} />,
  document.getElementById('app')
);
