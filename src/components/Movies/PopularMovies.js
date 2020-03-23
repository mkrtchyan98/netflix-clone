import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import {
  getAPIPopularMovies
} from '../../redux-store/ActionCreators';

const Gallery = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
const Header = styled.header`
  & h1 {
    font-size: 50px;
    color: darkblue;
  }
  text-align: center;
  font-family: 'Inconsolata', monospace;
  margin: 20px auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

class PopularMovies extends React.Component {

  componentDidMount() {
    this.props.getAPIPopularMovies();
  }

  render() {
    
      return (
        <div className="content">
          <Header>
            <Link to="/watchlist">Watch list</Link>
            <h1>Popular Movies</h1>
          </Header>
          <InfiniteScroll
            dataLength={this.props.popularMovies.length}
            next={this.fetchMorePopularMovies}
            hasMore={true}
            //loader={<h4>Loading...</h4>}
          >
            <Gallery>
              {this.props.popularMovies
                .filter(movie =>
                  movie.title
                    .toUpperCase()
                  
                )
                .map(movie => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                  />
                ))}
            </Gallery>
          </InfiniteScroll>
        </div>
      );
    
  }
}
const mapStateToProps = state => {
  return {
    popularMovies: state.moviesList,
  };
};
const mapDispatchToProps = dispatch => ({

  getAPIPopularMovies() {
    dispatch(getAPIPopularMovies());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);