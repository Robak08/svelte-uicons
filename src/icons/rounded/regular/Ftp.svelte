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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 20h-8.184A3 3 0 0 0 13 18.184V15h4a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-4.379a1 1 0 0 1-.565-.175L10.17.528A2.992 2.992 0 0 0 8.47 0H7a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h4v3.184A3 3 0 0 0 9.184 20H1a1 1 0 0 0 0 2h8.184a2.982 2.982 0 0 0 5.632 0H23a1 1 0 0 0 0-2ZM7 2h1.47a1 1 0 0 1 .567.176l1.884 1.3a2.983 2.983 0 0 0 1.7.529H17a2 2 0 0 1 2 2H5V4a2 2 0 0 1 2-2Zm-2 9V8h14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm7 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"/></svg>
  