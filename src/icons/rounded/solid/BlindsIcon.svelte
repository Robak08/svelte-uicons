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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 21c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-1.302.839-2.402 2-2.816V5a3.006 3.006 0 0 0-2-2.829V4H0a4 4 0 0 1 4-4h13a5 5 0 0 1 5 5v13.184c1.161.414 2 1.514 2 2.816Zm-6-9H0v4h18v-4Zm0-6H0v4h18V6ZM0 18a4 4 0 0 0 4 4h12.101a4.956 4.956 0 0 1 .922-4H0Z"/></svg>
  