# next-export-fixer
Fix the wrong paths after using export on nextjs cli

# Install and usage
`npm i next-export-fixer -D`

Inside your package.json add this on "scripts":
```
"scripts": {
    "export": "next build && next export && next-export-fixer"
  },
```

Once you are ready to publish, on your project root: `npm run export`