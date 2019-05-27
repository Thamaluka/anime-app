import React from 'react';
import './AnimeDetail.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AnimeService from '../../services/AnimeService';

class AnimeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anime: null
        };
    }

    async componentWillMount() {
        const id = parseInt(this.props.match.params.id);
        const anime = await AnimeService.getAnimeById(id);
        this.setState({ anime: anime.data })

    }

    render() {
        const anime = this.state.anime;
        return (
            this.state.anime !== null &&
            <div style={{ color: 'white' }}>
                <Card style={{ margin: 20 }}>
                    <CardActionArea>
                        <CardMedia
                            style={{ height: 300, margin: 20 }}
                            image={anime.attributes.posterImage.original}
                        />
                        <CardContent>

                            <div style={{ display: 'flex' }}>
                                <div style={{ flexDirection: 'column', width: '85%' }}>
                                    <h1>{anime.attributes.canonicalTitle}</h1>
                                    <div style={{ textAlign: 'left' }}>
                                        {anime.attributes.synopsis}
                                    </div>

                                </div>

                                <div style={{ flexDirection: 'column' }}>
                                    <div>
                                        <div className={'Details'}>
                                            <i className="fas fa-calendar-alt DateIcon"></i>
                                            Start at: {anime.attributes.startDate}
                                        </div>

                                        <div className={'Details'}>
                                            <i className="fas fa-calendar-alt DateIcon"></i>
                                            End at: {anime.attributes.endDate}
                                        </div>
                                        <div className={'Details'}>
                                            <i className="fas fa-star StarIcon"></i>
                                            Average Rating: {anime.attributes.averageRating}
                                        </div>
                                        <div className={'Details'}>
                                            Status: {anime.attributes.status}
                                        </div>


                                    </div>


                                </div>

                            </div>


                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default AnimeDetail;
