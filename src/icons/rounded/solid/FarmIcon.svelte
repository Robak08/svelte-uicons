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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.579 15h6.842L12 17.799 8.579 15Zm7.842 9L12 20.383 7.579 24h8.842Zm-2.842-4.909L17 21.89v-5.598l-3.421 2.799ZM24 10.645V19c0 2.757-2.243 5-5 5v-8c0-1.654-1.346-3-3-3H8c-1.654 0-3 1.346-3 3v8c-2.757 0-5-2.243-5-5v-8.355c0-.792.232-1.56.672-2.219l3.001-4.503a4.003 4.003 0 0 1 1.752-1.458L10.424.324a4.012 4.012 0 0 1 3.152 0l4.998 2.142a3.992 3.992 0 0 1 1.752 1.458l3.001 4.502a3.99 3.99 0 0 1 .672 2.219ZM15 7c0-1.654-1.346-3-3-3S9 5.346 9 7s1.346 3 3 3 3-1.346 3-3Zm-3-1c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1ZM7 16.292v5.598l3.421-2.799L7 16.292Z"/></svg>
  