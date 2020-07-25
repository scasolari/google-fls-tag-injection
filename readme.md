# Google Campaign Manager Floodlight Tag Injection

Simple and useful package for Google CM Floodlight tag injection.

| Value | Type | Required | Description |
| --- | --- | --- | --- |
| **src** | `number` | `true` | Identifies the advertiser that is the source of the Floodlight activity. The value of the `src=` key is the advertiser ID. |
| **type** | `string` | `true` | The group tag string, which identifies the activity group with which the Floodlight activity is associated in Campaign Manager. (The activity group is used for reporting purposes.) You can set your own value for the group tag string or use the default value. The default group tag string is based on the first five letters of the activity group name, plus a string of three random alphanumeric characters, underscores, and dashes. (If the activity group name has fewer than five characters, extra letters are appended before the alphanumeric characters so that there are still eight characters.) |
| **cat** | `string` | `true` | The activity tag string, which identifies the Floodlight activity. You can set your own value for the activity tag string or use the default value. The default activity tag string is based on the first five letters of the activity name, plus a string of three random alphanumeric characters, underscores, and dashes. (If the activity group name has fewer than five characters, extra letters are appended before the alphanumeric characters so that there are still eight characters.) |
| **cfv** | `object` | `false` | Custom Floodlight variables enable you to capture information beyond the basics (visits and revenue) that you can collect with standard parameters in your tags. |


## Install

```
$ npm i google-fls
```

## Usage

```js
// Example 1: Replace src, type, cat and custom_variable with your data
google_fls(src, 'type', 'cat', {
    u1: 'custom_variable', 
    u2: 'custom_variable'
})

// Example 2: Replace src, type and cat with your data
google_fls(src, 'type', 'cat')
```

For more information visit: https://sergiocasolari.com/tools/google-cm-pixel-injection/0.2.4
