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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m18.751 12.006 2.182-2.168a5.742 5.742 0 0 0 0-8.148c-2.261-2.245-5.942-2.245-8.203 0l-.795.789A5.794 5.794 0 0 0 7.168 0c-3.2 0-5.797 2.579-5.797 5.758v12.484C1.371 21.421 3.968 24 7.168 24a5.795 5.795 0 0 0 4.767-2.479l.795.789c2.261 2.245 5.942 2.245 8.203 0a5.742 5.742 0 0 0 0-8.148l-2.182-2.156z"/></svg>
  