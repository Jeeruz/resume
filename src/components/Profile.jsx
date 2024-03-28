import Pictures from "./Picture";

export default function Profile({
  picture_file_loc,
  jobclass,
  bday,
  age,
  address,
}) {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container">
        <h4 className="w3-center">My Profile</h4>
        <p className="w3-center">
          <Pictures picture_file_loc={picture_file_loc} />
        </p>
        <hr />
        <p>{jobclass}</p>
        <p>
          {bday}, {age}
        </p>
        <p>{address}</p>
      </div>
    </div>
  );
}
