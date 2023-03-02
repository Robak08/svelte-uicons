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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M42.667 234.667h234.667C300.897 234.667 320 215.564 320 192V42.667C320 19.103 300.897 0 277.333 0H42.667C19.103 0 0 19.103 0 42.667V192c0 23.564 19.103 42.667 42.667 42.667zM504.704 18.816A42.665 42.665 0 0 0 469.333 0h-64c-23.564 0-42.667 19.103-42.667 42.667V192c0 23.564 19.102 42.667 42.667 42.667h64C492.898 234.667 512 215.564 512 192V42.667a42.405 42.405 0 0 0-7.296-23.851zM130.517 284.629a42.405 42.405 0 0 0-23.851-7.296h-64C19.103 277.333 0 296.436 0 320v149.333C0 492.898 19.103 512 42.667 512h64c23.564 0 42.667-19.103 42.667-42.667V320a42.67 42.67 0 0 0-18.817-35.371zM493.184 284.629a42.405 42.405 0 0 0-23.851-7.296H234.667C211.103 277.333 192 296.436 192 320v149.333C192 492.898 211.103 512 234.667 512h234.667C492.898 512 512 492.898 512 469.333V320a42.666 42.666 0 0 0-18.816-35.371z"/></svg>
  