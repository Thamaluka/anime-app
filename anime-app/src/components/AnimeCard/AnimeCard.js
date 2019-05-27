import React from 'react';
import './AnimeCard.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';

class AnimeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { title, image, id } = this.props;

    return (
      <div className="Container">
        <Card >
          <Link to={`/anime/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <CardActionArea>
              <CardMedia
                style={{ height: 120 }}
                image={image}
              />
              <CardContent>
                <div className="Title">
                  {title}
                </div>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </div>
    );
  }
}

export default AnimeCard;




