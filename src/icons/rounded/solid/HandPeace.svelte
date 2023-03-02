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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.5 15c-.83 0-1.5-.67-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5ZM18 13.5v-4c0-.83-.67-1.5-1.5-1.5S15 8.67 15 9.5v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5Zm2.5 3.5c-.74 0-1.43-.23-2-.63-.57.4-1.26.63-2 .63-1.87 0-3.4-1.47-3.5-3.31v-3.46l1.96-8.39c.1-.43 0-.88-.26-1.24a1.5 1.5 0 0 0-1.12-.6c-.71-.05-1.39.5-1.57 1.27L10 9.97l-2.01-8.7C7.81.5 7.13-.04 6.42 0c-.46.03-.85.24-1.12.6-.26.35-.36.8-.26 1.23l1.77 7.72c.68.06 1.33.29 1.9.71.96.69 1.56 1.76 1.66 2.93.08 1.03-.23 2.04-.87 2.83v.03c-.07.07-2.28 2.28-2.62 2.63a.996.996 0 1 1-1.41-1.41l2.33-2.33c.86-.86.77-2.3-.26-3.05-.81-.58-1.94-.41-2.65.29L2.2 14.87c-1.6 1.6-1.6 4.19 0 5.79l1.59 1.59a5.987 5.987 0 0 0 4.24 1.76H17c2.76 0 5-2.24 5-5v-2.34c-.45.22-.96.34-1.5.34Z"/></svg>
  