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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-alt-down {customClass}"><path d="m16.913 19.35-4.361 4.418a.773.773 0 0 1-1.104 0L7.087 19.35c-.492-.498-.143-1.35.552-1.35H11V1a1 1 0 1 1 2 0v17h3.361c.695 0 1.044.852.552 1.35Z"/></svg>
