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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.892 24.015a1.913 1.913 0 0 1-.815-.186 1.844 1.844 0 0 1-1-2.207L10.026 19h-1.1a1.933 1.933 0 0 1-1.84-2.479l2.132-5.174c.541-1.676 2.453-1.326 3.811-1.347a1.5 1.5 0 0 1 1.413 2L13 15h1.094a1.905 1.905 0 0 1 1.587 2.958L12.419 23.2a1.848 1.848 0 0 1-1.527.815Zm7.082-18.869a1.04 1.04 0 0 1-.743-.569A8.057 8.057 0 0 0 8.5.137a7.946 7.946 0 0 0-6.384 6.5 8.146 8.146 0 0 0 .033 2.889 1 1 0 0 1-.345.9A5.526 5.526 0 0 0 5.5 20h.834a3.976 3.976 0 0 1-.56-.584 3.887 3.887 0 0 1-.605-3.474l2.179-5.313A4 4 0 0 1 11.1 8h1.921a3.5 3.5 0 0 1 3.3 4.673l-.081.2-.288.6a3.908 3.908 0 0 1 1.394 5.594l-.574.922c8.828-.482 9.835-12.945 1.202-14.843Z"/></svg>
  