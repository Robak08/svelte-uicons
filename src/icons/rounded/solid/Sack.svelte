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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.053 5.079c.971-.909 2.344-2.36 2.894-3.744C16.202.694 15.69 0 15 0H9c-.69 0-1.202.693-.947 1.335.55 1.384 1.923 2.835 2.894 3.744C5.569 5.878 1 12.618 1 18c0 3.309 2.691 6 6 6h10c3.309 0 6-2.691 6-6 0-5.382-4.569-12.122-9.947-12.921Z"/></svg>
  