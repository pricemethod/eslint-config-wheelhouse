# eslint-config-wheelhouse

Shared Wheelhouse Eslint Config

## Set up

Install

```
npm install --save-dev eslint-config-wheelhouse eslint
```

Add this to your `.eslintrc`

```
{
    "extends": "eslint-config-wheelhouse"
}
```


## Release Process

1. Make a pr with your changes. Get it approved
2. Decide what level of semver version change it is and bump package according in a seperate follow up commit to master
3. Use `npm publish` to release new version
