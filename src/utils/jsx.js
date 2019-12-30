import { _objectWithoutProperties } from './babel';

export function getJSX(element) {
  const ComponentName = element.type;
  const children = element.props.children;
  const restProps = _objectWithoutProperties(element.props, ["children"]);

  let propList = [];

  // generate prop list
  for (const [key, value] of Object.entries(restProps)) {
    propList.push(`${key}=${(typeof value === 'number' ? `{${value}}` : `"${value}"`)}`);
  }

  return `
<${ComponentName} ${propList.join(' ')}>
  ${children}
</${ComponentName}>
`;
}

/**
 * A function to create a JSX for `Box` component .
 *
 * @param {object} element - A group's element object
 */
export function getBoxJSX(element) {
  const ComponentName = element.type;
  const children = element.props.children;

  return `
<${ComponentName}>
  ${
    children.map(child => {
      switch (child.type) {
        case 'Text':
          return getJSX(child);

        case 'Box':
          return getBoxJSX(child);

        default:
          return '';
      }
    }).join('\n')
  }
</${ComponentName}>
`;
}
