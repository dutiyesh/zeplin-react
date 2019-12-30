import { createTextElement } from './text';

/**
 * A function to create `Box` component element.
 *
 * @param {object} group - A layer group
 */
export function createBoxElement(group) {
  let box = {
    type: 'Box',
    rect: group.rect,
    props: {
      children: []
    }
  }

  box.props.children = group.layers.map(layer => {
    if (layer.type === 'shape') {
      return {
        type: 'Shape',
        rect: layer.rect,
        props: {}
      }
    }

    if (layer.type === 'group') {
      return createBoxElement(layer);
    }

    if (layer.type === 'text') {
      return createTextElement(layer);
    }
  });

  return box;
}
