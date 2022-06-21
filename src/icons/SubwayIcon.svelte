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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-subway {customClass}"><path d="M17 0H7a5.006 5.006 0 0 0-5 5v9a5.008 5.008 0 0 0 4.266 4.946l-2.123 3.539a1 1 0 0 0 1.714 1.03L8.566 19h6.868l2.709 4.515a1 1 0 0 0 1.714-1.03l-2.123-3.539A5.008 5.008 0 0 0 22 14V5a5.006 5.006 0 0 0-5-5Zm-4 11V6h7v5Zm-9 0V6h7v5Zm3-9h10a3 3 0 0 1 2.828 2H4.172A3 3 0 0 1 7 2Zm10 15H7a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1h2v1a3 3 0 0 1-3 3Z"/></svg>
