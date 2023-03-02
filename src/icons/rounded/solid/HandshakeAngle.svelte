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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 7c.33-2.38 2.12-4.32 4.5-4.94l3.47-.9c.17-.04.33-.14.46-.26l.61-.61a.99.99 0 0 1 .71-.29h6.26c.55 0 1 .45 1 1v8.1c0 .27-.11.54-.31.73L22.46 11H13V8c0-.55-.45-1-1-1s-1 .45-1 1v5c0 1.1-.9 2-2 2s-2-.9-2-2c0 0-.02-6 0-6Zm6 6c0 2.21-1.79 4-4 4s-4-1.79-4-4V7.73a6.037 6.037 0 0 0-2.94 3.77l-.9 3.47c-.04.17-.14.33-.26.46l-.61.61a.99.99 0 0 0-.29.71v6.26c0 .55.45 1 1 1h7.07a1 1 0 0 0 .71-.3l1.34-1.37a1 1 0 0 1 .71-.3l3.33-.02c2.66-.01 5.02-1.81 5.75-4.37l1.31-4.64H13Z"/></svg>
  