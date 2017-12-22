import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class ResultsScreen extends Component {
  state = {
    filter: 'worst',
  };

  renderTableBody = filter => {
    let { beers } = this.props;
    let newBeersArray = beers.slice(0);

    let sortedBeersArray = newBeersArray.sort(function(a, b) {
      if (filter === 'worst') {
        return parseFloat(b.worstVotes) - parseFloat(a.worstVotes);
      } else {
        return parseFloat(b.bestVotes) - parseFloat(a.bestVotes);
      }
    });

    return (sortedBeersArray || []).map(beer => {
      return (
        <TableRow key={beer.beerId}>
          <TableRowColumn style={{ width: '8.5em' }}>
            {beer.name}
          </TableRowColumn>
          <TableRowColumn>{beer.worstVotes}</TableRowColumn>
          <TableRowColumn>{beer.bestVotes}</TableRowColumn>
        </TableRow>
      );
    });
  };

  changeFilter = filterChoice => {
    this.setState((prevState, props) => {
      return { filter: filterChoice };
    });
  };

  render() {
    return (
      <div>
        <Table fixedHeader={true}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn style={{ width: '5em' }}>
                Beer Name
              </TableHeaderColumn>
              <TableHeaderColumn>
                <FlatButton
                  label="Worst"
                  onClick={() => this.changeFilter('worst')}
                />
              </TableHeaderColumn>
              <TableHeaderColumn>
                <FlatButton
                  label="Best"
                  onClick={() => this.changeFilter('best')}
                />
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderTableBody(this.state.filter)}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default ResultsScreen;
