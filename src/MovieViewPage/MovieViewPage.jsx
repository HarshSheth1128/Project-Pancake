import React, { Component } from 'react';
import './MovieViewPage.scss';
import MoviePoster from '../assets/BigMoviePoster.png';
import UnlikeIcon from '../assets/Unlike.svg';
import LikesIcon from '../assets/Likes.svg';
import ViewsIcon from '../assets/Views.svg';

class MovieViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movie: 'Star Wars',
      MoviePosterUrl: MoviePoster,
      MovieDuration: '120 min',
      MovieReleaseYear: '(2009)',
      MovieGenres: new Array(12).fill({
        type: 'Action',
      }),
      MovieDescription:
        'Summary... From Lucasfilm comes the first of the Star Wars standalone films, “Rogue One: A Star Wars Story,” an all-new epic adventure.',
      CurrentTab: 'CastAndCrew',
      ActiveTab: 'tab1',
      Views: 100,
      Likes: 120,
      ViewsIconUrl: ViewsIcon,
      LikesIconUrl: LikesIcon,
      UnlikeIconUrl: UnlikeIcon,
      hasLiked: false,
    };
  }

  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };

  render() {
    let MovieViewClass = '';
    let MovieContent = '';
    if (this.props.isOpen) {
      MovieViewClass = 'MovieViewModal';
      MovieContent = 'ModalContentWrapper';
    } else {
      MovieViewClass = 'MovieViewModalClosed';
      MovieContent = 'MovieViewModalClosed';
    }

    return (
      <>
        <div className={MovieViewClass}>
          <div className={MovieContent}>
            <div className="ColumnsContentWrapper">
              <div className="LeftColumnWrapper">
                <img src={this.state.MoviePosterUrl} className="MoviePoster" />
                <div className="IconsWrapper">
                  {this.state.hasLiked && (
                    <img
                      onClick={() =>
                        this.setState(prevState => ({
                          Likes: prevState.Likes - 1,
                          hasLiked: !prevState.hasLiked,
                        }))
                      }
                      src={this.state.LikesIconUrl}
                      className="LikesIcon"
                    />
                  )}
                  {!this.state.hasLiked && (
                    <img
                      onClick={() =>
                        this.setState(prevState => ({
                          Likes: prevState.Likes + 1,
                          hasLiked: !prevState.hasLiked,
                        }))
                      }
                      src={this.state.UnlikeIconUrl}
                      className="LikesIcon"
                    />
                  )}
                  <h3 className="IconsText">{this.state.Likes}</h3>
                  <img src={this.state.ViewsIconUrl} className="ViewsIcon" />
                  <h3 className="IconsText">{this.state.Views}</h3>
                </div>
              </div>
              <div className="RightContentWrapper">
                <div className="HeadingWrapper">
                  <h1 className="MovieTitle">{`${this.state.Movie}   ${this.state.MovieReleaseYear}`}</h1>
                  <h4 className="SecondaryHeadings">
                    {`duration: ${this.state.MovieDuration}`}
                  </h4>
                  <h4 className="CloseText" onClick={this.props.closeMovieView}>
                    Close
                  </h4>
                </div>
                <div className="GenreSection">
                  <div className="GenreContentWrapper">
                    <h1 className="GenreTitle">{'Genre'}</h1>
                    <div className="GenreCategoriesWrapper">
                      {this.state.MovieGenres.map((Genre, i) => (
                        <h2 key={i} className="GenreCategories">
                          {Genre.type}
                        </h2>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="MovieDescriptionText">
                  {this.state.MovieDescription}
                </p>
              </div>
            </div>
            <div className="RowContentWrapper">
              <div>
                <p className="MovieDescriptionText2">
                  {this.state.MovieDescription}
                </p>
              </div>
              <div className="TabsSection">
                <div className="TabContentWrapper">
                  <div className="TabHeadingsWrapper">
                    <h3
                      onClick={() =>
                        this.setState(() => ({
                          ActiveTab: 'tab1',
                        }))
                      }
                      className="TabHeadings"
                    >
                      {'Cast and Crew'}
                    </h3>
                    <h3
                      onClick={() =>
                        this.setState(() => ({
                          ActiveTab: 'tab2',
                        }))
                      }
                      className="TabHeadings"
                    >
                      {'Critiques'}
                    </h3>
                    <h3
                      onClick={() =>
                        this.setState(() => ({
                          ActiveTab: 'tab3',
                        }))
                      }
                      className="TabHeadings"
                    >
                      {'Recommendations'}
                    </h3>
                  </div>
                  <div className="TabBarLine" />
                  {this.state.ActiveTab === 'tab1' && (
                    <p>
                      {
                        ' ........................................................................ .................................................. ...........................................................This is tab 1 info'
                      }
                    </p>
                  )}
                  {this.state.ActiveTab === 'tab2' && (
                    <p>{'........................This is tab 2 info'}</p>
                  )}
                  {this.state.ActiveTab === 'tab3' && (
                    <p>{'........................This is tab 3 info'}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieViewPage;
