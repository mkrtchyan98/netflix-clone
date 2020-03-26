import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getMovieDetails } from '../../redux-store/ActionCreators';
import moment from 'moment';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  smtablet:'740px'
})

const Container = styled.div`
  display:flex;
  flex-direction:row;
  margin:0;
  line-height:1.5;
    ${customMedia.lessThan('smtablet')`
    flex-direction:column
  `}
`;
const Item = styled.div`
flex:1 50%;
`
const Details = styled.div`
display:flex;
flex-wrap:wrap;
`

const Poster = styled.div`
max-width:300px;
align-self:center;
flex:1;
margin:10px 40px;
`
const Info = styled.div`
flex:1;
margin:10px 40px;`


const Img = styled.img`
border-radius:40px;
max-width:400px;
max-height:400px;
 ${customMedia.lessThan('smtablet')`
max-width:300px;
max-height:300px;  `}
`

const H2 = styled.h2`
color:red;
font-size:25px;
 ${customMedia.lessThan('smtablet')`
font-size:20px;
  `}
`
const H4 = styled.h4`
color:red;
font-size:15px;
`
const P = styled.p`
font-size:16px;
 ${customMedia.lessThan('smtablet')`
font-size:15px;
  `}
`
class MoviePage extends React.Component {
  componentDidMount() {
    this.props.getMovieDetails();
  }
  render() {
    if (Object.getOwnPropertyNames(this.props.movieDetails).length === 0) {
      return <h1>Loading...</h1>;
    } else {              
              return (
     <Container>
        <Poster >
  <Img
                src={`https://image.tmdb.org/t/p/w300/${
                  this.props.movieDetails.poster_path
                }`}
                alt={`${this.props.movieDetails.title} poster`}
              />        </Poster>
        <Info >
          <H2 >
         {this.props.movieDetails.title}
          </H2>
          <P >{this.props.movieDetails.overview}</P>
          <Details >
            <Item >
              <H4>Original Release</H4>
              <P>
                {this.props.movieDetails.release_date
                  ? moment(this.props.movieDetails.release_date).format('MMMM D, YYYY')
                  : 'N/A'}
              </P>
            </Item>
            <Item >
              <H4>Running Time</H4>
              <P>
                {this.props.movieDetails.runtime === 0 || !this.props.movieDetails.runtime
                  ? 'N/A'
                  : `${this.props.movieDetails.runtime} mins`}
              </P>
            </Item>
            <Item >
              <H4>Budget</H4>
              {this.props.movieDetails.budget === 0 || !this.props.movieDetails.budget
                ? 'N/A'
                : `$${Number(this.props.movieDetails.budget).toLocaleString()}`}
            </Item>
            <Item >
              <H4>Revenue</H4>
              <P>
                {this.props.movieDetails.revenue === 0 || !this.props.movieDetails.revenue
                  ? 'N/A'
                  : `$${Number(this.props.movieDetails.revenue).toLocaleString()}`}
              </P>
            </Item>
            <Item >
              <H4>Voting Average</H4>
              <P>{this.props.movieDetails.vote_average * 10}%</P>
            </Item>
            <Item >
              <H4>Genres</H4>
              <div >
              <P>
                {this.props.movieDetails.genres
                  ? this.props.movieDetails.genres.map(genre => (
                      genre.name
                    )).join(',')
                  : 'N/A'}
                  </P>
              </div>
            </Item>
          </Details>
        </Info>
      </Container>
    );
  }
}
}











const mapStateToProps = state => ({
  movieDetails: state.movieDetails
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  getMovieDetails() {
    dispatch(getMovieDetails(ownProps.id));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePage);
