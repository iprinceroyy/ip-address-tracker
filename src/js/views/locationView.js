class LocationView {
  _parentEl = document.querySelector('.tracker__info');
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('beforeend', markup);
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
                <p>utc ${this._data.timezone}</p>
            </time>

            <address class="data">
                <p>isp</p>
                <p>${this._data.isp}</p>
            </address>`;
  }
}

export default new LocationView();
