import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ['metro.config.js', 'babel.config.js'] },
  {
    plugins: {
      "import": pluginImport,
    },
    rules: {
      "import/order": [
        'error', 
        {
          "newlines-between": "always",
          groups: [
            "external", 
            "builtin", 
            "internal", 
            "sibling", 
            "parent", 
            "index"
          ],

        } 
      ] 
    }
  }
);
