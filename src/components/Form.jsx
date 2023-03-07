import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="cardName">
          Card Name
          <input
            type="text"
            data-testid="name-input"
            id="cardName"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            label
          />
        </label>
        <textarea
          data-testid="description-input"
          id="cardDescription"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr1-input"
          id="cardAttr1"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr2-input"
          id="cardAttr2"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr3-input"
          id="cardAttr3"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          type={ Text }
          data-testid="image-input"
          id="cardImage"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-input"
          id="cardRare"
          name="cardRare"
          value={ cardName }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <input
          type="checkbox"
          data-testid="trunfo-input"
          id="cardTrunfo"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
