import './body.css';

function Body() {
  return (
    <body>
      <form>
        <div>
          <input type="radio" id="get"
          name="get" ></input>
          <label for="contactChoice1">GET</label>
          <input type="radio" id="get"
          name="put" ></input>
          <label for="contactChoice1">PUT</label>
        </div>
      </form>
    </body>
  )
}

export default Body;