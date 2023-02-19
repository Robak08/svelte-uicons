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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-street-view {customClass}"><path d="M12 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm3 19v-4.171A3.006 3.006 0 0 0 17 12v-2c0-2.206-1.794-4-4-4h-2c-2.206 0-4 1.794-4 4v2c0 1.304.836 2.416 2 2.829V19a1 1 0 1 0 2 0v-5c0-.552-.447-1-1-1s-1-.449-1-1v-2c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v2c0 .551-.448 1-1 1s-1 .448-1 1v5a1 1 0 1 0 2 0Zm9 .5c0-1.748-2.059-3.138-5.797-3.913a1 1 0 1 0-.407 1.958c3.145.653 4.203 1.616 4.203 1.955 0 .748-3.402 2.5-10 2.5s-10-1.752-10-2.5c0-.339 1.059-1.302 4.203-1.955a1 1 0 1 0-.407-1.958c-3.738.775-5.797 2.165-5.797 3.913 0 3.092 6.221 4.5 12 4.5s12-1.408 12-4.5Z"/></svg>
  