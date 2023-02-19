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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-input-text {customClass}"><path d="M19 3H5C2.243 3 0 5.243 0 8v8c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5Zm3 13c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v8ZM10.137 8.657c-.227-.996-1.065-1.665-2.085-1.665s-1.859.669-2.085 1.665l-1.621 7.121a.999.999 0 0 0 .753 1.196.995.995 0 0 0 1.197-.753l.278-1.222H9.53l.278 1.222a1 1 0 0 0 1.95-.443l-1.621-7.121ZM7.029 13l.887-3.899c.01-.045.024-.108.135-.108s.125.063.135.108L9.073 13H7.028Z"/></svg>
  