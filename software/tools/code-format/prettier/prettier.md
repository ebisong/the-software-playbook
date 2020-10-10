# Prettier with Javascript, Webstorm, and Git-Commit Hooks
See medium article the [here](https://medium.com/@ebisong18/prettier-with-javascript-webstorm-and-git-commit-hooks-62515fa65514)

Having a common style guide is super valuable to the software delivery team. It prevents the never-ending debates about specific ways of styling code. Being free from these debates allows us to free up our mental capacity and time to move forward in building out our project.

## Here Comes Prettier

Prettier is a tool that takes the headache & arguments out of formatting code. This tool does the work of keeping your code in a consistent style through the codebase. This can be done automatically after a save in the IDE or added as a step in a git commit/push hook.

## Setup & Use Prettier
Implementing Prettier is simple. It only requires us to install, create a config file, and run Prettier commands against our project files.
Use npm or yarn to install Prettier:

    npm install --save-dev prettier

Add the prettier write command as a script in your `package.json`:

```
{
 ...
  "scripts": {
    ...
    "prettier": "npx prettier --write .",
    ...
  },
  ...
}
```

Run command prettier script to auto-format your project code.


    npm run prettier

# Formatting In Webstorm
The prettier plugin comes included in Webstorm. To run auto format with this IDE, use the keyboard shortcut:
macOS
```
Opt-Shift-Cmd-P
```

Windows & Linux
```
Alt-Shift-Ctrl-P
```

## Formatting Using Git Commit hooks

To enable git hooks on your project, install `pretty-quick` and `husky`.
Add a husky entry to your `package.json`

```
{
  ...
  { 
    "husky": {
      "hooks": { 
        "pre-commit":"pretty-quick --staged"
      } 
    }
  }
  ...
}
```

Run git commit command

```
git commit -m 'Keep it Prettier'
```

## You’ve made it Prettier
Now that you have prettier implemented, you will have a consistent style throughout your codebase. This will aid to keep your code clean and maintainable. Super essential to quality software development.
Feel free to recommend any tips!
