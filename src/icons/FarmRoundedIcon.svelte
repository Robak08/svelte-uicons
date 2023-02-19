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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-farm {customClass}"><path d="m23.328 8.426-3.001-4.502a4.003 4.003 0 0 0-1.752-1.458L13.576.324a4.012 4.012 0 0 0-3.152 0L5.426 2.466a3.992 3.992 0 0 0-1.752 1.458L.672 8.426A3.99 3.99 0 0 0 0 10.645V19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-8.355c0-.792-.232-1.56-.672-2.219Zm-9.749 9.665L17 15.292v5.598l-3.421-2.799ZM15.198 22H8.801L12 19.383 15.199 22Zm-3.199-5.201L8.578 14h6.842l-3.421 2.799Zm-5-1.507 3.421 2.799-3.421 2.799v-5.598Zm15 3.708c0 1.654-1.346 3-3 3v-7c0-1.654-1.346-3-3-3H8c-1.654 0-3 1.346-3 3v7c-1.654 0-3-1.346-3-3v-8.355c0-.396.116-.78.336-1.109l3.001-4.502c.216-.323.519-.576.876-.729l4.999-2.142a2.004 2.004 0 0 1 1.575 0l4.999 2.142c.357.153.661.406.876.729l3.001 4.502c.22.33.336.713.336 1.109V19ZM12 4c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3Zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1Z"/></svg>
  