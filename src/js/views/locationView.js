import spinner from '../../images/spinner-gap.svg';

class LocationView {
  _parentEl = document.querySelector('.tracker__info');
  _errorMessage = `IP not found! Please check you internet connection & retry`;
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object} data - An object of data to be rendered
   * @this {Object} An instance of LocationView
   * @returns {}
   * @public
   */
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._addMarkup(markup);
  }

  /**
   * Render a error message to the DOM
   * @param {string} err - An error message of the Error object
   * @this {Object} an instance of LocationView
   * @returns {}
   * @public
   */
  renderError(err) {
    const markup = `
    <p>${this._errorMessage} ${err.message}</p>
    `;
    this._addMarkup(markup);
  }

  /**
   * Take a markup and add to the DOM
   * @param {html} markup - A markup to be rendered
   * @yields {}
   * @protected
   */
  _addMarkup(markup) {
    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }

  /**
   * Render a spinner to the DOM
   * @requires ../../images/spinner-gap.svg
   * @this {Object} An instance of LocationView
   * @public
   */
  renderSpinner() {
    const markup = `
        <div class="spinner">
          <img src="${spinner}" alt="spinner" />
        </div>
      `;
    this._addMarkup(markup);
  }

  /**
   * Return a markup
   * @returns {markup} A markup to be added to the DOM
   * @protected
   */
  _generateMarkup() {
    return `
      <address class="data">
        <p>ip address</p>
        <p>${this._data.ip}</p>
      </address>

      <address class="data">
        <p>location</p>
        <p>${this._data.city}, ${this._data.country} ${this._data.postalCode}</p>
      </address>

      <time class="data">
        <p>timezone</p>
        <p>UTC ${this._data.timezone}</p>
      </time>

      <address class="data">
        <p>isp</p>
        <p>${this._data.isp}</p>
      </address>
      `;
  }
}

export default new LocationView();
