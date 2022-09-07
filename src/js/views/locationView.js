import spinner from '../../images/spinner-gap.svg';
import warning from '../../images/warning-outline.svg';

class LocationView {
  _parentEl = document.querySelector('.tracker__info');
  _errorMessage = `IP not found! Please type correct IP / domain & retry`;
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
   * @this {Object} an instance of LocationView
   * @returns {}
   * @public
   */
  renderError() {
    const markup = `
        <div class="error">
          <img src="${warning}" alt="warning>
          <p">${this._errorMessage}</p>
        </div> 
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
        <span>ip address</span>
        <span>${this._data.ip}</span>
      </address>

      <address class="data">
        <span>location</span>
        <span>${this._data.city}, ${this._data.country} ${this._data.postalCode}</span>
      </address>

      <time class="data">
        <span>timezone</span>
        <span>UTC ${this._data.timezone}</span>
      </time>

      <address class="data">
        <span>isp</span>
        <span>${this._data.isp}</span>
      </address>
      `;
  }
}

export default new LocationView();
