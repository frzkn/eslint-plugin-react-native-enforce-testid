module.exports = {
  rules: {
    'testid-missing': {
      create(context) {
        const componentNames = new Set(['Button', 'TextInput', 'TouchableOpacity', 'TouchableHighlight', 'Pressable']);

        return {
          JSXOpeningElement(node) {
            const { name, attributes } = node;

            if (
              name.name === 'View' ||
              (name.name !== 'View' && !componentNames.has(name.name))
            ) {
              return;
            }

            const hasTestIDAttribute = attributes.some(
              (attribute) => attribute.name.name === 'testID'
            );

            if (!hasTestIDAttribute) {
              context.report({
                node,
                message: `Missing 'testID' attribute in ${name.name} component.`,
              });
            }
          },
        };
      },
    },
  },
};
