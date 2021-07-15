import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//Stateless with function (NEW WAY)
export const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />      
      <h3>{login}</h3>
      <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
// StateFull Component Style with Class
// class UserItem extends Component {
//   state = {
//     id: "1",
//     login: "mojombo",
//     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
//     html_url: "https://github.com/mojombo",
//   };

//   render() {
//     const { avatar_url, html_url, login } = this.props.user;

//     return (
//       <div className="card text-center">
//         <img
//           src={avatar_url}
//           alt=""
//           className="round-img"
//           style={{ width: "60px" }}
//         />
//         <h3>{login}</h3>
//         <a className="btn btn-dark btn-sm my-1" href={html_url}>
//           More
//         </a>
//       </div>
//     );
//   }
// }
