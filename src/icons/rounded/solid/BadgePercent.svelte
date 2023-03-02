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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12c0-1.626-.714-3.16-1.925-4.124a5.49 5.49 0 0 0-1.59-4.362c-1.15-1.149-2.735-1.731-4.277-1.555-2.014-2.556-6.365-2.604-8.332-.035-3.233-.384-6.342 2.66-5.916 5.868-2.556 2.014-2.605 6.365-.035 8.333a5.49 5.49 0 0 0 1.59 4.362c1.15 1.149 2.737 1.731 4.277 1.555 2.014 2.556 6.365 2.604 8.332.035a5.49 5.49 0 0 0 4.361-1.59c1.149-1.15 1.729-2.74 1.555-4.277A5.487 5.487 0 0 0 24 12.002ZM8 9c.006-1.308 1.994-1.308 2 0-.006 1.308-1.994 1.308-2 0Zm2.832 6.555a1 1 0 0 1-1.664-1.11l4-6a.999.999 0 1 1 1.664 1.11l-4 6ZM15 16c-1.308-.006-1.308-1.994 0-2 1.308.006 1.308 1.994 0 2Z"/></svg>
  