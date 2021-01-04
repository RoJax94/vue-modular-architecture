export default function registerComponents(app) {
  const requireComponent = require.context('./', true, /[A-Z]\w+\.(vue)$/);
  const filenames = requireComponent.keys();

  filenames.forEach((filename) => {
    const componentConfig = requireComponent(filename);
    const componentName = filename
      .split('/')
      .pop()
      .replace(/\.\w+$/, '');

    app.component(componentName, componentConfig.default || componentConfig);
  });
}
