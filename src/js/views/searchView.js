import mapView from './mapView';

/** @public */
class SearchView {
  _parentEl = document.querySelector('.tracker__form');

  /**
   * Get the input value from the user
   * @public
   * @returns {string} An input value
   * @this {Object} An instance of SearchView
   */
  getQuery() {
    const query = this._parentEl.querySelector('.tracker__form--input').value;
    this._clearInput();

    mapView.clearMap();

    return query;
  }

  /**
   * @protected
   */
  _clearInput() {
    this._parentEl.querySelector('.tracker__form--input').value = '';
  }

  /**
   * Add handler to the element
   * @param {function} handler - A callback function
   * @this {Object} An object of SearchView
   * @public
   */
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
