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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 23a1 1 0 0 1-1 1H3c-1.654 0-3-1.346-3-3V1C.006-.308 1.994-.307 2 1v20c0 .551.449 1 1 1h20a1 1 0 0 1 1 1Zm-.858-13.1-2.021-2.021c-1.134-1.134-3.11-1.134-4.243 0l-1.879 1.878-3.879-3.878c-1.133-1.134-3.109-1.134-4.242 0l-2 2A2.978 2.978 0 0 0 3.999 10v7c0 1.654 1.346 3 3 3h14.006a3.004 3.004 0 0 0 3-2.991l.015-4.979a3.015 3.015 0 0 0-.879-2.13Z"/></svg>
  