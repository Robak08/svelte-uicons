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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.27 19H9.15c-1.35 0-2.62-.61-3.46-1.66a4.415 4.415 0 0 1-.87-3.74l1.37-5.2a8.107 8.107 0 0 1 7.97-6.39c3.65 0 6.89 2.46 7.86 5.98l1.54 5.43c.37 1.31.09 2.73-.75 3.84a4.41 4.41 0 0 1-3.54 1.76Zm-8.97 2.01c.45 1.72 2 2.99 3.86 2.99s3.41-1.27 3.86-2.99H10.3Zm-7.44-7.85 1.39-5.28c.84-3.78 3.74-6.65 7.4-7.57-.71-.2-1.44-.31-2.2-.31-3.86 0-7.14 2.63-7.97 6.39l-1.37 5.2a4.435 4.435 0 0 0 3.01 5.2c-.42-1.14-.52-2.4-.25-3.63Z"/></svg>
  