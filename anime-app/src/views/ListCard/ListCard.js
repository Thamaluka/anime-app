import React from 'react';
import './ListCard.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AnimeCard from '../../components/AnimeCard/AnimeCard';
import AnimeService from '../../services/AnimeService';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';

class ListCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animeList: []
    };
  }


  async componentDidMount() {
    this.getData();
  }

  async getData(){
    const { data } = await AnimeService.getAllAnimes();
    this.setState({ animeList: data.data })
  }

  async searchByTerm(text) {
    if (text.length > 3) {
      const newList = await AnimeService.getAnimeFiterByTerm(text);
      this.setState({ animeList: newList.data })
    }else if(text.length === 0){
      this.getData();
    }
  }

  render() {
    return (
      this.state.animeList.length > 0 ?
        <div>
          <div style={{ marginRight: 10, display: 'flex', justifyContent: 'center', backgroundColor: 'white', margin: 10, borderRadius: 35 , alignItems:'center' }}>
            <div style={{fontSize:25}}>
               <i class="fas fa-search"></i>
            </div>
         
            <TextField
              id="standard-full-width"
              style={{ margin: 10, backgroundColor: 'white', width: 800, color: 'black' }}
              placeholder="Find your favorite anime ..."
              onChange={(event) => { this.searchByTerm(event.target.value) }}
            />
          </div>

          <GridList cols={3}>
            {this.state.animeList.map(anim => {
              const tlt = anim.attributes.titles.en_jp != null ? anim.attributes.titles.en_jp : anim.attributes.abbreviatedTitles[0];
              return (
                <GridListTile key={anim.id}>
                  <AnimeCard
                    id={anim.id}
                    title={tlt}
                    image={anim.attributes.posterImage.original}
                  >
                  </AnimeCard>
                </GridListTile>
              );
            })}
          </GridList>
        </div>
        :
        <div className={"Loading"}>
          <CircularProgress color={'secondary'} />
        </div>

    )
  }
}
export default ListCard;
