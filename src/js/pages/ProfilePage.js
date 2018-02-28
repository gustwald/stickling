// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import CurrentUser from '../components/CurrentUser/CurrentUser';
// import { getCurrentUser } from '../Selector';
// import styles from './ProfilePage.scss';
// import herotest from '../../../assets/hero-test.jpg';
// import gurt from '../../../assets/gurt.png';

// class ProfilePage extends Component {
//   render() {
//     return (
//       <div className={styles.container}>
//         <div className={styles.hero} style={{ backgroundImage: `url(${herotest})` }} />
//         <div className={styles.mainContent}>
//           <div className={styles.profilePic} style={{ backgroundImage: `url(${gurt})` }} />
//           <div className={styles.profileInfo}>
//             <h1>{this.props.currentUser.first + ' ' + this.props.currentUser.last}</h1>
//             <h3>{this.props.currentUser.email}</h3>
//           </div>
//           <div className={styles.adContainer}>
//             <div className={styles.ad} />
//             <div className={styles.ad} />
//             <div className={styles.ad} />
//             <div className={styles.ad} />
//             <div className={styles.ad} />
//             <div className={styles.ad} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   currentUser: getCurrentUser(state)
// });

// export default connect(mapStateToProps)(ProfilePage);

import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
import styles from './Profilepage.scss';

class ProfilePage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <Profile userId={this.props.params.userId} />
      </div>
    );
  }
}

export default ProfilePage;
