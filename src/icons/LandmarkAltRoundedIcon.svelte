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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-landmark-alt {customClass}"><path d="M24 23a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h22a1 1 0 0 1 1 1ZM3 18v-6H2a1 1 0 1 1 0-2h1.056A9.017 9.017 0 0 1 11 2.056V1a1 1 0 1 1 2 0v1.056A9.017 9.017 0 0 1 20.944 10H22a1 1 0 1 1 0 2h-1v6h1a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h1Zm7-6v6h4v-6h-4Zm9 6v-6h-3v6h3ZM5.072 10h13.857c-.487-3.388-3.408-6-6.928-6S5.56 6.612 5.073 10ZM5 18h3v-6H5v6Z"/></svg>
  