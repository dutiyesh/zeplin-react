import { RGBToHex } from '../utils/colors';

const _defaultProps = {
  color: '#6f6f6f',
  fontSize: 15,
}

/**
 * A function to create `Text` component element.
 *
 * @param {object} group - A layer group
 */
export function createTextElement(layer) {
  const styles = layer.textStyles.map(text => {
    const color = text.textStyle.color;
    const fontSize = text.textStyle.fontSize;

    // TODO: Get color from design system's theme itself
    return {
      color: RGBToHex(color.r, color.g, color.b),
      fontSize,
    }
  });

  return {
    type: 'Text',
    rect: layer.rect,
    props: {
      color: styles.length > 0 ? styles[0].color : _defaultProps.color,
      fontSize: styles.length > 0 ? styles[0].fontSize : _defaultProps.fontSize,
      children: layer.content
    }
  };
};
