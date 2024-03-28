import Pictures from "./Picture";

export default function Profile({
  picture_file_loc,
  jobclass,
  bday,
  age,
  address,
}) {
  return (
    <div class="w3-card w3-round w3-white">
      <div class="w3-container">
        <h4 class="w3-center">My Profile</h4>
        <p class="w3-center">
          <Pictures picture_file_loc={picture_file_loc} />
        </p>
        <hr />
        <p>{jobclass}</p>
        <p>
          {bday}, {age} yrs
        </p>
        <p>{address}</p>
      </div>
    </div>
  );
}
