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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-double-small-right {customClass}"><path d="M13.1 19a1 1 0 0 1-.708-1.707l4.586-4.586a1 1 0 0 0 0-1.414L12.4 6.707a1 1 0 0 1 1.415-1.414L18.4 9.879a3 3 0 0 1 0 4.242l-4.586 4.586A1 1 0 0 1 13.1 19z"/><path d="M6.1 19a1 1 0 0 1-.7-1.707L10.689 12 5.4 6.707a1 1 0 0 1 1.411-1.414l6 6a1 1 0 0 1 0 1.414l-6 6A1 1 0 0 1 6.1 19z"/></svg>
