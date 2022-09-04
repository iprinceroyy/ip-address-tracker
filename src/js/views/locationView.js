import spinner from '../../images/spinner-gap.svg';

class LocationView {
  _parentEl = document.querySelector('.tracker__info');
  _map = document.querySelector('#map');
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <img src="${spinner}" alt="spinner" />
        </div>
      `;
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
    this._map.insertAdjacentHTML('afterbegin', markup);
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
            </address>`;
  }
}

export default new LocationView();
