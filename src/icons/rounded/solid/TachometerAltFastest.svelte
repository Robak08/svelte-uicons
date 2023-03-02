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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 4.052A12 12 0 0 0 3.611 21.571 4.994 4.994 0 0 0 7.12 23h9.767a4.84 4.84 0 0 0 3.354-1.288A12.053 12.053 0 0 0 20 4.052Zm-.581 12.137a1 1 0 0 1-1.313.523L13.189 14.6a2 2 0 1 1 .787-1.839l4.915 2.114a1 1 0 0 1 .523 1.314ZM20.062 13a1 1 0 0 1-1.116-.868 6.929 6.929 0 0 0-2-4.079 7 7 0 0 0-9.9 9.9c.1.105.212.2.321.3a1 1 0 0 1-1.324 1.5 8.797 8.797 0 0 1-.411-.387 9 9 0 0 1 12.732-12.73 8.92 8.92 0 0 1 2.567 5.245A1 1 0 0 1 20.062 13Z"/></svg>
  