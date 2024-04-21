import { useEffect, useState } from "react";
import { UserArr } from "../../assits/users";
import UserCard from "../UserCard/UserCard";
import Search from "../Search/Search";
const LayoutMain = () => {
	const [users, setUsers] = useState(UserArr);
  const [FilterdUsers,SetFilterdUser] = useState(users);
  
  const filter = (q) => {
    let f = users.filter(user => {
      return user.username.includes(q) || user.email.includes(q);
    })
    SetFilterdUser(f);
  }

  useEffect(() => {

  }, [FilterdUsers])

	return (
		<div className="container">
			<Search filter = {filter} />
			<div className="container">
				<div className="row justify-content-center align-items-center g-2">
					{FilterdUsers.map((user) => {
						return (
							<div className="col-4 my-4" key={user.id}>
								<UserCard
									img={user.image}
									name={user.username}
									phone={user.phone}
									email={user.email}
									virifed={user.is_verified}
                  
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default LayoutMain;
