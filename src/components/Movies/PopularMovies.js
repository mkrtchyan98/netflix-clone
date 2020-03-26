import React from 'react';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { generateMedia } from 'styled-media-query';
import {
  getAPIGenres,
  getAPIPopularMovies
} from '../../redux-store/ActionCreators';



class PopularMovies extends React.Component {
  fetchMorePopularMovies = this.fetchMorePopularMovies.bind(this);

  fetchMorePopularMovies() {
    this.props.getAPIPopularMovies(this.props.page);
  }

  componentDidMount() {
    if (this.props.allGenres.length) return;
    this.fetchMorePopularMovies();
    this.props.getAPIGenres();
  }

  render() {
    if (!this.props.allGenres.length) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div className="content">
          <Header>
            <h1>Popular Movies</h1>
          </Header>
          <InfiniteScroll
            dataLength={this.props.popularMovies.length}
            next={this.fetchMorePopularMovies}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            <Gallery>
              {this.props.popularMovies
                .map(movie => (
                  <MovieCard
                    key={movie.id}
                    allGenres={this.props.allGenres}
                    movie={movie}
                  />
                ))}
            </Gallery>
          </InfiniteScroll>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    allGenres: state.allGenres,
    popularMovies: state.popularMovies,
    page: state.page
  };
};
const mapDispatchToProps = dispatch => ({

  getAPIGenres() {
    dispatch(getAPIGenres());
  },
  getAPIPopularMovies(page) {
    dispatch(getAPIPopularMovies(page));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovies);

const customMedia = generateMedia({
  smtablet:'740px'
})

const Gallery = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  .back-btn {
  float:right;
  padding:7px 17px;
  font-weight: 400;
  line-height:normal;
  border-radius:0.1875rem;
  font-size: 1rem;
  background: var(--main-red);
  translate: transform(-50%,-50%);
  cursor:pointer;
  transition:background 0.2s ease-in;
  margin-top:-2px;
  &:hover {
 background: var(--main-red-hover);
  }
}
`;
const Header = styled.header`
   h1 {
    font-size: 50px;
    color: red;
    text-align:center;
     ${customMedia.lessThan('smtablet')`
font-size:25px;

  `}
  }
`;
