# Global Navigation

We use the [eleventy navigation plugin](https://www.11ty.dev/docs/plugins/navigation/) to generate our
nav menu links.

To add a page to the global navigation, add the following into its meta at the top of the .njk file:

```
---
eleventyNavigation:
  key: Home
  order: 1
---
```

The pages will appear in the order specified, from lowest to highest.