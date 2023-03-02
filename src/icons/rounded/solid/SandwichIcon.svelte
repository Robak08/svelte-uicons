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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 21.5a2.5 2.5 0 0 1-2.5 2.5h-19a2.5 2.5 0 0 1 0-5h19a2.5 2.5 0 0 1 2.5 2.5ZM22.8 5.375 19.686 1.75a4.974 4.974 0 0 0-5.8-1.327L2.394 5.447A4 4 0 0 0 0 8.887c0 .037 0 .324.006.373A3 3 0 0 0 3 12h18c3.482-.058 3.728-4.539 1.8-6.625Zm.788 9.835-.8-.626a2.945 2.945 0 0 0-3.557 0 2.031 2.031 0 0 1-2.443 0 2.945 2.945 0 0 0-3.557 0 2.031 2.031 0 0 1-2.443 0 2.945 2.945 0 0 0-3.557 0 2.031 2.031 0 0 1-2.443 0 2.945 2.945 0 0 0-3.558 0c-.243.189-.815.611-.816.612A1.741 1.741 0 0 0 0 16a.989.989 0 0 0 1.584.789c.4-.242 1.3-1.207 1.972-.623a4.061 4.061 0 0 0 4.889 0 .942.942 0 0 1 1.111 0 4.061 4.061 0 0 0 4.889 0 .942.942 0 0 1 1.111 0 4.012 4.012 0 0 0 4.889 0c.665-.586 1.591.391 1.971.624a.982.982 0 0 0 1.168-1.58Z"/></svg>
  