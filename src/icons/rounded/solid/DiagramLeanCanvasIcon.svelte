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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 16h-4V2h4v14Zm2-7v7h2V9h-2Zm4 7h4V7c0-2.41-1.72-4.43-4-4.9V16ZM6 9v7h2V9H6Zm-2 7V2.1C1.72 2.57 0 4.59 0 7v9h4Zm7.01 2H.1A5 5 0 0 0 5 22h6v-4Zm2.01 0v4h5.99c2.41 0 4.43-1.72 4.9-4h-10.9ZM6 7h2V2H6v5Zm10 0h2V2h-2v5Z"/></svg>
  