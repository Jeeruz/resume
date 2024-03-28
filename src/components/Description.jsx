export default function Description({ description }) {
  return (
    <div class="w3-row-padding">
      <div class="w3-col m12">
        <div class="w3-card w3-round w3-white">
          <div class="w3-container w3-padding">
            <p>
              <i>{description}</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
