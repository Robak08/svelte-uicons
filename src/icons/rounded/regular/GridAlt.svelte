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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm-3 11h-3V8h3zm2-3h4v3h-4zm-5-2V2h3v4zm-2 0H8V2h3zm0 2v3H8V8zm-5 3H2V8h4zm-4 2h4v3H2zm6 0h3v3H8zm3 5v4H8v-4zm2 0h3v4h-3zm0-2v-3h3v3zm5-3h4v3h-4zm4-8v1h-4V2h1a3 3 0 0 1 3 3zM5 2h1v4H2V5a3 3 0 0 1 3-3zM2 19v-1h4v4H5a3 3 0 0 1-3-3zm17 3h-1v-4h4v1a3 3 0 0 1-3 3z"/></svg>
  