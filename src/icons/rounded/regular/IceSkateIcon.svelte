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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 19a1 1 0 0 0-1 1 2 2 0 0 1-2 2h-4v-4h2.1a3.905 3.905 0 0 0 3.9-3.9 6.014 6.014 0 0 0-4.823-5.883L13.3 7.44a2 2 0 0 1-1.592-1.7L11.3 2.576A3 3 0 0 0 7.619.086L2.91 1.42A4.015 4.015 0 0 0 0 5.269V14a4 4 0 0 0 4 4h1v4H1a1 1 0 0 0 0 2h19a4 4 0 0 0 4-4 1 1 0 0 0-1-1ZM2 14V5.269a2.01 2.01 0 0 1 1.455-1.925l4.652-1.32A1.053 1.053 0 0 1 8.328 2a1 1 0 0 1 .986.848L9.466 4H7a1 1 0 0 0 0 2h2.729a3.958 3.958 0 0 0 .245.915L7.635 8.338a1 1 0 0 0 1.039 1.709l2.466-1.5a3.95 3.95 0 0 0 .866.544l-1.375 2.413a1 1 0 0 0 1.738.99l1.638-2.874 2.777.556A4.011 4.011 0 0 1 20 14.1a1.9 1.9 0 0 1-1.9 1.9H4a2 2 0 0 1-2-2Zm5 4h7v4H7Z"/></svg>
  