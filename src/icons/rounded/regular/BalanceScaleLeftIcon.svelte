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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.938 10.654-3.071-8.335A2.348 2.348 0 0 0 18.043.854L13 2.199V1a1 1 0 0 0-2 0v1.732L5.746 4.133a4.009 4.009 0 0 0-2.723 2.482L.062 14.654c-.041.111-.062.647-.062.647 0 2.506 2 4.698 4.503 4.698a4.46 4.46 0 0 0 3.094-1.236 4.52 4.52 0 0 0 1.402-3.264s-.021-.732-.06-.842L5.87 6.216c.124-.063.255-.114.392-.15L11 4.802V22H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2h-6V4.268l4.896-1.306-2.834 7.691c-.041.111-.062.647-.062.647 0 2.506 1.871 4.567 4.26 4.692a4.461 4.461 0 0 0 3.338-1.229A4.52 4.52 0 0 0 24 11.499s-.021-.735-.062-.846ZM4.364 17.997C3.283 17.94 2.378 17.095 2.098 16H6.95c-.1.499-.35.954-.729 1.313a2.46 2.46 0 0 1-1.856.683ZM6.572 14H2.434l2.083-5.653L6.573 14ZM19.5 4.393 21.566 10h-4.132L19.5 4.393Zm-.136 9.604c-1.081-.057-1.986-.902-2.266-1.997h4.851c-.1.499-.35.954-.729 1.313a2.483 2.483 0 0 1-1.856.683Z"/></svg>
  