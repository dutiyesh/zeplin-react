
function layer(context, selectedLayer) {
  console.log(selectedLayer);

  return {
    code: '🚧 Work in progress',
    language: 'javascript',
  }
}

function screen(context, selectedVersion, selectedScreen) {
  console.log(selectedVersion);
}

export default {
  layer,
  screen,
};
