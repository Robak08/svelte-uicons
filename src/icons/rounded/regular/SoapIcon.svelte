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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 7.964V7a3 3 0 0 0-2-2.816V2h4a1 1 0 0 0 0-2h-7a3 3 0 0 0-3 3v1.184A3 3 0 0 0 7 7v.964A8.943 8.943 0 0 0 2 16v2a6.006 6.006 0 0 0 6 6h8a6.006 6.006 0 0 0 6-6v-2a8.943 8.943 0 0 0-5-8.036zM11 3a1 1 0 0 1 1-1h1v2h-2zM9 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm11 11a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2a6.968 6.968 0 0 1 3.394-6h9.212A6.968 6.968 0 0 1 20 16zm-5-4H9a3 3 0 0 0 0 6h6a3 3 0 0 0 0-6zm0 4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"/></svg>
  