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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-address-book {customClass}"><path d="M18 0H8a5 5 0 0 0-4.576 3H2a1 1 0 0 0 0 2h1v2H2a1 1 0 0 0 0 2h1v2H2a1 1 0 0 0 0 2h1v2H2a1 1 0 0 0 0 2h1v2H2a1 1 0 0 0 0 2h1.424A5 5 0 0 0 8 24h10a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Zm-8-7a3 3 0 0 0 0-6 3 3 0 0 0 0 6Zm5 6a1 1 0 0 1-2 0 3 3 0 0 0-6 0 1 1 0 0 1-2 0c.211-6.608 9.791-6.606 10 0Z"/></svg>
