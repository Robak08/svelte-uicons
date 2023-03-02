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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3 2.5a2.5 2.5 0 1 1 5.002.002A2.5 2.5 0 0 1 3 2.5ZM18.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM2.418 18.038a1.005 1.005 0 0 0-1.236.688l-1.143 4a1 1 0 1 0 1.923.548l1.143-4a1 1 0 0 0-.687-1.236Zm21.543 4.688-1.143-4a1.005 1.005 0 0 0-1.236-.688 1 1 0 0 0-.687 1.236l1.143 4a1 1 0 0 0 1.923-.548Zm-1.823-6.712L19 18.06V23a1 1 0 1 1-2 0v-5.482c0-.338.171-.653.454-.838l1.497-.976-1.634-6.116L16 11.81v2.691c0 1.379-1.122 2.5-2.5 2.5h-3a2.503 2.503 0 0 1-2.5-2.5V11.81L6.689 9.599 5.1 15.737l1.446.943c.283.185.454.5.454.838V23a1 1 0 1 1-2 0v-4.94l-3.149-2.053a4.016 4.016 0 0 1-1.768-4.183l.748-2.76C1.19 7.313 2.803 6 4.651 6c1.376 0 2.666.735 3.368 1.919l.957 1.614A2.474 2.474 0 0 1 10.501 9h3c.576 0 1.101.204 1.525.533l.957-1.614A3.933 3.933 0 0 1 19.351 6a3.93 3.93 0 0 1 3.834 3.124l.718 2.641c.349 1.681-.366 3.364-1.765 4.249Z"/></svg>
  