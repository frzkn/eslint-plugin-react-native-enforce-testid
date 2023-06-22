# eslint-plugin-react-native-enforce-testid

ESLint plugin for enforcing `testID` attributes in React Native components.

## Installation

Install the plugin via npm:

```shell
npm install eslint-plugin-react-native-enforce-testid --save-dev
```
Ensure that ESLint is installed:
```
npm install eslint --save-dev
```
## Usage
Configure ESLint to use the plugin. Add it to the ESLint configuration:

```javascript
{
  "plugins": ["react-native-enforce-testid"],
  "rules": {
    "react-native-enforce-testid/testid-missing": "error"
  }
}
```

Run ESLint with the plugin:

```shell
npx eslint --ext .js --plugin react-native-enforce-testid .
```
## Rule Details
`testid-missing`
Ensures that specified React Native components have a testID attribute defined.

Triggers an error if a React Native component is missing the testID attribute. Default components checked: Button, TextInput, TouchableOpacity, TouchableHighlight, Pressable.

Customize the checked components in the ESLint configuration.

```javascript
module.exports = {
  plugins: ['react-native-enforce-testid'],
  rules: {
    'react-native-enforce-testid/testid-missing': [
      'error',
      {
        components: ['Button', 'TouchableOpacity'], // Enable rule for these components
      },
    ],
  },
};
```


Contributing
Contributions are welcome! Submit issues or pull requests on the GitHub repository.

License
This project is licensed under the MIT License.
