import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>

          <CSSTransitionGroup transitionName="vote" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={post.votes} className="votes-thumbs-up">{post.votes}</span>
          </CSSTransitionGroup>

        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="votes"><FontAwesomeIcon icon="thumbs-up" /> {post.votes}</button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">

							<FontAwesomeIcon icon="comment" />
                {comments[post.code] ? comments[post.code].length : 0 }
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    )
  }
});

export default Photo;
