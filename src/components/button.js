const BUTTON_SIZES = {
  32: 'small',
  40: 'medium',
  56: 'large',
}

const _defaultProps = {
  size: 'medium',
  content: '',
}

/**
 * A function to create `Button` component element.
 *
 * @param {object} group - A layer group
 */
export function createButtonElement(group) {
  let size = _defaultProps.size;
  let content = _defaultProps.content;

  group.layers.map(layer => {
    // get button size
    if (layer.type === 'shape' && layer.name === 'Background') {
      const layerHeight = layer.rect.height;

      size = BUTTON_SIZES[layerHeight] || _defaultProps.size;
    }

    // get button text content
    if (layer.type === 'text' && layer.name === 'Text') {
      content = layer.content;
    }
  });

  return {
    type: 'Button',
    props: {
      size,
      children: content
    }
  }
}
