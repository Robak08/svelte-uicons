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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-double-right {customClass}"><path d="M11.828 24a1 1 0 0 1-.707-1.707l8.172-8.172a3 3 0 0 0 0-4.242l-8.172-8.172A1 1 0 1 1 12.535.293l8.172 8.172a5 5 0 0 1 0 7.07l-8.172 8.172a1 1 0 0 1-.707.293z"/><path d="M1.828 24a1 1 0 0 1-.707-1.707l9.586-9.586a1 1 0 0 0 0-1.414L1.121 1.707A1 1 0 0 1 2.535.293l9.586 9.586a3 3 0 0 1 0 4.242l-9.586 9.586a1 1 0 0 1-.707.293z"/></svg>
