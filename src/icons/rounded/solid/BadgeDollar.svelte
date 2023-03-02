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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12c0-1.626-.714-3.16-1.925-4.124a5.49 5.49 0 0 0-1.59-4.362c-1.15-1.149-2.734-1.731-4.277-1.555-2.014-2.556-6.365-2.605-8.332-.035a5.482 5.482 0 0 0-4.362 1.59c-1.15 1.15-1.729 2.74-1.555 4.277-2.555 2.014-2.605 6.366-.035 8.332a5.488 5.488 0 0 0 1.59 4.362c1.15 1.151 2.744 1.732 4.277 1.555 2.015 2.556 6.365 2.605 8.333.035a5.492 5.492 0 0 0 4.361-1.59c1.149-1.15 1.729-2.74 1.555-4.277A5.487 5.487 0 0 0 24 12Zm-11 5v1c-.006 1.308-1.994 1.307-2 0v-1h-.268c-1.319.125-3.767-1.645-2.233-2.865a1 1 0 0 1 1.366.365c.178.308.511.5.867.5H13c.997.065 1.442-1.55.356-1.76l-3.042-.507c-3.501-.65-2.747-5.753.685-5.733V6c.006-1.308 1.994-1.307 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 1 1-1.73 1.001 1.004 1.004 0 0 0-.867-.5H11c-.997-.065-1.443 1.55-.356 1.76l3.041.507c3.502.649 2.748 5.753-.685 5.733Z"/></svg>
  