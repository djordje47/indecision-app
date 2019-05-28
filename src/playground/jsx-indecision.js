const app = {
  title: 'Indecision App',
  subtitle: 'App that creates decisions for you! Move your lazy ass! :)',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderer();
};

const getSubtitle = (subtitle) => {
  return subtitle ? <p>{subtitle}</p> : undefined;
};

const getOptions = (options) => {
  return options.length > 0
    ? 'There are some options'
    : 'No options specified!';
};

const reset = () => {
  app.options = [];
  renderer();
};
const makeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const option = app.options[random];
  alert(option);
};
const renderer = () => {
  const template = (
    <div className='app-wrapper'>
      <h1>{app.title}</h1>
      {getSubtitle(app.subtitle)}
      <p>{getOptions(app.options)}</p>
      <button
        disabled={app.options.length === 0 ? true : false}
        onClick={makeDecision}
      >
        What should I do?
      </button>
      <button onClick={reset}>Reset</button>
      <ul>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ul>

      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );
  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

renderer();
