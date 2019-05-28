import React from 'react';
// My components
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    title: 'Indecision Application',
    subtitle: 'Put your life in hands of computer! :D'
  };

  /**
   * Remove all set state to empty array
   */
  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  /**
   * Handle click on remove item button
   * Filter through state and remove the one that's clicked
   */
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((currentOption) => {
          return optionToRemove !== currentOption;
        })
      };
    });
  };

  /**
   * Add option to the state
   */
  handleAddOption = (option) => {
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
  };

  /**
   * Handle getting random option
   */
  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    this.setState(() => ({ selectedOption: option }));
  };

  /**
   * Handle selected option clearing
   */
  clearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  /**
   * Pull everything from LS and add to UI
   */
  componentDidMount() {
    try {
      const json = localStorage.getItem('data');
      const options = JSON.parse(json);

      if (json) {
        this.setState(() => ({ options }));
      }
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Compare previous state to current state,
   * if there are differences update LocalStorage
   * @param {Object} prevProps
   * @param {Object} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('data', json);
    }
  }

  /**
   * Render!
   */
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
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}
