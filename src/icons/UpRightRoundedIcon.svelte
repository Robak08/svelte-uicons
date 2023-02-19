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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-up-right {customClass}"><path d="M6.41 23c-1.07 0-2.07-.42-2.83-1.17l-1.41-1.41C1.41 19.66 1 18.66 1 17.59s.42-2.07 1.17-2.83l7.17-7.17-1.47-1.47C7 5.24 6.75 3.99 7.23 2.85A2.956 2.956 0 0 1 10 1h9.01c2.2 0 4 1.8 4 4v9c0 1.23-.7 2.29-1.84 2.77-1.14.47-2.39.23-3.27-.64l-1.48-1.48-7.17 7.17c-.76.76-1.76 1.17-2.83 1.17ZM10 3c-.62 0-.86.47-.92.62-.06.14-.22.65.21 1.09l2.18 2.18c.19.19.29.44.29.71s-.11.52-.29.71l-7.88 7.88a1.983 1.983 0 0 0 0 2.82L5 20.42c.76.76 2.07.76 2.83 0l7.88-7.88a.996.996 0 0 1 1.41 0l2.18 2.18c.44.43.94.27 1.09.21.14-.06.62-.3.61-.92V5c0-1.1-.9-2-2-2h-9Z"/></svg>
  