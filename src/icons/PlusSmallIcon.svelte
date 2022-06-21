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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-plus-small {customClass}"><path d="M17 11h-4V7a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4H7a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z"/></svg>
