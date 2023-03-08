import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: false,
      deck: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const cardAd = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((currentState) => ({
      deck: [cardAd, ...currentState.deck],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    }));
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      deck,
    } = this.state;
    const ZERO = 0;
    const MAXVALUE = 90;
    const SUMVALUE = 210;

    const isSaveButtonDisabled = cardName && cardDescription && cardImage && cardRare
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= SUMVALUE
      && Number(cardAttr1) <= MAXVALUE
      && Number(cardAttr2) <= MAXVALUE
      && Number(cardAttr3) <= MAXVALUE
      && Number(cardAttr1) >= ZERO
      && Number(cardAttr2) >= ZERO
      && Number(cardAttr3) >= ZERO;
    const hasTrunfo = deck.some((decks) => decks.cardTrunfo);

    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ !isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          deck.map((dec) => (
            <Card
              key={ dec.cardName }
              cardName={ dec.cardName }
              cardDescription={ dec.cardDescription }
              cardAttr1={ dec.cardAttr1 }
              cardAttr2={ dec.cardAttr2 }
              cardAttr3={ dec.cardAttr3 }
              cardImage={ dec.cardImage }
              cardRare={ dec.cardRare }
              cardTrunfo={ dec.cardTrunfo }
            />
          ))
        }
      </>
    );
  }
}

export default App;
