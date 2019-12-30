import { createButtonElement } from '../components/button';
import { createTextElement } from '../components/text';
import { createBoxElement } from '../components/box';

/**
 * A function to create a component element.
 *
 * @param {string} name - A component name
 * @param {object} group - A layer group
 */
export function createElement(name, group) {
  switch(name) {
    case 'Button':
      return createButtonElement(group);

    case 'Text':
      return createTextElement(group);

    default:
      return createBoxElement(group);
  }
}
