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
        console.log(anime)
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
                            <h1>{anime.attributes.canonicalTitle}</h1>
                            <div style={{ display: 'flex' }}>
                                <div style={{ justifyContent: 'flex-end' }}>

                                    <div>
                                        <i class="fas fa-calendar-alt"></i>
                                        Start Date: {anime.attributes.startDate}
                                    </div>

                                    <div>
                                        <i class="fas fa-calendar-alt"></i>
                                        End Date: {anime.attributes.endDate}</div>
                                </div>

                            </div>


                            <div style={{ textAlign: 'left' }}>
                                {anime.attributes.synopsis}
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default AnimeDetail;
