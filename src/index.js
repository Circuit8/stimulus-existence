import { Controller } from "stimulus";

export class ExistenceController extends Controller {
  connect() {
    this.element.dispatchEvent(
      new Event("existence:added", {
        bubbles: true,
        cancelable: false,
      })
    );
  }

  remove() {
    this.element.dispatchEvent(
      new Event("existence:removed", {
        bubbles: true,
        cancelable: false,
      })
    );

    this.element.remove();
  }
}
