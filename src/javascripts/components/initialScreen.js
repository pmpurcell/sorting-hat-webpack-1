import renderToDOM from '../helpers/renderToDom';

const initialScreen = () => {
  const domString = `    <div class="jumbotron text-center">
    <h1 class="display-4">Welcome to Hoggy Hoggy Warts!</h1>
    <p class="lead">
      Stupefy alohomora totalus orchideous inflamarae locomotor momentum
      serpensortia totalus. Patronum kedavra legilimens petrificus expecto
      banishing expecto patronum arania mobilicorpus petrificus.
    </p>
    <hr class="my-4" />
    <p>
      Ennervate serpensortia deletrius evanesco imperio funnunculus
      impedimenta.
    </p>
    <div id="button-div">
      <button id="start-sorting" class="btn btn-primary btn-lg">
        Let's Start Sorting
      </button>
    </div>
    <div id="sorting-form" class="sorting-form"></div>
  </div>
  <div class="cards d-flex p-4">
    <div class="new-student-cards">
      <center><h4>First Year's</h4></center>
      <div
        id="first-years-card-display"
        class="d-flex flex-wrap justify-content-center"
      ></div>
    </div>

    <div class="moldy-voldy-cards">
      <center><h4>He Who Must Not Be Named's Army</h4></center>
      <div
        id="voldermorts-army"
        class="d-flex flex-wrap justify-content-center voldermorts-army mb-5"
      >
        No Death Eaters...yet!
      </div>
    </div>
  </div>

  <script
    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"
  ></script>
    `;

  renderToDOM('body', domString);
};

export default initialScreen;
