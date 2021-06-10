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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-italic {customClass}"><path d="M20 0H7a1 1 0 0 0 0 2h5.354L9.627 22H4a1 1 0 0 0 0 2h13a1 1 0 0 0 0-2h-5.354l2.727-20H20a1 1 0 0 0 0-2z"/></svg>
