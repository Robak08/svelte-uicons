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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-credit-card {customClass}"><circle cx="5.5" cy="15.5" r="1.5"/><path d="M19 3H5C2.2 3 0 5.2 0 8v8c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V8c0-2.8-2.2-5-5-5zM5 5h14c1.7 0 3 1.3 3 3H2c0-1.7 1.3-3 3-3zm14 14H5c-1.7 0-3-1.3-3-3v-6h20v6c0 1.7-1.3 3-3 3z"/></svg>
