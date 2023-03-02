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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m14.507 13.785-9.38 9.332a2.986 2.986 0 0 1-2.31.88 2.986 2.986 0 0 1-1.926-.858 3.003 3.003 0 0 1-.026-4.243l9.409-9.363 4.232 4.252Zm6.469-6.188-4.96-5.009C12.849-.535 9.631-.166 7.994.331A1.995 1.995 0 0 0 6.623 1.78a1.978 1.978 0 0 0 .541 1.894l8.871 8.912 4.941-4.989Zm2.17 2.191-.762-.77-4.937 4.986.719.722c.524.528 1.118.831 2.133.886.806.044 1.563-.318 2.131-.893l.712-.722a3.014 3.014 0 0 0 .005-4.21Z"/></svg>
  