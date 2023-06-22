const defaultComponents = [
  "TextInput",
  "TouchableOpacity",
  "TouchableHighlight",
  "TouchableNativeFeedback",
  "Pressable",
];

module.exports = {
  rules: {
    "testid-missing": {
      create(context) {
        const { disableDefaultComponents = [], enableComponents = [] } =
          context.options[0];
        return {
          JSXOpeningElement({ name, attributes }) {
            const componentName = name.name;

            const filteredDefaultComponents = defaultComponents.filter(
              (component) => !disableDefaultComponents.includes(component)
            );
            const mergedAllowedComponents = [
              ...filteredDefaultComponents,
              ...enableComponents,
            ];
            if (mergedAllowedComponents.includes(componentName)) {
              const hasTestIDAttribute = attributes.some(
                (attribute) => attribute.name.name === "testID"
              );

              if (!hasTestIDAttribute) {
                context.report({
                  node: name,
                  message: `Missing 'testID' attribute in ${componentName} component.`,
                });
              }
            }
          },
        };
      },
    },
  },
};
