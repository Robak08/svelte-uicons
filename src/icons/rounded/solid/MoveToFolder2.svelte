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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m21.52 23.71 1.61-1.61c.58-.58.87-1.34.87-2.09s-.29-1.52-.87-2.09l-1.61-1.61a.996.996 0 1 0-1.41 1.41l1.29 1.29H14c-.55 0-1 .45-1 1s.45 1 1 1h7.4l-1.29 1.29a.996.996 0 1 0 1.41 1.41ZM14 23H5c-2.76 0-5-2.24-5-5V9h24v6.94l-1.06-1.06A3 3 0 0 0 17.82 17h-3.81c-1.65 0-3 1.35-3 3s1.35 3 3 3Zm9.9-16H0V6c0-2.76 2.24-5 5-5h2.53c.46 0 .93.11 1.34.32l3.16 1.58c.14.07.29.11.45.11h6.53c2.41 0 4.43 1.72 4.9 4Z"/></svg>
  