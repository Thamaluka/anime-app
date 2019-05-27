import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import ListCard from './views/ListCard/ListCard';
import AnimeDetail from './views/AnimeDetail/AnimeDetail';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Container fixed>
          <Card className="Card" style={{ backgroundColor: 'black' }}>
            <div className="Container">
              <div className="Header">
                <b className="Pres">
                  PRESENTED BY: <b className="TextRed"> THAMIRES GARCIA </b>
                  <a href='https://www.linkedin.com/in/thamires-garcia-b1a23095/'> <i class="fab fa-linkedin-in linked"></i></a>
                  <a href='https://github.com/Thamaluka'><i class="fab fa-github git"></i></a>

                </b>
              </div>
              <div className="Logo">
                <p><img src="https://fontmeme.com/permalink/190525/8dfd9894d6202bac0ead8fddace08ea6.png" alt="comic-fonts" border="0" /></p>
                <img src="https://fontmeme.com/permalink/190525/154a2118ed7c72176a38f6572a8848fb.png" alt="comic-fonts" border="0" />
                <p className="Pres">FIND THE <b className="TextRed">BEST</b> ANIMES AND MANGAS IN THE WORLD HERE</p>
              </div>
            </div>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact={true} component={ListCard} />
                <Route path="/anime/:id" component={AnimeDetail} />
              </Switch>
            </ BrowserRouter>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
