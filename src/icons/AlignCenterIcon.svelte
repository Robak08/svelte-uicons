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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-align-center {customClass}"><path d="M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM5 9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM19 19H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z"/></svg>
