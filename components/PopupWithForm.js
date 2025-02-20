import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
  }

  setEventListeners() {
    super.setEventListeners();
    console.log("in child");
  }
}
export default PopupWithForm;
