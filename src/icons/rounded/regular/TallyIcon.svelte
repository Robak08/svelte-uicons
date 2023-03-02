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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.912 6.655a.998.998 0 0 0-1.321-.503L22 6.417V1a1 1 0 1 0-2 0v6.314l-4 1.795V1a1 1 0 1 0-2 0v9.006l-4 1.795V1a1 1 0 0 0-2 0v11.698l-4 1.795V1a1 1 0 0 0-2 0v14.39l-1.409.632a1 1 0 1 0 .819 1.824l.591-.265v5.418a1 1 0 1 0 2 0v-6.316l4-1.794v8.11a1 1 0 1 0 2 0v-9.006l4-1.794v10.802a1 1 0 1 0 2 0v-11.7l4-1.794v13.494a1 1 0 1 0 2 0V8.609l1.409-.632a1 1 0 0 0 .503-1.322Z"/></svg>
  