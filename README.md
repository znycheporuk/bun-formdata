# Example of non working action in SolidStart, also happens in SvelteKit, Astro, Qwik and others

Works fine in node, but fails in bun. Run

```bash
bun i
bun --bun dev
```

and try to submit the form on page

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
