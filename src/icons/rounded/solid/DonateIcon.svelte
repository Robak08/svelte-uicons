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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 20.5c0 1.93-1.57 3.5-3.5 3.5h-17c-3.951-.009-4.805-5.612-1.085-6.81 4.524 6.35 14.648 6.348 19.17 0C22.982 17.65 24 18.952 24 20.5ZM22 10c0 5.514-4.486 10-10 10C-1.248 19.497-1.244.501 12 0c5.514 0 10 4.486 10 10Zm-6 2c0-1.359-.974-2.51-2.315-2.733l-3.041-.506C9.557 8.55 10.003 6.935 11 7h2.268c.356 0 .688.191.867.501a.998.998 0 0 0 1.366.364.998.998 0 0 0 .365-1.366A3.01 3.01 0 0 0 13.268 5H13V4c-.006-1.308-1.995-1.307-2 0v1c-3.435-.019-4.184 5.083-.685 5.733l3.041.506c1.087.211.641 1.826-.356 1.761h-2.268c-.356 0-.688-.191-.867-.501a.998.998 0 0 0-1.366-.364.998.998 0 0 0-.365 1.366A3.01 3.01 0 0 0 10.732 15H11v1c.006 1.308 1.995 1.307 2 0v-1c1.654 0 3-1.346 3-3Z"/></svg>
  