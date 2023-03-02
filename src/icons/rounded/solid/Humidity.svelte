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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.213 1.177a4.947 4.947 0 0 0-6.426 0C2.706 6.231-2.63 13.491 4.222 20.778a11.052 11.052 0 0 0 15.556 0c6.858-7.336 1.522-14.521-4.565-19.601ZM8 10a1 1 0 0 1 2 0 1 1 0 0 1-2 0Zm2.832 6.555a1 1 0 1 1-1.664-1.11l4-6a1 1 0 0 1 1.664 1.11ZM15 17a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z"/></svg>
  