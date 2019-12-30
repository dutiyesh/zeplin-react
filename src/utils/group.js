/**
 * A function to get group from a layer
 *
 * @param {object} layer - A layer object
 */
export function getGroup(layer) {
  if (layer.type === 'shape') {
    const parent = layer.parent;

    if (parent.type === 'group') {
      return parent;
    }

    return null;
  }
}
