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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-reflect-horizontal {customClass}"><path d="M13 1v22c0 .55-.45 1-1 1s-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1ZM9 12c0 .65-.28 1.28-.76 1.71L3.16 18.5a1.87 1.87 0 0 1-2.03.34c-.69-.3-1.12-.96-1.12-1.72V6.88c0-.75.43-1.41 1.12-1.72.69-.3 1.47-.18 2.02.33l5.11 4.81c.47.42.75 1.04.75 1.69Zm-2 0s-.01-.14-.1-.22L2 7.17v9.67l4.88-4.6c.1-.09.12-.19.12-.24Zm17-5.12v10.25c0 .75-.43 1.41-1.12 1.72a1.847 1.847 0 0 1-2.02-.34l-5.11-4.81c-.47-.42-.75-1.04-.75-1.69s.28-1.27.76-1.71l5.08-4.79c.57-.52 1.34-.65 2.03-.34.69.3 1.12.96 1.12 1.72Z"/></svg>
  