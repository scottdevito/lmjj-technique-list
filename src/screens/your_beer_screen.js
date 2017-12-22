import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import YourBeerPreview from '../components/your_beer_preview';

class YourBeerScreen extends Component {
  state = {
    name: '',
    description: '',
    submit: false,
    confirmedSubmit: false,
  };

  renderSubmitButton = () => {
    let { confirmedSubmit } = this.state;

    return this.state.submit ? (
      <RaisedButton
        className="your-beer-submit"
        label={confirmedSubmit ? 'Submitting Beer...' : 'Confirm Submit'}
        backgroundColor="#80e27e"
        onClick={() => this.onAddBeerSubmit()}
        disabled={confirmedSubmit}
      />
    ) : (
      <RaisedButton
        className="your-beer-submit"
        label="Submit Beer"
        primary={true}
        onClick={() => this.confirmSubmit()}
      />
    );
  };

  confirmSubmit = () => {
    this.setState((prevState, props) => {
      return { submit: true };
    });
  };

  onAddBeerSubmit = () => {
    this.props.addNewBeer(this.state, this.props.userDbInfo);

    this.setState((prevState, props) => {
      return { confirmedSubmit: !prevState.confirmedSubmit };
    });
  };

  onAddBeerInputChange = (event, fieldId) => {
    let value = event.target.value;

    this.setState((prevState, props) => {
      return { [fieldId]: value };
    });
  };

  displayBeerInfo = () => {
    let { beers, userDbInfo } = this.props;

    if (beers) {
      return <YourBeerPreview userDbInfo={userDbInfo} beers={beers} />;
    }
  };

  render() {
    return (
      <div className="your-beer-screen">
        {this.props.userDbInfo.beerId != null ? (
          <div className="your-beer-screen-header">
            <h1>Your Submitted Beer:</h1>

            {this.displayBeerInfo()}

            <h2 className="submit-confirm-message">
              You're all set. Enjoy the shit beer!
            </h2>
          </div>
        ) : (
          <div className="your-beer-screen">
            <h2>Add Your Beer</h2>
            <TextField
              hintText="It better be trash"
              floatingLabelText="Enter the name of your beer"
              onChange={event => {
                this.onAddBeerInputChange(event, 'name');
              }}
              value={this.state.name}
            />

            <TextField
              floatingLabelText="Enter a short description"
              onChange={event => {
                this.onAddBeerInputChange(event, 'description');
              }}
              value={this.state.description}
            />
            {this.renderSubmitButton()}
          </div>
        )}
      </div>
    );
  }
}

export default YourBeerScreen;
