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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-indent {customClass}"><path d="M1 6h22a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2ZM23 9H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM23 19H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM23 14H9a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM1.707 16.245l2.974-2.974a1.092 1.092 0 0 0 0-1.542L1.707 8.755A1 1 0 0 0 0 9.463v6.074a1 1 0 0 0 1.707.708Z"/></svg>
