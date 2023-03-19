import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                src={avatar}
                alt={username}
                className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
      );
}
 


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.object.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
};

export default Profile;