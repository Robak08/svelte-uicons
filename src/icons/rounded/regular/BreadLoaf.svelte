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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.95 5.89C23.66 4.22 22.17 3 20.4 3H3.6C1.83 3 .34 4.21.05 5.89-.23 7.49.6 9.01 2 9.67V17c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V9.67c1.4-.66 2.22-2.18 1.95-3.78ZM4 17V8.95c0-.48-.33-.89-.8-.98-.7-.14-1.33-.83-1.18-1.74.12-.7.8-1.23 1.58-1.23h9.9c.83 0 1.5.67 1.5 1.5 0 .71-.5 1.33-1.2 1.47-.47.09-.8.5-.8.98V17c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2Zm16.8-9.03c-.47.09-.8.5-.8.98V17c0 1.1-.9 2-2 2h-3.54c.34-.59.54-1.27.54-2V9.66c1.2-.57 2-1.79 2-3.16 0-.54-.12-1.05-.34-1.5h3.74c.78 0 1.46.53 1.58 1.23a1.5 1.5 0 0 1-1.18 1.74Z"/></svg>
  