import './header.css';

function HeaderRadio() {
  return (
    <form id="radioForm">
      <div>
        <input type="radio" id="get"
        name="get" ></input>
        <label for="get">GET</label>

        <input type="radio" id="post"
        name="post" ></input>
        <label for="contactChoice1">POST</label>

        <input type="radio" id="putt"
        name="put" ></input>
        <label for="put">PUT</label>

        <input type="radio" id="delete"
        name="delete" ></input>
        <label for="delete">DELETE</label>
      </div>
  </form>
  )
}

export default HeaderRadio;