# Change one deployment value

Keep common profile identity and presentation in this module. A deployment
changes a target timeout in its own server `config/properties.js`:

```js
backofficeApplicationInitialization: {
    profiles: {nexus: {target: {timeoutMs: 60000}}}
}
```

Merge this difference into the existing server declaration. Do not replace the
file, duplicate the profile's package list, or move the target into this module.
Test that the changed environment sees the override while the other environment
retains its own target and unselected runtimes remain unaffected.
