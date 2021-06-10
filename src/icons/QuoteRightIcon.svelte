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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-quote-right {customClass}"><path d="M8 4H4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 2 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2zM22 4h-4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 16 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2z"/></svg>
