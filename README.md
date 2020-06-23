# Stimulus Existence

Stimulus controller to remove elements from the dom, and be notified with an event when they are added.

## Installation

```shell
$ yarn add stimulus-existence
```

## Usage

Register the controller with Stimulus:

```javascript
// application.js
import { Application } from "stimulus";
import { ExistenceController } from "stimulus-existence";

const application = Application.start();
application.register("existence", ExistenceController);
```

Initialize the controller on a container element, use the `remove()` action to delete the entire container. Listen to `existence:added` events to discover when your container has been added to the dom. Useful for Rails Ujs Dom HTML additions, and hooking up with other controllers.

```html
<div
  data-controller="existence"
  data-action="existence:added->other-controller#doSomething"
>
  <button data-action="click->existence#remove">Close me</button>
</div>
```

## Contributing

Fork the project.

Install dependencies

```shell
$ yarn install
```

Write some tests, and add your feature. Send a PR.
