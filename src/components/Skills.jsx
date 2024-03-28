export default function Skills({ skills }) {
  return (
    <div className="w3-card w3-round w3-white w3-hide-small">
      <div className="w3-container">
        <p>Skills</p>
        <p>
          {skills.map((skill) => (
            <span className="w3-tag w3-small w3-theme" key={skill}>
              {skill}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
