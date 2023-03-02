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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 7V1a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0Zm-3 1a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Zm6.094 8.738a510.87 510.87 0 0 0-2.437-1.883 3.1 3.1 0 0 0-4.283.007l-1.9 1.606a12.781 12.781 0 0 1-6.937-6.945l1.6-1.9a3.1 3.1 0 0 0 .005-4.28S7.292.94 7.26.909A3.08 3.08 0 0 0 2.933.862l-1.149 1c-7.721 8.209 12.2 28.139 20.4 20.3l.912-1.05a3.1 3.1 0 0 0-.002-4.373Z"/></svg>
  