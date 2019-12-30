import { getGroup } from './utils/group';
import { createElement } from './utils/elements';
import { getJSX, getBoxJSX } from './utils/jsx';
import COMPONENTS from './utils/components';

function layer(context, selectedLayer) {
  console.log(selectedLayer);

  const selectedGroup = getGroup(selectedLayer);

  if (!selectedGroup) {
    return {
      code: 'No group found!',
      language: 'javascript',
    }
  }

  console.log('selectedGroup', selectedGroup);

  const groupName = selectedGroup.componentName || selectedGroup.name;

  if (COMPONENTS.includes(groupName)) {
    const element = createElement(groupName, selectedGroup);
    const JSX = getJSX(element);

    return {
      code: JSX,
      language: "javascript"
    }
  } else {
    // use `Box` as a group element if selected layer name was not found
    const element = createElement('Box', selectedGroup);
    const JSX = getBoxJSX(element);

    return {
        code: JSX,
        language: 'javascript'
    }
  }
}

function screen(context, selectedVersion, selectedScreen) {
  console.log(selectedVersion);
}

export default {
  layer,
  screen,
};
