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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-up {customClass}"><path d="m23.707 16.293-8.171-8.172a5.008 5.008 0 0 0-7.072 0L.293 16.293a1 1 0 0 0 1.414 1.414l8.171-8.172a3.008 3.008 0 0 1 4.244 0l8.171 8.172a1 1 0 0 0 1.414-1.414z"/></svg>
