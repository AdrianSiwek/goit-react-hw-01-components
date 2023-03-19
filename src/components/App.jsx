import user from '../data/user.json';
import friends from '../data/friends.json';
import data from '../data/data.json';
// import transaction from '../data/transaction.json';
import Profile from './Profile/Profile'
import Statistic from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';



export const App = () => {
  return (
    <div className='style.container'>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr />
      <Statistic stats={data} />
      <hr />
      <FriendList friends={friends} />
    </div>
  );
};
