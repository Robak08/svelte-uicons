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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 24c-1.654 0-3-1.346-3-3v-8c0-.551-.448-1-1-1H7c-.552 0-1 .449-1 1v8c0 1.654-1.346 3-3 3s-3-1.346-3-3V9.724C0 8.059.824 6.51 2.203 5.579l7-4.724a4.98 4.98 0 0 1 5.594 0l7 4.724A4.995 4.995 0 0 1 24 9.724V21c0 1.654-1.346 3-3 3ZM7 10h10c1.654 0 3 1.346 3 3v8a1.001 1.001 0 0 0 2 0V9.724c0-.999-.494-1.929-1.322-2.487l-7-4.724a2.985 2.985 0 0 0-3.355 0L3.322 7.237A2.995 2.995 0 0 0 2 9.724V21a1.001 1.001 0 0 0 2 0v-8c0-1.654 1.346-3 3-3Zm4 13v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm0-6v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Zm5 6v-2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1Z"/></svg>
  