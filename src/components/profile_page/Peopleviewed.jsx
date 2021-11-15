import { Image, Button, Spinner } from "react-bootstrap";
import "../../assats/css/profile_page css/people_view.css";
import { Link } from "react-router-dom";
const Peopleviewed = ({ title, userData, isLoading }) => {
  return (
    <div class="p-3 pl-4 pb-4 mb-3 i_found_the_container bg-light rounded aside">
      <div className="peope-view-user-card">
        <h6>{title}</h6>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {/* card below here */}
        {userData &&
          userData.map((user) => (
            <div className="pt-3 d-flex" key={user._id}>
              <Image src={user.image} />
              <div>
                <div className="pl-2">
                  <Link to={`/profile/${user._id}`}>
                    <p className="mb-0">
                      <strong className="pr-2">{user.name}</strong>
                      <strong>{user.surname}</strong>
                    </p>
                    <p className="mb-0 text-muted">
                      <small>{user.title}</small>
                    </p>
                    <p className="mb-0 text-muted">
                      {/* <small>Euromarketingmaldives</small> */}
                    </p>
                  </Link>
                  <div className="mx-3 pt-2 btn-people-view-connect position-relative">
                    <Button type="button">Connect</Button>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Peopleviewed;
