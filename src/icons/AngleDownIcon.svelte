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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-down {customClass}"><path d="M12 17.169a4.985 4.985 0 0 1-3.536-1.462L.293 7.535a1 1 0 0 1 1.414-1.414l8.171 8.172a3.005 3.005 0 0 0 4.244 0l8.171-8.172a1 1 0 1 1 1.414 1.414l-8.171 8.172A4.985 4.985 0 0 1 12 17.169z"/></svg>
