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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-euro {customClass}"><path d="M21.715 18.363A10 10 0 0 1 4.461 15H15a1 1 0 0 0 0-2H4.051a9.829 9.829 0 0 1 0-2H15a1 1 0 0 0 0-2H4.461a10 10 0 0 1 17.254-3.363 1 1 0 0 0 1.542-1.274A11.989 11.989 0 0 0 2.4 9H1a1 1 0 0 0 0 2h1.051c-.028.331-.051.662-.051 1s.023.669.051 1H1a1 1 0 0 0 0 2h1.4a11.989 11.989 0 0 0 20.862 4.637 1 1 0 0 0-1.542-1.274z"/></svg>
  