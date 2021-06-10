<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };

  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
          ? size.slice(0, size.length -1) + 'em'
          : parseInt(size) + 'px';
  }
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-right {customClass}"><path d="m23.124 9.907-3.879-3.878a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L21.386 11H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h20.447l-3.616 3.615a1 1 0 0 0 0 1.415 1 1 0 0 0 1.414 0l3.88-3.879a3.008 3.008 0 0 0-.001-4.244z"/></svg>
