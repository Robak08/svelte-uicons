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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.051 0h-14a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm1 11h2v2h-2zm0-2V7h2v2zm-16 4h-2v-2h2zM6 13v-2h12v2zM4.051 9h-2V7h2zm-2 6h2v2h-2zm18 0h2v2h-2zm2-10h-2V2.184a3 3 0 0 1 2 2.816zm-18-2.816V5h-2a3 3 0 0 1 2-2.816zM2.051 19h2v2.816a3 3 0 0 1-2-2.816zm18 2.816V19h2a3 3 0 0 1-2 2.816z"/></svg>
  