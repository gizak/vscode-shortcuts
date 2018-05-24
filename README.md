# Shortcuts

Shortcuts let you add useful icons to the bottom status bar. You can add/edit your own icon appearance, command and tooltip by changing the pre-defeind settings (no code needed!).

## Features

Commands' shortcuts:

![feature X](images/demo.gif)

## Requirements

Latest version of VSCode would be enough.

## Extension Settings

This extension contributes the following settings:

* `shortcuts.buttons`: Define the desired shortcut buttons to be shown in the status bar.
  This is either an array of comma-separated strings with format `icon, command, tooltip`,
  or an array of objects with the following keys: `icon`, `command`, `tooltip`, `align`, `priority`.
* `shortcuts.align`: Default alignment of the shortcut buttons; this can also be overridden per button.
* `shortcuts.priority`: Default order priority of the shortcut buttons; this can also be overridden per button.

Go to `Preferences > Settings` to change these settings. Your changes changes will be applied after VSCode has been restarted.

Commands are listed at [vscode doc site](https://code.visualstudio.com/docs/getstarted/keybindings#_default-keyboard-shortcuts). To find all icons list please check the link [octicons.github.com](https://octicons.github.com)

## Known Issues

Please see: [issues](https://github.com/gizak/vscode-shortcuts/issues).

## Release Notes

### 0.1.0

Allow to configure alignment and order priority of shortcut buttons, and upgrade configuration from comma-separated strings to actual objects.

### 0.0.1

Initial release
