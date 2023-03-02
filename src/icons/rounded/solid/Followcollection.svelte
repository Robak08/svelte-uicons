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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 11H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h3c2.21 0 4 1.79 4 4v3c0 2.21-1.79 4-4 4Zm13 13h-3c-2.21 0-4-1.79-4-4v-3c0-2.21 1.79-4 4-4h3c2.21 0 4 1.79 4 4v3c0 2.21-1.79 4-4 4ZM7 24H4c-2.21 0-4-1.79-4-4v-3c0-2.21 1.79-4 4-4h3c2.21 0 4 1.79 4 4v3c0 2.21-1.79 4-4 4ZM21.25 0c-1.34 0-2.51 1.05-2.76 2.44C18.24 1.05 17.09 0 15.75 0 14.23 0 13 1.35 13 3.02c0 2.38 3.1 5.21 4.65 6.45.5.4 1.21.4 1.71 0 1.54-1.24 4.65-4.07 4.65-6.45 0-1.67-1.23-3.02-2.75-3.02Z"/></svg>
  