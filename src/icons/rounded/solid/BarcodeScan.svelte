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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4 15v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0Zm14-1a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Zm-8 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Zm-3.5 0A1.5 1.5 0 0 0 5 15.5v6a1.5 1.5 0 1 0 3 0v-6A1.5 1.5 0 0 0 6.5 14Zm8 0a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5Zm6.5 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Zm2-4h-1V2a1 1 0 0 0-2 0v8h-1V2a1 1 0 0 0-2 0v8h-1V2.5a1.5 1.5 0 1 0-3 0V10h-2V2a1 1 0 0 0-2 0v8H8V2.5a1.5 1.5 0 1 0-3 0V10H4V2a1 1 0 0 0-2 0v8H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z"/></svg>
  