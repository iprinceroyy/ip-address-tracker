import spinner from '../../images/spinner-gap.svg';

class LocationView {
  _parentEl = document.querySelector('.tracker__info');
  _errorMessage = `IP not found! Please check you internet connection & retry`;
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._addMarkup(markup);
  }

  renderError(err) {
    const markup = `
    <p>${this._errorMessage} ${err.message}</p>
    `;
    this._addMarkup(markup);
  }

  _addMarkup(markup) {
    this._parentEl.innerHTML = '';

    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <img src="${spinner}" alt="spinner" />
        </div>
      `;
    this._addMarkup(markup);
  }

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
