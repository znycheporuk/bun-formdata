# Example of non working action in SolidStart, also happens in SvelteKit, Astro, Quick and others

Works fine in node, but fails in bun

```bash
bun i
bun --bun dev
```

## Example of error:

```bash
[h3] [unhandled] 1 | export default "native";
    ^
error: FormData parse error missing final boundary
      at formData (native:1:1)

1 | export default "native";
    ^
TypeError: FormData parse error missing final boundary
      at formData (native:1:1)
```
