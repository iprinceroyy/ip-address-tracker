class SearchView {
  _parentEl = document.querySelector('.tracker__form');

  getQuery() {
    const query = this._parentEl.querySelector('.tracker__form--input').value;
    console.log(query);
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.tracker__form--input').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
