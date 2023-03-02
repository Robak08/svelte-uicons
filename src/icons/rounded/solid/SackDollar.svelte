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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.053 5.079c.971-.909 2.344-2.36 2.894-3.744C16.202.694 15.69 0 15 0H9c-.69 0-1.202.693-.947 1.335.55 1.384 1.923 2.835 2.894 3.744C5.569 5.878 1 12.618 1 18c0 3.309 2.691 6 6 6h10c3.309 0 6-2.691 6-6 0-5.382-4.569-12.122-9.947-12.921Zm-2.409 8.682 3.042.507a2.762 2.762 0 0 1 2.315 2.733c0 1.654-1.346 3-3 3v1a1 1 0 0 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 0 1 1.731-1.001c.178.308.511.5.867.5h2.268c.551 0 1-.449 1-1a.768.768 0 0 0-.644-.76l-3.042-.507A2.762 2.762 0 0 1 8 13.001c0-1.654 1.346-3 3-3v-1a1 1 0 0 1 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 0 1-1.731 1.001 1.004 1.004 0 0 0-.867-.5H11c-.551 0-1 .449-1 1 0 .378.271.698.644.76Z"/></svg>
  