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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 19a1 1 0 0 0-1 1 2 2 0 0 1-2 2h-4v-4h2.1a3.905 3.905 0 0 0 3.9-3.9 6.014 6.014 0 0 0-4.823-5.883l-1.741-.349-2.067 3.632a1 1 0 0 1-1.738-.99l1.738-3.051-.069-.019a1.967 1.967 0 0 1-.605-.231L9.674 9.047a1 1 0 0 1-1.039-1.709l3.043-1.849L11.614 5H8a1 1 0 0 1 0-2h3.352l-.052-.424A3 3 0 0 0 7.619.086L2.91 1.42A4.015 4.015 0 0 0 0 5.269V14a4 4 0 0 0 4 4h1v4H1a1 1 0 0 0 0 2h19a4 4 0 0 0 4-4 1 1 0 0 0-1-1zM7 18h7v4H7z"/></svg>
  