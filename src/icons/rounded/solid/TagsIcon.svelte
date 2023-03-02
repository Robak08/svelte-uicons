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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.526 8.284 13.937.879a3 3 0 0 0-2.528-.851L4.521.97a1 1 0 1 0 .272 1.981l6.889-.942c.306-.042.622.063.851.292l7.59 7.405a3.004 3.004 0 0 1 .323 3.847 4.93 4.93 0 0 0-.911-1.3L12.06 4.841a3.019 3.019 0 0 0-2.528-.851l-6.889.942a1 1 0 0 0-.858.881l-.765 6.916c-.1.911.214 1.804.864 2.453L9.3 22.535a4.961 4.961 0 0 0 3.534 1.464h.017a4.965 4.965 0 0 0 3.543-1.487l3.167-3.208a4.967 4.967 0 0 0 1.423-3.388l.577-.576c1.925-1.95 1.914-5.112-.032-7.057ZM6 10a1 1 0 0 1-1-1c.006-1.308 1.994-1.307 2 0a1 1 0 0 1-1 1Z"/></svg>
  